import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Client } from "pg";

export async function POST(request: Request) {
  // Setup PostgreSQL client
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "root",
    database: "postgres",
  });
  try {
    console.log("hekedbvjksbndfjksnjkshdfjksdjkfb")
    client.connect();
    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: "prashantgautam9417@gmail.com",
        pass: "twmfhbstuezckjmq",
      },
    });
    // Parsing the request body
    const body = await request.json();
    const { name, email, phone, date, time, type, symptoms } = body;
    console.log(body, "bodybody", process.env.DATABASE_URL);
    // Step 1: Insert appointment data into PostgreSQL
    const insertQuery = `
      INSERT INTO appointment (name, email, phone, appointment_date, appointment_time, appointment_type, symptoms, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
      RETURNING *;
    `;
    const values = [name, email, phone, date, time, type, symptoms];

    const result = await client.query(insertQuery, values);

    if (result.rows.length === 0) {
      throw new Error("Failed to insert appointment into database");
    }

    const insertedAppointment = result.rows[0];

    // Step 2: Send the confirmation email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Appointment Confirmation - Healing Touch",
      html: `
        <h1>Appointment Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Your appointment has been successfully booked with Dr. Sarah Johnson.</p>
        <p><strong>Details:</strong></p>
        <ul>
          <li>Date: ${new Date(date).toLocaleDateString()}</li>
          <li>Time: ${time}</li>
          <li>Type: ${type}</li>
        </ul>
        <p>Location: 123 Healing Street, Natural City</p>
        <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.</p>
        <p>Best regards,<br>Healing Touch Team</p>
      `,
    });

    // Return success response with the inserted appointment data
    return NextResponse.json({ success: true, data: insertedAppointment });
  } catch (error) {
    console.error("Appointment booking error:", error);
    return NextResponse.json(
      { error: "Failed to book appointment" },
      { status: 500 }
    );
  } finally {
    // Close the database connection
    await client.end();
  }
}

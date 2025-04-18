/*
  # Create appointments table

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `appointment_date` (date)
      - `appointment_time` (text)
      - `appointment_type` (text)
      - `symptoms` (text)
      - `status` (text)

  2. Security
    - Enable RLS on `appointments` table
    - Add policies for reading and inserting appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  appointment_type text NOT NULL,
  symptoms text NOT NULL,
  status text NOT NULL DEFAULT 'pending'
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert appointments"
  ON appointments
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view their own appointments"
  ON appointments
  FOR SELECT
  TO public
  USING (email = auth.jwt()->>'email');
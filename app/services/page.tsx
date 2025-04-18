import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Stethoscope, Baby, Brain, Flower2, Leaf, HeartPulse, Merge as Allergens, Pill as Pills } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Initial Consultation",
      description:
        "Comprehensive evaluation of your health history and current concerns to develop a personalized treatment plan.",
      icon: Stethoscope,
      price: "$200",
      duration: "90 minutes",
    },
    {
      title: "Pediatric Care",
      description:
        "Gentle, natural treatments for children's health issues, from common colds to chronic conditions.",
      icon: Baby,
      price: "$150",
      duration: "60 minutes",
    },
    {
      title: "Mental Health",
      description:
        "Homeopathic support for anxiety, depression, stress, and other emotional concerns.",
      icon: Brain,
      price: "$175",
      duration: "75 minutes",
    },
    {
      title: "Chronic Disease Management",
      description:
        "Long-term care and support for managing chronic health conditions naturally.",
      icon: HeartPulse,
      price: "$175",
      duration: "75 minutes",
    },
    {
      title: "Allergy Treatment",
      description:
        "Natural relief from seasonal allergies and food sensitivities.",
      icon: Allergens,
      price: "$150",
      duration: "60 minutes",
    },
    {
      title: "Acute Care",
      description:
        "Quick relief for sudden illnesses, injuries, and acute conditions.",
      icon: Pills,
      price: "$125",
      duration: "45 minutes",
    },
    {
      title: "Wellness Consultation",
      description:
        "Preventive care and lifestyle advice to maintain optimal health.",
      icon: Leaf,
      price: "$150",
      duration: "60 minutes",
    },
    {
      title: "Follow-up Consultation",
      description:
        "Regular check-ins to monitor progress and adjust treatment plans.",
      icon: Flower2,
      price: "$100",
      duration: "30 minutes",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of homeopathic treatments tailored to your
          individual needs. Each service is designed to support your body's natural
          healing abilities.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">{service.price}</span>
                <span className="text-muted-foreground">{service.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Start Your Healing Journey?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Book your consultation today and take the first step towards natural,
          holistic healing. We're here to support you on your path to wellness.
        </p>
        <Link href="/book">
          <Button size="lg">Book an Appointment</Button>
        </Link>
      </div>
    </div>
  )
}
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Dr. Sarah Johnson</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          With over 20 years of experience in homeopathic medicine, Dr. Sarah Johnson
          has dedicated her life to helping patients achieve optimal health through
          natural healing methods.
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
            alt="Dr. Sarah Johnson"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Journey in Homeopathy</h2>
          <p className="text-muted-foreground mb-6">
            After completing my medical education at the prestigious Royal London
            Homeopathic Hospital, I've spent two decades helping patients find natural
            solutions to their health concerns. My approach combines traditional
            homeopathic principles with modern medical knowledge.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <Award className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Certified Homeopath</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed by the National Board of Homeopathic Medicine
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Personalized Care</h3>
                <p className="text-sm text-muted-foreground">
                  Each treatment plan is tailored to your unique needs
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Regular participation in international homeopathy conferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-muted rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">Holistic Approach</h3>
              <p className="text-muted-foreground">
                We treat the whole person, not just the symptoms, considering physical,
                emotional, and mental well-being.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">Natural Healing</h3>
              <p className="text-muted-foreground">
                Using natural remedies that work with your body's healing mechanisms
                without side effects.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">Preventive Care</h3>
              <p className="text-muted-foreground">
                Focus on preventing illness and maintaining optimal health through
                natural means.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
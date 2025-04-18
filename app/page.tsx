import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Natural Healing for Modern Life
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the power of homeopathic medicine with Dr. Sarah Johnson
          </p>
          <Link href="/book">
            <Button size="lg" className="text-lg">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-muted-foreground">
                  Book your appointments online at your convenience
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                <p className="text-muted-foreground">
                  Tailored treatment plans for your unique needs
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground">
                  Extended hours to accommodate your schedule
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
                <p className="text-muted-foreground">
                  20+ years of homeopathic experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Healing Journey Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the benefits of natural healing with our comprehensive
            homeopathic treatments. Book your consultation now.
          </p>
          <Link href="/book">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
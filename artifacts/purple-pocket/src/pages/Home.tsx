import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Truck,
  Map,
  Package,
  BriefcaseBusiness,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const services = [
    {
      title: "Mail Transportation & Delivery Services",
      description:
        "Secure, timely transportation of mail and critical documents across established regional routes.",
      icon: Mail,
    },
    {
      title: "Logistics Support Services",
      description:
        "Comprehensive coordination of supply chain elements to ensure efficient asset movement.",
      icon: Truck,
    },
    {
      title: "Route Operations Support",
      description:
        "Dedicated operational management for fixed-route delivery and transit schedules.",
      icon: Map,
    },
    {
      title: "Pack-and-Ship Service Support",
      description:
        "Professional preparation, packaging, and dispatch coordination for diverse parcel types.",
      icon: Package,
    },
    {
      title: "Business Service Coordination",
      description:
        "Integrated logistics planning tailored to specific corporate and government requirements.",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <img
              src="/images/logo.png"
              alt="Purple Pocket Logo"
              className="h-10 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
            <span
              className={`font-serif font-bold text-xl tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              Purple Pocket
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("services")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button
              onClick={() => scrollTo("contact")}
              variant="default"
              size="sm"
              className="rounded-full px-6"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 md:hidden"
            >
              <button
                onClick={() => scrollTo("services")}
                className="text-left py-2 font-medium text-muted-foreground"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-left py-2 font-medium text-muted-foreground"
              >
                About
              </button>
              <Button onClick={() => scrollTo("contact")} className="w-full">
                Contact Us
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Logistics & Service Support
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
                  Mail transportation, delivery, and logistics support you can count on.
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                  Purple Pocket provides mail transportation, delivery,
                  logistics, route operations support, and service coordination
                  for businesses and government contractors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollTo("services")}
                    className="rounded-full px-8 text-base h-14"
                  >
                    Request Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo("contact")}
                    className="rounded-full px-8 text-base h-14 border-border bg-white hover:bg-muted"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive logistics solutions executed with precision and
                reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/60 bg-white hover:border-primary/30 transition-colors duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  About Purple Pocket LLC
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Purple Pocket LLC is an East Texas-based logistics and
                    transportation business dedicated to providing steady,
                    dependable service. We operate with a grounded
                    approach—focusing on doing the work right, every single
                    time.
                  </p>
                  <p>
                    Our core competencies include reliable transportation,
                    detailed delivery coordination, structured route operations,
                    and customer-focused service support. We understand that in
                    logistics, consistency is the ultimate metric of success.
                  </p>
                  <p>
                    Whether supporting government contracting requirements or
                    regional business supply chains, Purple Pocket is built to
                    deliver.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-border">
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-2">
                      East TX
                    </div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Base of Operations
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Commitment to Service
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-2xl border border-border bg-muted/30 shadow-xl p-8 space-y-6">
                  <div className="flex items-center gap-3 pb-6 border-b border-border">
                    <img
                      src="/images/logo.png"
                      alt="Purple Pocket Logo"
                      className="h-12 w-auto"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div>
                      <div className="font-serif font-bold text-lg text-foreground">Purple Pocket LLC</div>
                      <div className="text-sm text-muted-foreground">East Texas, USA</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Mail Transportation & Delivery" },
                      { icon: Truck, label: "Logistics Support Services" },
                      { icon: Map, label: "Route Operations Support" },
                      { icon: Package, label: "Pack-and-Ship Service Support" },
                      { icon: BriefcaseBusiness, label: "Business Service Coordination" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-border text-xs text-muted-foreground space-y-1">
                    <p className="font-medium">1509 US HWY 59 S, Linden, TX 75563</p>
                    <p>govtcontracting@purplepocket.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  Ready to work with us?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-10 max-w-md">
                  Reach out to discuss your transportation, logistics, or
                  delivery support needs.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                      <BriefcaseBusiness className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">
                        Business Name
                      </h4>
                      <p className="text-primary-foreground/70">
                        Purple Pocket LLC
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Email</h4>
                      <a
                        href="mailto:govtcontracting@purplepocket.com"
                        className="text-primary-foreground/70 hover:text-white transition-colors"
                      >
                        govtcontracting@purplepocket.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                      <Map className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Address</h4>
                      <p className="text-primary-foreground/70">
                        1509 US HWY 59 S<br />
                        Linden, TX 75563
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-2xl bg-white text-foreground">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll be in touch.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  {...field}
                                  className="bg-muted/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  type="email"
                                  {...field}
                                  className="bg-muted/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="How can we help you?"
                                  className="min-h-[120px] resize-none bg-muted/50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full h-12 text-base font-medium"
                        >
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-muted/20 pb-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Purple Pocket Logo"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="font-serif font-bold text-xl text-white">
                Purple Pocket
              </span>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => scrollTo("services")}
                className="text-sm hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-sm hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-sm hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted/60">
            <p>© 2026 Purple Pocket LLC. All rights reserved.</p>
            <p>
              Purple Pocket is a logistics and service brand operated by Purple
              Pocket LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

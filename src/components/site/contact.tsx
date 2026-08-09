import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { contact, profile } from "@/data/profile";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(10, "Please write at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:?subject=${encodeURIComponent(values.subject)}&body=${body}`;
    toast.success("Opening your email client…", {
      description: "Your message has been prepared for sending.",
    });
    form.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="For research collaboration, speaking invitations, doctoral supervision or academic enquiries."
      className="-mt-[100px]"
    >
      <div className="grid gap-10 items-start sm:grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal direction="left" className="lg:col-span-2">
          <div className="elevate-card rounded-3xl p-6 sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
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
                          <Input type="email" placeholder="you@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Research collaboration" {...field} />
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
                        <Textarea rows={6} placeholder="How can I help?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full rounded-xl">
                  <Send className="size-4" /> Send message
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Messages open in your email client addressed on behalf of {profile.shortName}.
                </p>
              </form>
            </Form>
          </div>
        </Reveal>

        <Reveal direction="right" className="space-y-4 lg:col-span-2">
          {[
            { icon: Building2, label: "Institution", value: `${contact.department}, ${contact.institution}` },
            { icon: MapPin, label: "Location", value: contact.address },
            { icon: Globe, label: "Academic website", value: contact.website, href: contact.website },
            { icon: Mail, label: "Email", value: "faisalsharar786@gmail.com", href: "mailto:faisalsharar786@gmail.com" },
            { icon: Phone, label: "Phone", value: "00918601682557", href: "tel:00918601682557" },
          ].map((item) => (
            <div key={item.label} className="elevate-card flex items-start gap-4 rounded-2xl p-5">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-navy">
                <item.icon className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block break-words whitespace-normal text-sm text-navy underline-offset-4 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 break-words whitespace-normal text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Map of ${contact.institution}`}
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

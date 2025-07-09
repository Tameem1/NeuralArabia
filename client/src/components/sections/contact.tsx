import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LoadingSpinner } from "@/components/interactive/LoadingSpinner";
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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  serviceType: z.string().min(1, { message: "Please select a service" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { elementRef: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceType: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.message"),
      });
      form.reset();
    } catch (error) {
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.message"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      id: "address",
      icon: "map-marker-alt",
      title: t("contact.info.address.title"),
      text: t("contact.info.address.text"),
    },
    {
      id: "email",
      icon: "envelope",
      title: t("contact.info.email.title"),
      text: t("contact.info.email.text"),
    },
    {
      id: "phone",
      icon: "phone-alt",
      title: t("contact.info.phone.title"),
      text: t("contact.info.phone.text"),
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-t from-slate-100 via-blue-50/20 to-white dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-3xl icon-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full blur-3xl icon-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-2xl icon-float stagger-3"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-cairo font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text-animated">
              {t("contact.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">{t("contact.description")}</p>
          </div>

          <Card className={`bg-card border border-border rounded-2xl p-0 shadow-lg perspective-card transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.name")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.namePlaceholder")}
                              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                              {...field}
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
                          <FormLabel>{t("contact.form.email")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.emailPlaceholder")}
                              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.company")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.companyPlaceholder")}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.service")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                              <SelectValue
                                placeholder={t(
                                  "contact.form.servicePlaceholder",
                                )}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="consulting">
                              {t("contact.form.serviceOptions.consulting")}
                            </SelectItem>
                            <SelectItem value="development">
                              {t("contact.form.serviceOptions.development")}
                            </SelectItem>
                            <SelectItem value="training">
                              {t("contact.form.serviceOptions.training")}
                            </SelectItem>
                            <SelectItem value="other">
                              {t("contact.form.serviceOptions.other")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="btn-magnetic ripple bg-gradient-tawjeeh text-white px-8 py-3 rounded-lg font-cairo font-semibold inline-flex items-center gap-3 hover:opacity-90 transition-all duration-300 min-w-[160px] justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" variant="dots" />
                          {t("contact.form.submitting")}
                        </>
                      ) : (
                        t("contact.form.submit")
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {contactInfo.map((info) => (
              <div key={info.id}>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <i className={`fas fa-${info.icon}`}></i>
                  </div>
                </div>
                <h3 className="font-cairo font-semibold text-lg mb-2">{info.title}</h3>
                <p>{info.text}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

"use client";

import { startTransition, useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { contactUsAction } from "@/actions/emails/contact-us";
import Link from "next/link";
import { trackFormSubmission } from "@/lib/gtm";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, formAction, isPending] = useActionState(contactUsAction, null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="flex min-h-screen bg-accent">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Contact Us
            </h2>
            <p className="mt-2 text-sm text-gray-100">
              We&apos;d love to hear from you. Send us a message and we will
              respond as soon as possible.
            </p>
          </div>{" "}
          <Form {...form}>
            <form
              action={(formData) => {
                // Track form submission
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                trackFormSubmission.contactUs({ name, email });

                startTransition(() => {
                  formAction(formData);
                });

                toast.info("Sending message...");
              }}
              className="mt-8 space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="text-slate-100"
                        placeholder="Your name"
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
                    <FormLabel className="text-slate-200">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="text-slate-100"
                        {...field}
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
                    <FormLabel className="text-slate-200">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="text-slate-100"
                        placeholder="Your message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
          <div>
            <h2 className="text-lg font-extrabold text-white">
              Or contact us directly at{" "}
            </h2>
            <p className="text-sm mt-3 text-gray-100">
              <Link href="tel:+447351088358">
                <span>
                  <Phone size={16} className="inline-block -mt-1 mr-1" />
                </span>
                <span className="text-white">+44 7351 088358</span>
              </Link>
            </p>
            <p className="text-sm mt-3 text-gray-100">
              <Link href="tel:+441613990207">
                <span>
                  <Phone size={16} className="inline-block -mt-1 mr-1" />
                </span>
                <span className="text-white">+44 1613 990207</span>
              </Link>
            </p>
            <p className="text-sm mt-3 text-gray-100">
              <Link href="mailto:info@privatepropertyfinance.com">
                <span>
                  <Mail size={16} className="inline-block -mt-1 mr-1" />
                </span>
                <span className="text-white">
                  info@privatepropertyfinance.com
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="https://utfs.io/f/K39jtZpI79HTCVIaRaLQuOESQAsXGq74VjUNg8maR62yziKJ"
          alt="Contact us background image"
          width={1080}
          height={1980}
          priority
        />
      </div>
    </div>
  );
}

"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/helpers";
import ContactFormEmail from "@/email/contact-form.email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (formData: FormData) => {
  "use server";

  const message = formData.get("message");
  const sender = formData.get("sender");

  if (!validateString(sender)) {
    return {
      error: "Invalid Sender E-Mail",
    };
  }

  if (!validateString(message)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "CV Contact Form | <onboarding@resend.dev>",
      to: "ficozlatanovski@gmail.com",
      subject: "Message from CV Contact Form",
      replyTo: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderMail: sender as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

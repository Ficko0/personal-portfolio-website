"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendMail } from "@/actions/sendMail";
import SubmitFormButton from "./SubmitFormButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading title="Contact Me" />
      <p className="text-gray-700">
        You can get in contact with me directly at{" "}
        <a href="mailto:ficozlatanovski@gmail.com">ficozlatanovski@gmail.com</a>{" "}
        or through this form below!
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendMail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Mail sent successfully!");
        }}
      >
        <input
          placeholder="E-Mail"
          name="sender"
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          required
          maxLength={50}
        />
        <textarea
          placeholder="Message"
          name="message"
          required
          maxLength={200}
          className="h-52 p-4 my-3 rounded-lg borderBlack"
        />
        <div className="flex justify-center items-center">
          <SubmitFormButton />
        </div>
      </form>
    </motion.section>
  );
}

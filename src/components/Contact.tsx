import MouseScroll from './MouseScroll'
import Heading from './Heading'
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";  
import { useState } from 'react';


export default function Contact() {
     const [emailLoading, setEmailLoading] = useState(false);

    const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      // Default = WhatsApp
      const waText = `Hello, I am ${values.name}. My email is ${values.email}. Message: ${values.message}`;
      const waUrl = `https://wa.me/7067238208?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
    },
  });

  // Send via Formspree instead
  const handleEmailSubmit = async () => {
    setEmailLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mgvlnokbbb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formik.values),
      });
      if (response.ok) {
        alert("Email sent successfully ✅");
        formik.resetForm();
      } else {
        alert("Failed to send email ❌");
      }
    } catch (error) {
      alert("Something went wrong ❌");
    }
    setEmailLoading(false)
  };
  return (
    <section className='bg-bg p-10 flex flex-col items-center'>
      <MouseScroll/>
      <Heading title='Contact' subtitle="Let's get in touch!"/>
       <div className="rounded-tl-[1.5rem] rounded-br-[1.5rem] h-[4.2rem] w-full max-w-[23rem] border-brand border-[.2rem] bg-bg flex items-center justify-center px-[2rem]">
      <h2 className="text-brand text-[1.5rem] md:text-[2rem] text-center">Send Me A Message</h2>
     </div>
 <form onSubmit={formik.handleSubmit} className="mx-auto space-y-6 w-[70%] mt-10">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-brand">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full border-b border-brand focus:outline-none focus:border-brand-500 p-2 text-white bg-[none]"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-brand">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full border-b border-brand focus:outline-none focus:border-brand-500 p-2 bg-[none] text-white"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1 text-brand">Message</label>
          <textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            rows={4}
            className="w-full text-white border-b border-brand focus:outline-none focus:border-brand-500 p-2"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-xs">{formik.errors.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-2">
          {/* WhatsApp Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition w-full sm:w-auto"
          >
            <FaWhatsapp className="text-xl" />
            Send via WhatsApp
          </button>

          {/* Email Option */}
          <button
            type="button"
            onClick={handleEmailSubmit}
            disabled={emailLoading}
            className="flex items-center gap-2 text-gray-300 disabled:text-gray-600 text-sm hover:underline"
          >
            <FaEnvelope />
            Prefer email? Send via Email
          </button>
        </div>
      </form>

    </section>
  )
}

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SEO from "../../components/seo/SEO";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (data) => {
    if (data.honeypot) {
      console.warn("🤖 Spam bot detected.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("https://formspree.io/f/xkgjabwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        alert("🚨 Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      <SEO
        title="Contact | Daniel Mbedobe Kunji"
        description="Get in touch with Daniel Mbedobe Kunji for freelance web development or data entry services. Let’s build something amazing together."
        keywords="contact Daniel Mbedobe Kunji, freelance web developer, frontend projects, MERN stack, contact form, Ghana developer, data entry specialist, work with Daniel"
      />

      <section className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen gap-10 pb-10 pr-2 mx-auto text-white lg:flex-row pt-28 lg:pt-0">
        {submitted && (
          <div className="fixed z-50 top-6 right-6 animate-slide-in">
            <div className="flex items-start w-[90%] max-w-md gap-4 p-4 bg-white border-l-4 border-green-600 rounded-lg shadow-xl">
              <div className="mt-1 text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-green-700">
                  Message sent successfully!
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  We&apos;ll be in touch soon.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-gray-400 transition hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Intro Section */}
        <motion.div
          className="px-5 space-y-6 lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          <h1 className="">
            <span className="">Let&apos;s Work </span>
            <span className="text-orange-500">Together.</span>
          </h1>
          <p className="mt-2 ">
            Ready to bring your ideas to life? Get in touch, and let&apos;s
            discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full px-5 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        >
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Honeypot */}
            <input
              type="text"
              {...register("honeypot")}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Full Name & Phone */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-4 md:w-1/2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Jane Doe"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-4 md:w-1/2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Phone Number{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    pattern: {
                      value:
                        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="+233 50 123 4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email & Subject */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-4 md:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full px-2 mb-4 md:w-1/2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Let’s talk about..."
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", {
                  required: "Please enter your message",
                })}
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 text-white font-semibold rounded transition-all ${
                  sending
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="4"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;

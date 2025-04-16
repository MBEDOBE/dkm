import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
    // 🐝 Check honeypot field
    if (data.honeypot) {
      console.warn("🤖 Spam bot detected. Submission blocked.");
      return;
    }

    setSending(true); // Disable button

    // ✅ Legitimate submission
    // console.log("Form Submitted:", data);
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
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        alert("🚨 Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Network error. Please try again later.");
    } finally {
      setSending(false); // Re-enable button
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen gap-10 pb-10 pr-2 mx-auto text-white lg:items-center pt-28 lg:pb-0 lg:pt-0 lg:flex-row lg:overflow-y-auto">
      {/* Success Modal */}
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

      {/* Left: intro */}
      <div className="space-y-6 lg:w-1/2">
        <h1 className="text-4xl font-bold">
          <span className="text-gray-600">Let&apos;s Work </span>
          <span className="text-orange-500">Together.</span>
        </h1>

        <p className="text-sm leading-relaxed text-gray-400">
          Ready to bring your ideas to life? Get in touch, and let&apos;s
          discuss how I can help you achieve your goals.
        </p>
      </div>

      {/* Right: form */}
      <div className="w-full space-y-6 lg:w-1/2">
        <form className="p-5 md:col-span-8" onSubmit={handleSubmit(onSubmit)}>
          {/* 🐝 Honeypot Field */}
          <div style={{ display: "none" }}>
            <label htmlFor="honeypot">Do not fill this out</label>
            <input
              id="honeypot"
              type="text"
              autoComplete="off"
              tabIndex="-1"
              placeholder="Leave this field empty"
              {...register("honeypot")}
            />
          </div>

          {/* Row 1: Full Name + Phone Number */}
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Jane Doe"
                {...register("fullName", { required: "Full name is required" })}
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
              />
              {errors.fullName && (
                <p className="text-xs italic text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="phone"
              >
                Phone Number{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (123) 456-7890"
                {...register("phone", {
                  pattern: {
                    value:
                      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
                    message: "Invalid phone number format",
                  },
                })}
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.phone && (
                <p className="text-xs italic text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email + Subject */}
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.email && (
                <p className="text-xs italic text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What’s this about?"
                {...register("subject", { required: "Subject is required" })}
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.subject && (
                <p className="text-xs italic text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message and Submit */}
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                {...register("message")}
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>

            <div className="flex justify-center w-full px-3 lg:justify-end">
              <button
                type="submit"
                disabled={sending}
                className={`px-6 py-2 font-bold text-white rounded shadow focus:outline-none focus:shadow-outline ${
                  sending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-400"
                }`}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

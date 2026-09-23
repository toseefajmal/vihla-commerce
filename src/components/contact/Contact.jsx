
import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FiMail size={22} />,
      title: "Email Us",
      text: "support@vihla.com",
      description: "Send us an email anytime.",
    },
    {
      icon: <FiPhone size={22} />,
      title: "Call Us",
      text: "+92 300 1234567",
      description: "Mon - Fri, 9AM - 6PM",
    },
    {
      icon: <FiMapPin size={22} />,
      title: "Our Location",
      text: "Pakistan",
      description: "Serving customers nationwide.",
    },
    {
      icon: <FiClock size={22} />,
      title: "Working Hours",
      text: "09:00 AM - 06:00 PM",
      description: "Monday to Friday.",
    },
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can contact our support team with your order details and we will help you track your delivery.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through email, phone or the contact form on this page.",
    },
    {
      question: "Do you offer product support?",
      answer:
        "Yes. Our support team is available to help with product and shopping-related questions.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-7 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Get In Touch
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let's Start a
              <span className="block text-blue-300">
                Conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Have a question about our products, your order or anything
              else? Our team is ready to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="border-b border-white/[0.06] bg-[#08111f]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="bg-[#08111f] px-6 py-8 transition hover:bg-[#0a1525]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-300">
                {item.text}
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-7 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact Us
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              We Would Love to
              <span className="block text-blue-300">
                Hear From You.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Whether you need help with a product, have a question about
              your order or simply want to learn more about Vihla Commerce,
              send us a message.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <FiMessageCircle />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Friendly Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Our team is always happy to help with your questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Quick Response
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We aim to respond to customer messages as quickly as
                    possible.
                  </p>
                </div>
              </div>

            </div>

            {/* Mini Card */}
            <div className="mt-10 rounded-3xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
              <p className="text-sm font-semibold text-blue-300">
                Need immediate help?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Give us a call during our working hours and our support team
                will be happy to assist you.
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm font-medium">
                <FiPhone className="text-blue-300" />
                +92 300 1234567
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-[#08111f] p-6 shadow-2xl sm:p-8 lg:p-10">

            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Send Message
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                How Can We Help?
              </h3>
            </div>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-4 text-sm text-green-300">
                <FiCheckCircle size={18} />
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#050b14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#050b14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#050b14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#050b14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Send Message
                <FiSend className="transition-transform group-hover:translate-x-1" />
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] bg-[#08111f] py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-7 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Frequently Asked
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Common Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Here are some common questions customers ask us.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.08] bg-[#050b14] p-6"
              >
                <h3 className="font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 sm:px-7 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-blue-400/10 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-[#08111f] px-6 py-14 text-center sm:px-12">

          <div className="absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Still Have Questions?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Don't hesitate to reach out. We're always happy to help.
            </p>

            <a
              href="mailto:support@vihla.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Email Us
              <FiArrowUpRight />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;


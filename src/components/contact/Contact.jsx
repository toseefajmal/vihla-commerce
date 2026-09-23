
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
  FiChevronDown,
  FiShield,
  FiHeadphones,
  FiZap,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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
      icon: <FiMail size={21} />,
      title: "Email Us",
      text: "support@vihla.com",
      description: "Send us an email anytime.",
    },
    {
      icon: <FiPhone size={21} />,
      title: "Call Us",
      text: "+92  *** ****",
      description: "Mon - Fri, 9AM - 6PM",
    },
    {
      icon: <FiMapPin size={21} />,
      title: "Our Location",
      text: "Pakistan",
      description: "Serving customers nationwide.",
    },
    {
      icon: <FiClock size={21} />,
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
    {
      question: "How quickly will I receive a response?",
      answer:
        "Our support team aims to respond to customer messages as quickly as possible during working hours.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#04070d] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-violet-600/[0.08] blur-[160px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top Line */}
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-7 lg:px-8 lg:pb-28 lg:pt-40">

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Hero Content */}
            <div>

              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-2.5 backdrop-blur-xl">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Get In Touch
                </span>

              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">

                Let's Start a

                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Conversation.
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                Have a question about our products, your order or anything
                else? Our team is ready to help you with fast and friendly
                support.
              </p>

              {/* Trust Row */}
              <div className="mt-9 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 backdrop-blur-xl">
                  <FiShield className="text-cyan-400" size={15} />
                  <span className="text-xs text-white/50">
                    Secure Support
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 backdrop-blur-xl">
                  <FiZap className="text-violet-400" size={15} />
                  <span className="text-xs text-white/50">
                    Quick Response
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 backdrop-blur-xl">
                  <FiHeadphones className="text-blue-400" size={15} />
                  <span className="text-xs text-white/50">
                    Friendly Team
                  </span>
                </div>

              </div>

            </div>

            {/* Hero Side Card */}
            <div className="relative hidden lg:block">

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[80px]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                        Customer Support
                      </p>

                      <h3 className="mt-2 text-xl font-bold">
                        We're Here to Help
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                      <FiMessageCircle size={21} />
                    </div>

                  </div>

                  <div className="my-7 h-px bg-white/[0.07]" />

                  <div className="space-y-5">

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-cyan-300">
                        <FiClock size={17} />
                      </div>

                      <div>
                        <p className="text-xs text-white/25">
                          Working Hours
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white/80">
                          Mon - Fri · 09:00 - 18:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-violet-300">
                        <FiMail size={17} />
                      </div>

                      <div>
                        <p className="text-xs text-white/25">
                          Email Support
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white/80">
                          support@vihla.com
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                    <p className="text-xs leading-6 text-white/40">
                      Need help? Send us a message and our team will get back
                      to you as soon as possible.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CONTACT INFO
      ========================================================= */}

      <section className="relative border-b border-white/[0.06] bg-[#070b13]">

        <div className="mx-auto grid max-w-7xl gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden bg-[#070b13] px-6 py-8 transition-all duration-300 hover:bg-[#0a101b]"
            >

              {/* Hover Line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.07]">
                  {item.icon}
                </div>

                <FiArrowUpRight
                  size={17}
                  className="text-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400/60"
                />

              </div>

              <h3 className="mt-6 font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-cyan-300">
                {item.text}
              </p>

              <p className="mt-2 text-xs leading-5 text-white/30">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}

      <section className="relative overflow-hidden py-24 lg:py-32">

        <div className="pointer-events-none absolute left-[-150px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="pointer-events-none absolute right-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/[0.06] blur-[150px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-7 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          {/* Left Content */}
          <div>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Contact Us
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">

              We Would Love to

              <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Hear From You.
              </span>

            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
              Whether you need help with a product, have a question about
              your order or simply want to learn more about Vihla Commerce,
              send us a message.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-5">

              <div className="group flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-300 transition group-hover:border-cyan-400/25">
                  <FiMessageCircle size={19} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Friendly Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/30">
                    Our team is always happy to help with your questions.
                  </p>
                </div>

              </div>

              <div className="group flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-400/[0.05] text-violet-300 transition group-hover:border-violet-400/25">
                  <FiCheckCircle size={19} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Quick Response
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/30">
                    We aim to respond to customer messages as quickly as
                    possible.
                  </p>
                </div>

              </div>

            </div>

            {/* Phone Card */}
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl">

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.07] blur-[70px]" />

              <div className="relative">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Need Immediate Help?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Give us a call during our working hours and our support
                  team will be happy to assist you.
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.08] text-cyan-300">
                    <FiPhone size={16} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                      Call Support
                    </p>

                    <p className="mt-1 text-sm font-bold text-white/80">
                      +92 *** ****
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-8 lg:p-10">

            {/* Form Top Glow */}
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="relative">

              <div className="mb-8">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                      Send Message
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      How Can We Help?
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-cyan-300 sm:flex">
                    <FiSend size={18} />
                  </div>

                </div>

              </div>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-4 text-sm text-emerald-300">
                  <FiCheckCircle size={18} />
                  <span>
                    Your message has been sent successfully!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-2xl border border-white/[0.08] bg-[#050810] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02] focus:ring-4 focus:ring-cyan-400/[0.04]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-2xl border border-white/[0.08] bg-[#050810] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02] focus:ring-4 focus:ring-cyan-400/[0.04]"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                    className="w-full rounded-2xl border border-white/[0.08] bg-[#050810] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02] focus:ring-4 focus:ring-cyan-400/[0.04]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="6"
                    required
                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-[#050810] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02] focus:ring-4 focus:ring-cyan-400/[0.04]"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.12)]"
                >

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">
                    Send Message
                  </span>

                  <FiSend
                    size={16}
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="relative border-t border-white/[0.06] bg-[#070b13] py-24 lg:py-28">

        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-violet-500/[0.05] blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-7 lg:px-8">

          <div className="text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
              <FiMessageCircle
                size={13}
                className="text-cyan-400"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                Frequently Asked
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Common Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/30">
              Find quick answers to some of the most common questions from
              our customers.
            </p>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-400/20 bg-cyan-400/[0.035]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    <span className="text-sm font-bold text-white/85">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 border-cyan-400/20 text-cyan-300"
                          : "text-white/30"
                      }`}
                    >
                      <FiChevronDown size={15} />
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-7 text-white/35 sm:px-6">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-5 py-24 sm:px-7 lg:px-8">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.10] via-[#0b101b] to-violet-500/[0.08] px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:px-12">

          {/* Glow */}
          <div className="absolute left-1/2 top-[-100px] h-72 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
              <FiMessageCircle size={22} />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight sm:text-4xl">
              Still Have Questions?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/35">
              Don't hesitate to reach out. Our team is always happy to help
              you with your shopping experience.
            </p>

            <a
              href="mailto:support@vihla.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.12)]"
            >
              Email Us

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;



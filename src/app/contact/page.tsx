"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheck,
} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "somethphay@example.com",
      href: "mailto:somethphay@example.com",
      description: "Feel free to send me an email anytime",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+855 12 345 678",
      href: "tel:+85512345678",
      description: "Available during business hours",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: "Location",
      value: "Phnom Penh, Cambodia",
      href: "#",
      description: "Available for local meetings",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="w-6 h-6" />,
      href: "https://github.com/PhaySometh",
      color: "hover:bg-gray-900",
      description: "Check out my repositories and contributions",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/somethphay",
      color: "hover:bg-blue-600",
      description: "Connect with me professionally",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="w-6 h-6" />,
      href: "https://facebook.com/somethphay",
      color: "hover:bg-blue-600",
      description: "Follow my personal updates",
    },
  ];

  const quickActions = [
    {
      title: "Schedule a Meeting",
      description:
        "Book a time slot for a detailed discussion about your project",
      action: "Schedule Now",
      href: "#",
      icon: "📅",
    },
    {
      title: "Download Resume",
      description: "Get a detailed overview of my experience and skills",
      action: "Download PDF",
      href: "#",
      icon: "📄",
    },
    {
      title: "View Projects",
      description: "Explore my portfolio and see what I've been working on",
      action: "View Portfolio",
      href: "/project",
      icon: "💼",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-gray-50 to-white py-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I&apos;m always excited to discuss new opportunities, collaborate
              on interesting projects, or simply chat about technology and
              innovation. Let&apos;s start a conversation!
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Send me a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitted
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-black hover:bg-gray-800 hover:scale-105"
                    }`}
                    whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FiCheck className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Contact Information
                </h2>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 bg-black text-white p-3 rounded-xl">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {info.label}
                        </h3>
                        <Link
                          href={info.href}
                          className="text-gray-600 font-medium hover:text-black transition-colors"
                        >
                          {info.value}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Connect With Me
                </h3>
                <div className="flex flex-col space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 ${social.color} hover:text-white group`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-gray-600 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors">
                          {social.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={action.title}
                      className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{action.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {action.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {action.description}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={action.href}
                          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                        >
                          {action.action}
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start a project?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you have a clear vision or just an idea, I&apos;m here to
            help bring it to life. Let&apos;s discuss how we can work together
            to create something amazing.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/portfolio"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out inline-block"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 ease-out inline-block"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
  ];

  const roles = [
    "A\nSoftware\nEngineer",
    "A\nFullstack\nDeveloper",
    "A\nWebsite\nDeveloper",
    "A\nCo-founder\nof SMEAN",
  ];

  // Image switching effect - synchronized with typing animation
  useEffect(() => {
    // Calculate timing: typing (80ms/char) + hold (5000ms) + deleting (40ms/char) + pause (300ms)
    // Average 18 chars per role: (18*80) + 5000 + (18*40) + 300 = 7460ms per role
    const imageInterval = setInterval(() => {
      setIsImageVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsImageVisible(true);
        // Image changes synchronized with role changes
      }, 300);
    }, 8000); // 7.46 seconds - matches one role cycle

    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (typedText.length < currentRole.length) {
        // Still typing
        const timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, hold for 5 seconds then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 5000); // Hold for 5 seconds
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        // Still deleting
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next role
        const timeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => {
            const nextIndex = (prev + 1) % roles.length;
            console.log(
              `Moving from role ${prev} to role ${nextIndex}: "${roles[nextIndex]}"`
            ); // Debug log
            return nextIndex;
          });
          setIsTyping(true);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping, currentRoleIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.section
      className="bg-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container - Content-based height */}
        <div
          className="relative py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-end"
          style={{ minHeight: "50vh" }}
        >
          {/* Layer #3: Background Text - "Hey," and "There" - Top positioned */}
          <div className="absolute inset-x-0 top-4 sm:top-6 md:top-8 lg:top-12 flex justify-between pointer-events-none z-10">
            <motion.h1
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-black text-black/5 select-none leading-none"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              Hey,
            </motion.h1>
            <motion.h1
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-black text-black/5 select-none leading-none"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
            >
              There
            </motion.h1>
          </div>

          {/* Layer #2: Main Image Container - Bottom positioned */}
          <motion.div
            className="flex items-end justify-center z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
          >
            <div className="relative w-[300px] h-[375px] sm:w-[360px] sm:h-[450px] md:w-[420px] md:h-[525px] lg:w-[480px] lg:h-[600px] xl:w-[540px] xl:h-[675px]">
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isImageVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt="Someth Phay"
                  fill
                  className="object-cover object-bottom rounded-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Layer #1: Bottom Left Text - "I'M SOMETH PHAY" - Bottom positioned */}
          <motion.div
            className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-0 z-30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 1.1 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-black leading-none mb-0">
              I&apos;M <br />
              SOMETH <br />
              PHAY
            </h2>
          </motion.div>

          {/* Layer #1: Bottom Right Text - Typing Animation - Bottom positioned */}
          <motion.div
            className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-0 z-30"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            <div className="text-right">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight whitespace-pre-line">
                {typedText}
                <span
                  className={`${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                >
                  |
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

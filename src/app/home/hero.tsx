"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  }, [typedText, isTyping, currentRoleIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen bg-white overflow-hidden relative flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container - Everything positioned relative to this */}
        <div className="relative flex items-center justify-center min-h-screen">
          {/* Layer #3: Background Text - "Hey," and "There" - Aligned with bottom text spacing */}
          <div className="absolute inset-0 flex items-start justify-between pt-8 sm:pt-12 md:pt-16 lg:pt-20 pointer-events-none z-10">
            <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-black/5 select-none leading-none">
              Hey,
            </h1>
            <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-black/5 select-none leading-none">
              There
            </h1>
          </div>

          {/* Layer #2: Main Image Container - Bottom-aligned with text */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-20">
            <div className="relative w-[360px] h-[450px] sm:w-[420px] sm:h-[525px] md:w-[480px] md:h-[600px] lg:w-[540px] lg:h-[675px] xl:w-[600px] xl:h-[750px]">
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isImageVisible
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-full opacity-0"
                }`}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt="Someth Phay"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Layer #1: Bottom Left Text - "I'M SOMETH PHAY" - Top layer */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-0 z-30">
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-black text-black leading-tight">
              I'M <br />
              SOMETH <br />
              PHAY
            </h2>
          </div>

          {/* Layer #1: Bottom Right Text - Typing Animation - Top layer */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-0 z-30">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight whitespace-pre-line">
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
          </div>
        </div>
      </div>
    </section>
  );
}

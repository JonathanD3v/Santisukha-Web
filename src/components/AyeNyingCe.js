import React from "react";
import { motion } from "framer-motion";

import stage1 from "../assets/images/aye_nying_ce/14.jpg";
import stage2 from "../assets/images/aye_nying_ce/4.jpg";
import stage3 from "../assets/images/aye_nying_ce/3.jpg";
import stage4 from "../assets/images/aye_nying_ce/15.jpg";
import stage5 from "../assets/images/aye_nying_ce/9.jpg";
import stage6 from "../assets/images/aye_nying_ce/1.jpg";
import stage7 from "../assets/images/aye_nying_ce/5.jpg";


const photos = [
  {
    image: stage1,
    number: "01",
    // title: "The Beginning",
    // description: "The beginning of a sacred journey.",
    className: "lg:col-span-2",
  },
  {
    image: stage2,
    number: "02",
    // title: "Foundation",
    // description: "Building the foundation with devotion.",
    className: "",
  },
  {
    image: stage3,
    number: "03",
    // title: "Progress",
    // description: "A vision slowly becoming reality.",
    className: "",
  },
  {
    image: stage4,
    number: "04",
      // title: "The Structure",
      // description: "Taking shape, step by step.",
    className: "lg:col-span-2",
  },
  {
    image: stage5,
    number: "05",
    // title: "Dedication",
    // description: "Built through faith, effort and unity.",
    className: "",
  },
    {
      image: stage6,
      number: "06",
      // title: "The Journey Continues",
      // description: "A journey dedicated to peace and Dhamma.",
      className: "",
    },
    {
      image: stage7,
      number: "07",
      // title: "The Journey Continues",
      // description: "A journey dedicated to peace and Dhamma.",
      className: "",
    },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AyeNyingCe() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0a08] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[140px]" />

        <div className="absolute bottom-[10%] left-[-200px] h-[400px] w-[400px] rounded-full bg-amber-700/[0.04] blur-[120px]" />

        <div className="absolute right-[-200px] top-[40%] h-[400px] w-[400px] rounded-full bg-yellow-600/[0.035] blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative flex min-h-[75vh] flex-col items-center justify-center text-center">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-yellow-500/50" />

            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-yellow-500/80 sm:text-xs">
              A Sacred Journey
            </span>

            <span className="h-px w-10 bg-yellow-500/50" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.04em] text-[#f5f1e8] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Aye Nying Ce
            <br />

            <span className="font-serif italic text-yellow-500/90">
              Pagoda
            </span>
          </motion.h1>

          {/* Secondary Title */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
            className="mt-8 max-w-2xl text-sm uppercase tracking-[0.25em] text-white/45 sm:text-base"
          >
            & The Five Buddhas Magga Boat
          </motion.p>

          {/* Burmese */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.55,
            }}
            className="mt-5 text-base text-yellow-100/70 sm:text-lg"
          >
            “အေးငြိမ်းစေ” ဓမ္မကျောင်းတော် နှင့် မဂ္ဂင်ဖောင်တော်
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="mt-10 h-px bg-yellow-500/50"
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8"
          >
            This sacred construction project, inspired by the Dhamma, is
            dedicated to building the Aye Nying Ce Pagoda and the Five Buddhas
            Magga Boat — a symbol of spiritual guidance, merit, peace and
            unity.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
            className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
              Explore
            </span>

            <motion.div
              animate={{
                height: [20, 35, 20],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px bg-yellow-500/70"
            />
          </motion.div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="py-24 sm:py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end"
          >
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-yellow-500/70">
                The Journey
              </p>

              <h2 className="text-4xl font-light tracking-tight text-[#f5f1e8] sm:text-5xl">
                Built with
                <br />
                <span className="font-serif italic text-yellow-500/90">
                  faith.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8 lg:ml-auto">
              Every stage represents more than construction. It represents
              devotion, generosity and the collective effort of people who
              believe in creating a place where peace and mindfulness can
              flourish.
            </p>
          </motion.div>
        </section>

        {/* =====================================================
            GALLERY
        ====================================================== */}
        <section>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <motion.article
                key={photo.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.8,
                  delay: (index % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden ${photo.className}`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 || index === 3
                      ? "aspect-[16/10]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Gold Overlay */}
                  <div className="absolute inset-0 bg-yellow-500/[0.03] mix-blend-screen" />

                  {/* Stage Number */}
                  <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                    <span className="text-xs font-light tracking-[0.3em] text-white/60">
                      {photo.number}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <div className="translate-y-2 transition-transform duration-700 group-hover:translate-y-0">
                      <h3 className="text-xl font-light tracking-tight text-white sm:text-2xl">
                        {photo.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-xs leading-5 text-white/55 opacity-0 transition-opacity duration-700 group-hover:opacity-100 sm:text-sm">
                        {photo.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner */}
                  <div className="absolute right-5 top-5 h-7 w-7 border-r border-t border-white/20 transition-all duration-700 group-hover:h-10 group-hover:w-10 sm:right-7 sm:top-7" />

                  <div className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-white/20 transition-all duration-700 group-hover:h-10 group-hover:w-10 sm:bottom-7 sm:left-7" />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* =====================================================
            CLOSING
        ====================================================== */}
        <section className="relative py-32 sm:py-44">
          {/* Decorative Line */}
          <div className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-yellow-500/40 to-transparent" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Symbol */}
            <div className="mb-8 text-xl text-yellow-500/70">✦</div>

            <p className="mb-7 text-[10px] uppercase tracking-[0.45em] text-yellow-500/60">
              A Blessing
            </p>

            <blockquote className="font-serif text-2xl font-light leading-relaxed text-[#f5f1e8] sm:text-3xl md:text-4xl">
              “May this noble endeavor bring blessings, peace, and Dhamma
              light to all beings.”
            </blockquote>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/35">
              May all supporters of this sacred journey attain health,
              happiness, peace of mind, and progress along the Magga path.
            </p>

            {/* Bottom Divider */}
            <div className="mx-auto mt-12 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-white/10" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/25">
                Aye Nying Ce
              </span>
              <span className="h-px w-12 bg-white/10" />
            </div>
          </motion.div>
        </section>
      </div>

      {/* Bottom Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-600/[0.025] blur-[120px]" />
    </main>
  );
}
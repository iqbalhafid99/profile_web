"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { delay } from "motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website using Next JS and Tailwind",
    image: "/assets/images/porto1.png",
    tech: ["Next JS", "Tailwind", "Motion"],
    demo: "#",
    github: "#",
  },
  {
    title: "POS App",
    desc: "Point of sale web application",
    image: "/assets/images/porto1.png",
    tech: ["React", "Node", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "POS App",
    desc: "Point of sale web application",
    image: "/assets/images/porto1.png",
    tech: ["React", "Node", "MongoDB"],
    demo: "#",
    github: "#",
  },
];

const Portfolio = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-10"
    >
      {projects.map((p, i) => (
        <motion.div
          key={i}
          variants={item}
          whileHover={{ y: -10 }}
          className="group rounded-3xl overflow-hidden shadow-xl bg-base-300 border"
        >
          <div className="relative overflow-hidden ">
            <Image
              src={p.image}
              alt={p.title}
              width={600}
              height={400}
              className="group-hover:scale-110 duration-500"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center justify-center gap-4">
              <a
                href={p.demo}
                className="px-5 py-2 bg-[#FD5956] rounded-full text-white"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                className="px-5 py-2 border border-white text-white rounded-full"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="p-5">
            <h2 className="font-bold text-xl">{p.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-[#FD5956]/10 text-[#FD5956] font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Portfolio;

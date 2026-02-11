"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import FadeUp from "../components/motion/FadeUp";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website using Next JS and Tailwind",
    image: "/assets/images/porto1.png",
    tech: ["Next JS", "Tailwind", "Motion"],
    demo: "https://profile-web-xi-seven.vercel.app",
    github: "https://github.com/iqbalhafid99/profile_web",
  },
  {
    title: "Mama Recipe Website",
    desc: "Recipe website using React JS and Express JS",
    image: "/assets/images/porto2.png",
    tech: ["React JS", "Express JS", "Tailwind"],
    demo: "https://mama-recipe-one.vercel.app/",
    github: "https://github.com/iqbalhafid99/ReactJs-MamaRecipe",
  },
  {
    title: "Ankasa Ticketing Website",
    desc: "Flight ticketing website using React JS and Express JS",
    image: "/assets/images/porto3.png",
    tech: ["React", "MongoDB", "Express JS"],
    demo: "https://ankasa-ticketing.vercel.app/",
    github: "https://github.com/iqbalhafid99/ankasa_ticketing",
  },
  {
    title: "Peworld Job Portal",
    desc: "Job portal website using React JS and Express JS",
    image: "/assets/images/porto4.jpg",
    tech: ["Next JS", "Express", "PostgreSQL"],
    demo: "https://next-js-peworld.vercel.app/",
    github: "https://github.com/iqbalhafid99/NextJs-Peworld",
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
    <div>
      <FadeUp>
        <div className="text-center">
          <h1 className="mt-5 md:text-5xl text-3xl font-bold">
            Portofolio<span className="font-mono text-[#FD5956]">.</span>
          </h1>
        </div>
      </FadeUp>
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
            className="group rounded-3xl overflow-hidden shadow-xl bg-[#FD5956] border"
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
                <Link
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#FD5956] rounded-full text-white hover:scale-110 hover:bg-[#e74542]  duration-300 font-medium"
                >
                  Live Demo
                </Link>
                <Link
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-white text-white rounded-full hover:scale-110 hover:bg-white hover:text-black duration-300 font-medium"
                >
                  GitHub
                </Link>
              </div>
            </div>

            <div className="p-5">
              <h2 className="font-bold text-neutral text-xl">{p.title}</h2>
              <p className="text-neutral-content text-sm mt-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-neutral-content text-neutral font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;

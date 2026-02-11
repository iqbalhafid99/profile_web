"use client";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "./components/motion/FadeUp";
import TypeWriter from "./components/motion/Typewriter";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative">
        <Image
          src="/assets/images/Miqhasa.png"
          alt="Logo"
          width={1920}
          height={424}
          priority={true}
          className="w-auto h-auto -z-10 absolute md:top-75 top-50"
        />
      </div>
      <div className="mx-8 md:mx-20 mt-2 flex lg:flex-row-reverse lg:mt-0 lg:gap-52 md:mt-32 flex-col items-center md:justify-center">
        <div>
          <FadeUp>
            <Image
              src="/assets/images/Profile.png"
              alt="Logo"
              width={576}
              height={828}
              priority={true}
              className="w-64 md:w-auto md:h-auto"
            />
          </FadeUp>
        </div>
        <FadeUp delay={0.6}>
          <div className="text-center lg:text-left -mt-8 md:mt-0">
            <FadeUp delay={0.7}>
              <h3 className="text-black font-semibold text-2xl">Hello! I am</h3>
            </FadeUp>
            <FadeUp delay={0.8}>
              <h2 className="text-[#FD5956] font-semibold text-3xl my-8">
                <TypeWriter text="Moh Iqbal Hafid" />
              </h2>
            </FadeUp>
            <FadeUp delay={0.9}>
              <div className="relative -z-10">
                <h1 className="text-[#8f8f8f] font-extrabold text-6xl md:text-8xl mt-4">
                  Web <br />
                  Developer
                </h1>
                <h1 className="text-[#FD5956] font-extrabold text-6xl absolute -top-4.75 left-0.5 md:text-8xl mt-4">
                  Web <br />
                  Developer
                </h1>
              </div>
              <p className="my-8 text-[#8f8f8f]">
                I am a web developer <br /> with a passion for creating
                beautiful and functional websites. <br /> I have experience with
                a variety of web technologies, <br /> including React, Express
                Js, Next JS, and React Native.
              </p>
            </FadeUp>
            <FadeUp delay={1}>
              <div className="flex gap-9 items-center justify-center mt-4 lg:justify-start">
                <Link href={"https://www.instagram.com/iqbalhafid_"}>
                  <Image
                    src="/assets/images/Instagram.png"
                    alt="Logo"
                    width={27}
                    height={27}
                    priority={true}
                    className="w-auto h-auto hover:scale-110 duration-300"
                  />
                </Link>
                <Link href={"https://github.com/iqbalhafid99"}>
                  <Image
                    src="/assets/images/github.png"
                    alt="Logo"
                    width={27}
                    height={27}
                    priority={true}
                    className="w-auto h-auto hover:scale-110 duration-300"
                  />
                </Link>
                <Link href={"https://www.linkedin.com/in/mohiqbalhafid"}>
                  <Image
                    src="/assets/images/Linkedin.png"
                    alt="Logo"
                    width={27}
                    height={27}
                    priority={true}
                    className="w-auto h-auto hover:scale-110 duration-300"
                  />
                </Link>
              </div>
            </FadeUp>
            <div className="mt-10">
              <FadeUp delay={1.1}>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/assets/resume.pdf";
                    link.download = "resume.pdf";
                    link.click();
                  }}
                  className="mb-20 py-2 px-6 bg-[#FD5956] text-white font-bold rounded-xl hover:scale-105 hover:bg-red-500 hover:shadow-lg hover:shadow-[#FD5956] duration-300"
                >
                  My Resume
                </button>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

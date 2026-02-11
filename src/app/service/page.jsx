"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import FadeUp from "../components/motion/FadeUp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Service = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src="/assets/images/service.png"
          alt="Logo"
          width={1920}
          height={424}
          priority={true}
          className="w-auto h-auto -z-10 absolute bottom-40"
        />
      </div>
      <div className="mx-12">
        <FadeUp delay={0.5}>
          <div className="text-center">
            <h1 className="mt-5 md:text-5xl text-3xl font-bold">
              Services<span className="font-mono text-[#FD5956]">.</span>
            </h1>
            <p className="mt-6 text-sm">
              Professional services to help your business <br /> appear more
              modern, credible and competitive in the digital world.
            </p>
          </div>
        </FadeUp>
        <div className="hidden md:flex flex-wrap items-center gap-10 justify-center md:mt-20">
          <FadeUp delay={0.6}>
            <div className="hover-3d">
              <div className="md:w-87.5 md:h-112.5 rounded-3xl shadow-xl border relative">
                <div className="flex gap-3 absolute top-6 right-6">
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                </div>
                <div>
                  <Image
                    src="/assets/images/uiux.png"
                    alt="Logo"
                    width={124}
                    height={124}
                    priority={true}
                    className=" pt-12 pl-8"
                  />
                </div>
                <div className="px-8 mt-6">
                  <h1 className="text-3xl font-bold">Web Development</h1>
                  <p className="text-xl mt-3">
                    Develop fast, responsive and SEO friendly websites using the
                    latest technology.
                  </p>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </FadeUp>
          <FadeUp delay={0.7}>
            <div className="hover-3d">
              <div className="md:w-87.5 md:h-112.5 rounded-3xl shadow-xl border relative ">
                <div className="flex gap-3 absolute top-6 right-6">
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                </div>
                <div>
                  <Image
                    src="/assets/images/desain.png"
                    alt="Logo"
                    width={124}
                    height={124}
                    priority={true}
                    className=" pt-12 pl-8"
                  />
                </div>
                <FadeUp delay={0.8}></FadeUp>
                <div className="px-8 mt-6">
                  <h1 className="text-3xl font-bold">
                    UI/UX <br /> Design
                  </h1>
                  <p className="text-xl mt-3">
                    Design a modern website appearance so that visitors are
                    comfortable and at home.
                  </p>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </FadeUp>
          <FadeUp delay={0.9}>
            <div className="hover-3d">
              <div className="md:w-87.5 md:h-112.5 rounded-3xl shadow-xl border relative ">
                <div className="flex gap-3 absolute top-6 right-6">
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-6.25 h-6.25 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                </div>
                <div>
                  <Image
                    src="/assets/images/develop.png"
                    alt="Logo"
                    width={124}
                    height={124}
                    priority={true}
                    className=" pt-12 pl-8"
                  />
                </div>
                <div className="px-8 mt-6">
                  <h1 className="text-3xl font-bold">Maintenance & Support</h1>
                  <p className="text-xl mt-3">
                    Website maintenance, feature updates, performance
                    optimization and regular bug fixes.
                  </p>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </FadeUp>
        </div>
        <div className="md:hidden">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper flex flex-wrap items-center gap-10 justify-center mt-10"
          >
            <SwiperSlide className="rounded-3xl shadow-sm border">
              <FadeUp delay={0.4}>
                <div className="w-62.5 h-87.5">
                  <div className="flex gap-3 absolute top-4 right-4">
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  </div>
                  <div>
                    <Image
                      src="/assets/images/uiux.png"
                      alt="Logo"
                      width={65}
                      height={65}
                      priority={true}
                      className="w-auto h-auto pt-12 pl-8"
                    />
                  </div>
                  <div className="px-8 mt-3">
                    <h1 className="text-xl font-bold">Web Development</h1>
                    <p className="text-sm mt-2">
                      Develop fast, responsive and SEO friendly websites using
                      the latest technology.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl shadow-sm border">
              <FadeUp delay={0.4}>
                <div className="w-62.5 h-87.5">
                  <div className="flex gap-3 absolute top-4 right-4">
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  </div>
                  <div>
                    <Image
                      src="/assets/images/desain.png"
                      alt="Logo"
                      width={65}
                      height={65}
                      priority={true}
                      className="w-auto h-auto pt-12 pl-8"
                    />
                  </div>
                  <div className="px-8 mt-3">
                    <h1 className="text-xl font-bold">UI/UX Design</h1>
                    <p className="text-sm mt-2">
                      Design a modern website appearance so that visitors are
                      comfortable and at home.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl shadow-sm border">
              <FadeUp delay={0.4}>
                <div className="w-62.5 h-87.5">
                  <div className="flex gap-3 absolute top-4 right-4">
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-4.5 h-4.5 bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  </div>
                  <div>
                    <Image
                      src="/assets/images/develop.png"
                      alt="Logo"
                      width={65}
                      height={65}
                      priority={true}
                      className="w-auto h-auto pt-12 pl-8"
                    />
                  </div>
                  <div className="px-8 mt-3">
                    <h1 className="text-xl font-bold">Maintenance & Support</h1>
                    <p className="text-sm mt-2">
                      Website maintenance, feature updates, performance
                      optimization and regular bug fixes.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;

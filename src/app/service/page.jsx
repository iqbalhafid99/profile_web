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
              Layanan profesional untuk membantu bisnis anda <br /> untuk tampil
              lebih modern, kredibel, dan kompetitif di dunia digital.
            </p>
          </div>
        </FadeUp>
        <div className="hidden md:flex flex-wrap items-center gap-10 justify-center md:mt-20">
          <FadeUp delay={0.6}>
            <div className="hover-3d">
              <div className="md:w-[350px] md:h-[450px] rounded-3xl shadow-xl border relative">
                <div className="flex gap-3 absolute top-6 right-6">
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
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
                    Mengembangkan website cepat, responsif, dan SEO friendly
                    menggunakan teknologi terbaru.
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
              <div className="md:w-[350px] md:h-[450px] rounded-3xl shadow-xl border relative ">
                <div className="flex gap-3 absolute top-6 right-6">
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
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
                    Mendesain tampilan website yang modern agar pengunjung
                    nyaman dan betah.
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
              <div className="md:w-[350px] md:h-[450px] rounded-3xl shadow-xl border relative ">
                <div className="flex gap-3 absolute top-6 right-6">
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                  <div className="w-[25px] h-[25px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
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
                    Perawatan website, update fitur, optimasi performa, dan
                    perbaikan bug secara berkala.
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
                <div className="w-[250px] h-[350px]">
                  <div className="flex gap-3 absolute top-4 right-4">
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
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
                    <h1 className="text-xl font-bold">UI/UX Design</h1>
                    <p className="text-sm mt-2">
                      Why moneys in that office, right If she start giving me
                      some bullshit about it aint there someplace or anywhere.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl shadow-sm border">
              <FadeUp delay={0.4}>
                <div className="w-[250px] h-[350px]">
                  <div className="flex gap-3 absolute top-4 right-4">
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
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
                    <h1 className="text-xl font-bold">UI/UX Design</h1>
                    <p className="text-sm mt-2">
                      Why moneys in that office, right If she start giving me
                      some bullshit about it aint there someplace or anywhere.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl shadow-sm border">
              <FadeUp delay={0.4}>
                <div className="w-[250px] h-[350px]">
                  <div className="flex gap-3 absolute top-4 right-4">
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
                    <div className="w-[18px] h-[18px] bg-[#FD5956] rounded-full shadow-md shadow-[#FD5956]"></div>
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
                    <h1 className="text-xl font-bold">UI/UX Design</h1>
                    <p className="text-sm mt-2">
                      Why moneys in that office, right If she start giving me
                      some bullshit about it aint there someplace or anywhere.
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

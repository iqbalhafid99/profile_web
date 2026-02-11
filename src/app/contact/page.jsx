"use client";

import { motion } from "motion/react";
import React from "react";
import { FaRegMap } from "react-icons/fa";
import { BsEnvelopeAt, BsTelephone, BsInstagram } from "react-icons/bs";
import FadeUp from "../components/motion/FadeUp";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ubf0st9",
        "template_5sr69uq",
        formRef.current,
        "4V2SpACmjzCJAXval",
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message! Please try again later.",
        });
        setLoading(false);
      });
  };
  useEffect(() => {
    if (success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully ✅",
        icon: "success",
        confirmButtonColor: "#FD5956",
      });
    }
  }, [success]);

  return (
    <div>
      <div className="lg:mx-20">
        <FadeUp>
          <div className="text-center">
            <h1 className="mt-5 md:text-5xl text-3xl font-bold">
              Contact<span className="font-mono text-[#FD5956]">.</span>
            </h1>
          </div>
        </FadeUp>
        <div className="mx-10 mt-10 md:flex justify-center md:gap-20 lg:gap-60">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-2 md:gap-14"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FD5956] border border-black shadow-lg shadow-[#FD5956]">
                <FaRegMap size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Address</h1>
                <p className="mt-2 text-base italic">Batang, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FD5956] border border-black shadow-lg shadow-[#FD5956]">
                <BsEnvelopeAt size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Email</h1>
                <p className="mt-2 text-base italic">mohiqbalhafid@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FD5956] border border-black shadow-lg shadow-[#FD5956]">
                <BsTelephone size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Telephone</h1>
                <p className="mt-2 text-base italic">+62 899-251-3070</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FD5956] border border-black shadow-lg shadow-[#FD5956]">
                <BsInstagram size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Instagram</h1>
                <p className="mt-2 text-base italic">@iqbalhafid_</p>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-24 md:mt-0"
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="flex md:gap-4 lg:gap-20 flex-col md:flex-row">
                <div>
                  <label className="font-bold text-slate-400 ml-4">
                    First Name <span className="text-[#FD5956]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jhon"
                    className="py-2 border-[#FD5956] border-2 rounded-full w-full h-14 font-semibold text-slate-700 italic px-4 mt-4 bg-slate-50"
                  />
                </div>
                <div className="mt-4 md:mt-0">
                  <label className="font-bold text-slate-400 ml-4">
                    Last Name <span className="text-[#FD5956]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    className="py-2 border-[#FD5956] border-2 rounded-full w-full h-14 font-semibold text-slate-700 italic px-4 mt-4 bg-slate-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold text-slate-400 ml-4">
                  Your Email <span className="text-[#FD5956]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  className="py-2 border-[#FD5956] border-2 rounded-full w-full h-14 font-semibold text-slate-700 italic px-4 mt-4 bg-slate-50"
                />
              </div>
              <div className="flex items-center justify-center mt-8">
                <div>
                  <label className="font-bold text-slate-400 ml-4">
                    Message <span className="text-[#FD5956]">*</span>
                  </label>
                  <textarea
                    name="message"
                    cols="70"
                    rows="10"
                    className="py-2 font-semibold text-slate-700 italic border-[#FD5956] border-2 rounded-3xl w-full px-4 bg-slate-50 mt-4"
                  ></textarea>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 my-4">
                  * Accept the terms and conditions
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="mb-20 py-3 px-6 bg-[#FD5956] text-sm text-white font-bold rounded-full hover:scale-105 hover:bg-red-500 hover:shadow-lg hover:shadow-[#FD5956] duration-300"
                >
                  {loading ? "Sending..." : "SEND MESSAGE"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

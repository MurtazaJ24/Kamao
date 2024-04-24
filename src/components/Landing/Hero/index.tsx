import Link from "next/link";
import React from "react";
import Graphic from "./Graphic";
import { SignUpButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-2 pb-12 text-blue-700 sm:px-6 lg:px-8">
      <Graphic className="absolute inset-y-0 right-0 -z-10 h-full w-1/2 max-w-2xl" />
      <h1 className="mb-12 mt-8 max-w-2xl text-7xl font-bold ">
        Connecting Micro-Businesses with Investors
      </h1>
      <Link
        href="/search"
        className="mb-2.5 block w-max cursor-pointer rounded-full border border-blue-700 px-6 py-3 font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
        aria-disabled="false"
      >
        Discover Investment Opportunities
      </Link>
      <div className="flex flex-row items-start gap-5">
        <div className="max-w-md rounded-3xl border border-blue-700 bg-gray-100 transition-transform hover:-translate-y-4">
          <div className="p-6">
            <h2 className="mb-4 text-xl font-bold">
              Empowering Startups for Success
            </h2>
            <p>
              Kamao is dedicated to empowering startups and micro-businesses to
              achieve success in the competitive market. Our platform provides a
              space for businesses to showcase their potential and attract
              interested investors.
            </p>
          </div>
          <Link
            href="/about"
            className="block w-full cursor-pointer rounded-b-3xl  px-6 py-5 font-semibold  transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
            aria-disabled="false"
          >
            Learn More
          </Link>
        </div>
        <div className="max-w-md rounded-3xl border border-blue-700 bg-gray-100 transition-transform hover:-translate-y-4">
          <div className="p-6">
            <h2 className="mb-4 text-xl font-bold">
              Maximize Your Business Potential
            </h2>
            <p className="">
              Join Kamao today to maximize your business potential and gain
              access to a network of potential investors. We are committed to
              helping your business thrive and succeed.
            </p>
          </div>
          <SignUpButton>
            <button className="block w-full cursor-pointer rounded-b-3xl text-left  px-6 py-5 font-semibold  transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white">
              Register
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

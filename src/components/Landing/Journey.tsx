import Link from "next/link";
import React from "react";

export default function Journey() {
  return (
    <div className="bg-indigo-300 pb-44">
      <div className="relative mx-auto w-full max-w-7xl px-2 py-12 pb-12 text-blue-700 sm:px-6 lg:px-8">
        <h2 className="mb-12 mt-8 max-w-2xl text-7xl font-bold">Our Journey</h2>
        <h4 className="mb-4 max-w-2xl text-2xl font-bold">
          Discover how Kamao has become the go-to platform for micro-businesses
          and startups seeking investment opportunities.
        </h4>
        <p className="mb-4 max-w-2xl text-lg">
          At Kamao, we are passionate about supporting the growth of
          micro-businesses and startups. Our platform is designed to facilitate
          connections between businesses and investors, driving growth and
          success in the competitive business landscape.
        </p>
        <Link
          href="/about"
          className="mt-12 mb-2.5 block w-max cursor-pointer rounded-full border border-blue-700 px-20 py-3 font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
          aria-disabled="false"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className=" bg-blue-700 pt-36">
      <div className="relative mx-auto w-full max-w-7xl px-2 py-12 pb-12 text-white sm:px-6 lg:px-8">
        <img src="/services.jpg" alt="" className="absolute right-0 max-w-2xl rounded-3xl -mt-96" />
        <h2 className="mb-12 mt-8 max-w-2xl text-7xl font-bold">
          Our Services
        </h2>
        <p className="mb-4 max-w-2xl text-lg">
          Explore the range of services offered by Kamao to help your business
          thrive and attract potential investors.
        </p>
        <Link
          href="/about"
          className="mb-2.5 mt-12 block w-max cursor-pointer rounded-full border border-white px-20 py-3 font-semibold transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-blue-700"
          aria-disabled="false"
        >
          Sign Up Now
        </Link>

        <div className="mt-8 flex flex-row flex-wrap items-start justify-center gap-5">
          <div className="group ml-20 w-1/2 max-w-md rounded-3xl border border-white p-6">
            <span className="text-6xl text-yellow-200 group-hover:animate-spin">
              *
            </span>
            <h2 className="mb-4 text-xl font-bold">Investment Strategies</h2>
            <p>
              Investment Strategies Discover effective investment strategies
              tailored to the needs of micro-businesses and startups. At Kamao,
              we prioritize your business growth.
            </p>
          </div>
          <div className="w-1/2 max-w-md  rounded-3xl border border-white p-6">
            <span className="text-6xl text-yellow-200 group-hover:animate-spin">
              *
            </span>
            <h2 className="mb-4 text-xl font-bold">Business Networking</h2>
            <p>
              Join our business networking events and connect with potential
              investors looking to support micro-businesses and startups.
            </p>
          </div>
          <div className="-ml-20 w-1/2 max-w-md rounded-3xl border border-white p-6">
            <span className="text-6xl text-yellow-200 group-hover:animate-spin">
              *
            </span>
            <h2 className="mb-4 text-xl font-bold">Financial Advisory</h2>
            <p>
              Gain access to expert financial advisory services to make informed
              decisions and attract investment opportunities.
            </p>
          </div>
          <div className="w-1/2 max-w-md rounded-3xl border border-white p-6">
            <span className="text-6xl text-yellow-200 group-hover:animate-spin">
              *
            </span>
            <h2 className="mb-4 text-xl font-bold">Growth Planning</h2>
            <p>
              Plan for sustainable business growth with the guidance and support
              of Kamao's experienced team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

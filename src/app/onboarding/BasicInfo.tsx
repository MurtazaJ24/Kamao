import React from "react";

export default function BasicInfo({ data, handleChange }: any) {
  return (
    <div className="mx-auto max-w-xs md:max-w-lg">
      <form className="mb-4 space-y-6 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            name="name"
            type="text"
            placeholder="John Doe"
            value={data.name}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            name="email"
            type="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            name="phone"
            type="text"
            placeholder="000-000-0000"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="userType"
          >
            User Type
          </label>
          <select
            onChange={handleChange}
            value={data.userType}
            name="userType"
            required
            className="block w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          >
            <option value="">Select</option>
            <option value="startup">Startup</option>
            <option value="investors">Investors</option>
          </select>
        </div>
      </form>
    </div>
  );
}

import React from "react";

export default function DocumentVerification({ data, handleChange }: any) {
  return (
    <div className="mx-auto max-w-xs md:max-w-lg">
      <form className="mb-4 space-y-6 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="document-name"
          >
            Document Name
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            name="documentName"
            type="text"
            placeholder="Document name"
            value={data.documentName}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div>
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="document-file"
          >
            Document File
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            name="documentFile"
            type="file"
            value={data.documentFile}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

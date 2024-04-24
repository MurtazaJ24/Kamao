"use client";

import { RedirectToSignIn, useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import BasicInfo from "./BasicInfo";
import DocumentVerification from "./DocumentVerfication";
import { completeOnboarding } from "./actions";

export default function Onboarding() {
  const { userId } = useAuth();

  if (!userId) return <RedirectToSignIn />;

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    documentName: "",
    documentFile: "",
  });

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    if (name == "documentFile") {
      const file = event.target.files?.[0];
      if (!file) return;

      setData({ ...data, [name]: file as any });
    }

    const { value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await completeOnboarding(data, userId)

    setData({ name: "", documentFile: "", documentName: "", email: "", phone: "", userType: "" })
  };

  const [activeTab, setActiveTab] = useState(0);

  const formElements = [
    <BasicInfo data={data} handleChange={handleChange} />,
    <DocumentVerification data={data} handleChange={handleChange} />,
  ];

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div>{formElements[activeTab]}</div>
      <div className="mx-auto flex flex-wrap gap-x-6">
        <button
          disabled={activeTab === 0}
          onClick={() => setActiveTab((prev) => prev - 1)}
          className={`rounded-full border border-blue-600 px-6 py-3 text-blue-600 ${activeTab === 0 ? "border-slate-600 text-slate-600 opacity-50" : "opacity-100 hover:bg-blue-600 hover:text-white"} transition-colors`}
        >
          Back
        </button>
        <button
          disabled={activeTab === formElements.length - 1}
          onClick={() => setActiveTab((prev) => prev + 1)}
          className={`rounded-full border border-blue-600 px-6 py-3 text-blue-600 ${activeTab === formElements.length - 1 ? "border-slate-600 text-slate-600 opacity-50" : "opacity-100 hover:bg-blue-600 hover:text-white"} transition-colors`}
        >
          Next
        </button>
        {activeTab === formElements.length - 1 ? (
          <button
            className="mb-2.5 block w-max cursor-pointer rounded-full border border-blue-700 px-6 py-3 font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
}

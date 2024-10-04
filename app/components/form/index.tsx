"use client";

import { CustomDateTimePicker } from "@/components/custom/custom-datepicker";
import { ImageUploader } from "@/components/custom/file-uploader";

import { useRelationshipStore } from "@/app/store/useRelationshipStore";

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

export function Form() {
  const {
    name1,
    name2,
    message,
    setName1,
    setName2,

    setMessage,
  } = useRelationshipStore();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">
        Couple Information
      </h2> */}

      {/* Form section */}
      <form className="space-y-6">
        {/* Name 1 and Name 2 - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name1"
              className="block text-sm font-medium text-gray-700"
            >
              Name 1
            </label>
            <input
              type="text"
              id="name1"
              name="name1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Name 1"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="name2"
              className="block text-sm font-medium text-gray-700"
            >
              Name 2
            </label>
            <input
              type="text"
              id="name2"
              name="name2"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Name 2"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
          </div>
        </div>
        {/* Dia em que se conheceram */}
        <CustomDateTimePicker />

        {/* Long message - Full width line */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Long Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <ImageUploader />

        {/* Email - Full width line */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Email"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import Logo from "../assets/logo.png";


export default function Footer() {
  return (
    <footer className="bg-black text-center text-neutral-600 dark:text-neutral-200 lg:text-left ">
      <div className="max-w-7xl mx-auto">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left ">
          <div className="grid-1 grid gap-8 grid-cols-5">
            {/* <!-- Tailwind Elements section --> */}
            <div className="">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt="Your Company"
                />
                <div className=" font-bold text-2xl pl-5 mr-48">Exclusive</div>
              </div>
              <h5 className="my-4 flex justify-center font-bold  md:justify-start">
                Subscribe
              </h5>
              <p>Get 10% off your first order</p>

              <div className="mt-4 flex px-2 gap-x-4 bg-black rounded-md border-2 border-white border-solid	">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" flex-auto rounded-md border-1 bg-black px-1 py-2 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <PaperAirplaneIcon className="h-8 w-8 mt-1  text-white " />
              </div>
            </div>
            {/* <!-- Products section --> */}
            <div className="pl-10">
              <h5 className="mb-4 flex justify-center font-bold  md:justify-start">
                Support
              </h5>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  exclusive@gmail.com
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  +88015-88888-9999
                </a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="pl-20">
              <h5 className="mb-4 flex justify-center font-bold  md:justify-start">
                Account
              </h5>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  My Account
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">Cart</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Wishlist
                </a>
              </p>
              <p>
                <a className="text-neutral-600 dark:text-neutral-200">Shop</a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div className="pl-20">
              <h5 className="mb-4 flex justify-center font-bold md:justify-start">
                Quick Link
              </h5>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Privacy Policy
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Terms Of Use
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                FAQ
              </p>
              <p className="flex items-center justify-center md:justify-start">
                Contact
              </p>
            </div>

            <div>
              <div className="mb-9 flex justify-center">
                <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-black p-6 text-center text-neutral-600">
          <span>© 2023 Copyright </span>
          <a href="https://tailwind-elements.com/">Exclusive PVT LTD</a>
        </div>
      </div>
    </footer>
  );
}

import React from "react";

function HeroForm() {
  return (
    <>
      <div className="mx-auto max-w-7xl flex w-full py-20 items-center border-b-2 border-[#DCDCDC]">
        <div className=" w-[40%]  p-2 ">
          <div className="text-[32px] w-[70%] text-left font-semibold leading-[40px] pb-5">
            Havic HV G-92 Gamepad
          </div>
          <div className="text-left text-[14px] opacity-50 font-normal pb-5">
            150 Reviews
          </div>
          <div className="text-left text-[24px] leading-[24px] pb-10">
            $192.00
          </div>
          <div className="text-left text-[14px] leading-[21px]">
            <p className="w-[70%]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
        </div>
        <div className="w-[60%]  p-10 shadow ">
          <div className="grid grid-cols-12 gap-2  pb-10">
            <div class=" col-span-4">
              <input
                id="email"
                name="name"
                type="text"
                autocomplete="given-name"
                placeholder="Your Name *"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#F5F5F5] placeholder:text-[16px] placeholder:p-2"
              />
            </div>
            <div className="col-span-4">
              {" "}
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Your Email *"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-[#F5F5F5]  placeholder:text-[16px] placeholder:p-2"
              />
            </div>
            <div className="col-span-4">
              <button
                type="button"
                class="text-sm font-semibold leading-6 bg-[#000000] w-[100%] h-[36px] text-[#ffffff]"
              >
                Upload Image
              </button>
            </div>
          </div>
          <div className="text-left pb-10">
            <textarea
              id="about"
              name="about"
              rows="3"
              placeholder="Your Feedback"
              className=" placeholder:text-[16px] placeholder:p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-[#F5F5F5] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            ></textarea>
          </div>

          <div className=" w-full flex justify-end">
            <div className="flex w-1/4">
              <button
                type="button"
                class="text-sm font-semibold leading-6 bg-[#DB4444] w-[100%]  text-[#ffffff] px-[16px] py-[15px] flex items-center justify-center"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroForm;

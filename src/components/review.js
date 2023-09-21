import React from "react";

export default function Review() {
  return (
    <>
      <div className="mx-auto max-w-7xl  w-full py-10 text-left border-b-2 border-[#DCDCDC]">
        <p className="text-slate-400">by Aloke</p>
        <p className="py-3">
          I thought to use this with touch batteries. We cannot use touch
          batteries .two button cells were already there.anyhow I love
          it.obviously it is very cute.I love it.easy to handle as it is too
          small .it canbe used for beautiful decors
        </p>

        <div className="grid grid-cols-6 gap-5  pb-10">
          <div>
            <img
              className="h-8 w-full h-auto"
              src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/i6k4fjs0qo8v6l6eg2qa.jpg"
              alt="Product image"
            />
          </div>

          <div>
            <img
              className="h-8 w-full h-auto"
              src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/i6k4fjs0qo8v6l6eg2qa.jpg"
              alt="Product image"
            />
          </div>

          <div>
            <img
              className="h-8 w-full h-auto"
              src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/i6k4fjs0qo8v6l6eg2qa.jpg"
              alt="Product image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

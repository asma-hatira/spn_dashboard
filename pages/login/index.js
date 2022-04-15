import React from "react";
import Image from "next/image";
import loginimage from "../../assets/img/loginimage.png";
function index() {
  return (
    <div class="flex flex-row ">
      <Image width={800} height={725} src={loginimage}></Image>
      <div className="flex  flex-col justify-center ">
        <div className="flex  flex-col justify-center  mx-60">
          <p className=" font-bold font-RalewaySemibold text-3xl  text-gold">
            Welcome
          </p>
          <p className="text-gold font-RalewayRegular text-sm">
            Login to your account
          </p>
        </div>
        <form className=" pt-10 flex  flex-col mx-40 ">
          <input
            type='email'
            name="Email"
            placeholder="Email"
            class="  py-2 border-b-2 w-80 outline-none  border-formgray"
          />
          <input
            type='password'
            name="Password"
            placeholder="Password"
            class="  py-2 border-b-2 w-80 outline-none  border-formgray"
          />
        </form>
      </div>
    </div>
  );
}

export default index;

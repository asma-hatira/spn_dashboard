import React from "react";
import Image from "next/image";
import fakeuser from "../assets/img/fakeuser.jpg";
function PageHeader() {
  return (
    <div>
      {/* Code block starts */}
      <div className="my-6  container pt-6 px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4  border-gray-300">
        <div></div>
        <div class="flex items-center space-x-4">
          <Image
            class="rounded-full "
            src={fakeuser}
            width="49px"
            height="49px"
          ></Image>
          <div class="space-y-1 font-medium dark:text-white">
            <div>Jon Doe</div>
            <div class="text-xs text-sidebargraytext font-thin">developer </div>
          </div>
        </div>
        {/* Code block ends */}
      </div>
    </div>
  );
}

export default PageHeader;

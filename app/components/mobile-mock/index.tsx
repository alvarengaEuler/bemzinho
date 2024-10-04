"use client";

import { useRelationshipStore } from "@/app/store/useRelationshipStore";
import React from "react";
import { TiktokLikeComponent } from "./tik-tok-like";
import { InstagramLikeComponent } from "./instagram-like";

export function MobileMockComponent() {
  const { name1, name2, message } = useRelationshipStore();

  return (
    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[714px] w-[326px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className=" rounded-[2rem] overflow-hidden w-[300px] h-[684px]  dark:bg-gray-800">
          <InstagramLikeComponent />
        </div>
      </div>
    </div>
  );
}

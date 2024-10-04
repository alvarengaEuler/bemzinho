import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, Music } from "lucide-react";

import Image from "next/image";

import ingrid1 from "@/images/people/ingrid2.jpeg";
import { useTimerStore } from "@/app/store/useTimeStore";

export function TiktokLikeComponent() {
  const [activeTab, setActiveTab] = useState("for-you");
  const { relationshipDuration } = useTimerStore();

  return (
    <div className="bg-black text-white h-[684px] w-[316px]  flex flex-col ">
      {/* Top navigation */}
      <div className="flex justify-center items-center p-4 ">
        <div className="flex space-x-4">
          <button
            className={`font-semibold ${
              activeTab === "following" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("following")}
          >
            Following
          </button>
          <button
            className={`font-semibold ${
              activeTab === "for-you" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("for-you")}
          >
            For You
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 relative  ">
        {/* Video placeholder relative top-8 left-5 bottom-0 */}
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <span className="text-2xl">
            <Image src={ingrid1} alt="mobilescreen" className="pt-4  " />
          </span>
        </div>

        {/* Side icons */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4">
          <button className="p-2">
            <Heart className="w-7 h-7" />
          </button>
          <button className="p-2">
            <MessageCircle className="w-7 h-7" />
          </button>
          <button className="p-2">
            <Share2 className="w-7 h-7" />
          </button>
          <button className="p-2">
            <Bookmark className="w-7 h-7" />
          </button>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-4 left-4 right-12">
          <h2 className="font-semibold text-lg">@username</h2>
          {relationshipDuration && (
            <div className="text-center p-4 ">
              <h3 className="font-semibold text-lg">Juntos</h3>

              {/* <div className="text-center">
                <h1 className="text-md  font-pop text-white relative inline-block">
                  {relationshipDuration}
                  <span className="absolute top-0 left-0 font-pop text-pink-500/90 blur-sm transform translate-x-1 translate-y-1">
                    {relationshipDuration}
                  </span>
                  <span className="absolute top-0 left-0 font-pop text-cyan-500/90 blur-sm transform -translate-x-1 -translate-y-1">
                    {relationshipDuration}
                  </span>
                </h1>
              </div> */}
            </div>
          )}
          <p className="text-sm mt-1">
            Video description goes here #hashtag #tiktok
          </p>
          <div className="flex items-center mt-2">
            <Music className="w-4 h-4 mr-2" />
            <p className="text-sm">Original Sound - Artist Name</p>
          </div>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      {/* <div className="h-16 bg-gray-900 flex justify-around items-center">
        <span>Home</span>
        <span>Discover</span>
        <span className="bg-gray-700 p-2 rounded-full">+</span>
        <span>Inbox</span>
        <span>Me</span>
      </div> */}
    </div>
  );
}

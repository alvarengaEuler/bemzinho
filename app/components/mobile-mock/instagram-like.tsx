"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, MessageCircle, Music, Send } from "lucide-react";

import ingrid1 from "@/images/people/ingrid2.jpeg";
import Birds from "@/images/love-birds.png";
import { useTimerStore } from "@/app/store/useTimeStore";

export function InstagramLikeComponent() {
  const { relationshipDuration } = useTimerStore();
  const [activeTab, setActiveTab] = useState("Now");

  return (
    <div className="relative w-full max-w-sm mx-auto h-[684px]  overflow-hidden bg-gray-100">
      {/* Background Image */}
      <Image
        src={ingrid1}
        alt="Story background"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30">
        {/* Top Icons */}
        <div className="flex justify-between items-center p-4">
          {/* <Camera className="text-white w-6 h-6" /> */}
          <Image
            src={Birds}
            alt="LovelyBirds"
            className="h-8 w-auto scale-90 hover:scale-105 duration-200"
          />
          <div className="flex space-x-4">
            <Heart className="text-white w-6 h-6" />
            <MessageCircle className="text-white w-6 h-6" />
            <Send className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Top navigation */}
        <div className="flex justify-center items-center p-4 ">
          <div className="flex space-x-4">
            <button
              className={`font-semibold ${
                activeTab === "following" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("following")}
            >
              Future
            </button>
            <button
              className={`font-semibold ${
                activeTab === "Now" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Now")}
            >
              Now
            </button>
          </div>
        </div>

        {/* Countdown Timer */}
        {relationshipDuration && (
          <div className="absolute top-1/4 left-0 right-0 text-center">
            <h2 className="text-white text-3xl font-bold mb-4 font-pop">
              Juntos
            </h2>
            {relationshipDuration.years !== "0" && (
              <div className="text-white">
                <div className="text-4xl font-bold font-pop bg-white/30 p-2 w-12 flex items-center justify-center  self-center mx-auto">
                  {relationshipDuration.years?.padStart(2, "0")}
                </div>
                <div className="text-sm mb-4">
                  {relationshipDuration.years === "1" ? "ano" : "anos"}
                </div>
              </div>
            )}
            <div className="flex justify-center space-x-4 ">
              <div className="text-white">
                <div className="text-4xl font-bold font-pop bg-white/30 p-2">
                  {relationshipDuration.months?.padStart(2, "0")}
                </div>
                <div className="text-sm">
                  {relationshipDuration.months === "1" ? "mês" : "meses"}
                </div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold font-pop bg-white/30 p-2">
                  {relationshipDuration.days}
                </div>
                <div className="text-sm">dias</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold font-pop bg-white/30 p-2">
                  {relationshipDuration.hours}
                </div>
                <div className="text-sm">horas</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold font-pop bg-white/30 p-2">
                  {relationshipDuration.seconds}
                </div>
                <div className="text-sm">segundos</div>
              </div>
            </div>
          </div>
        )}

        {/* Question Card */}
        <Card className="absolute bottom-20 left-4 right-4 bg-white bg-opacity-80 backdrop-blur-sm">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Pensamento do dia</h2>
            <p className="text-sm text-gray-700">
              Por mim nós tava agarradin vendo um filme :)
            </p>
          </CardContent>
        </Card>

        {/* Bottom Text */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center mt-2">
            <Music className="text-white text-sm font-medium w-4 h-4 mr-2" />
            <p className="text-white text-sm font-medium">
              Original Sound - Artist Name
            </p>
          </div>
        </div>
      </div>

      {/* Animated Hearts */}
      {/* {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-red-500"
              initial={{ scale: 0, x: "50%", y: "100%" }}
              animate={{
                scale: [0, 1, 0],
                x: [
                  "50%",
                  `${50 + (Math.random() - 0.5) * 50}%`,
                  `${50 + (Math.random() - 0.5) * 100}%`,
                ],
                y: ["100%", "50%", "0%"],
              }}
              transition={{ duration: 2, times: [0, 0.5, 1], delay: Math.random() * 0.5 }}
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          ))}
        </div>
      )} */}
    </div>
  );
}

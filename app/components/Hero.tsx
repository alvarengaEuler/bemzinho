import Image from "next/image";
import mobilescreen from "@/images/mobilescreen.png";
import { ChevronRight } from "lucide-react";
import { Form } from "./form";
import { MobileMockComponent } from "./mobile-mock";
import { BackgroundSquares } from "./background-squares";
import OptionButton from "./option-button";
import { RelationshipTimerAndCountdowns } from "./frontComponentTest";

const Hero = () => {
  return (
    <div className="relative isolate">
      {/* <BackgroundSquares /> */}
      <div className="max-w-7xl mx-auto px-6 pb-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8">
        <div className=" max-w-2xl mx-auto lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl font-pop  ">
            Relembre seu amor todo dia!
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-400 mb-10">
            Colecione memórias, relate coisas em comum, encurte a distância.
          </p>

          {/* <Form /> */}
          <RelationshipTimerAndCountdowns />
        </div>

        <MobileMockComponent />
      </div>
    </div>
  );
};

export default Hero;

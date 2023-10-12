"use client";

import { IconButton, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-4.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h1" color="white">
          Exploring the Wonders of Biologyat Night...
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl"
        >
          Introduction: Join us in a a journey into the world of life!
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="mt-1 mb-7 font-medium uppercase"
        >
          Connect with us on:
        </Typography>
        <div className="gap-8 flex">
          <IconButton variant="text" color="white" size="sm">
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton variant="text" color="white" size="sm">
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton variant="text" color="white" size="sm">
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;

"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Content() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Typography color="blue" variant="h6">
          #science #biology #ecology
        </Typography>
        <Typography className="my-12 font-normal !text-gray-500">
          Biology, often referred to as the &quot;science of life,&quot; is a
          captivating and multifaceted field that delves into the intricate web
          of living organisms and the systems that sustain them. From the
          tiniest microorganisms to the towering giants of the animal kingdom,
          biology offers a profound understanding of life&apos;s mechanisms,
          evolution, and interconnectedness.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          Exploring the Wonders of Biology
        </Typography>

        <Typography className="my-10 font-normal !text-gray-500">
          The Branches of Biology Biology encompasses a diverse array of
          branches, each focusing on specific aspects of living organisms. Here
          are a few key ones: a. Genetics: Genetics unravels the secrets of
          heredity, studying how traits are passed from one generation to the
          next and how variations occur. Recent advancements in genomics have
          revolutionized medicine, enabling personalized treatments based on an
          individual&apos;s genetic makeup. b. Ecology: Ecology delves into the
          relationships between organisms and their environments. It plays a
          pivotal role in understanding and addressing environmental challenges,
          such as climate change and biodiversity loss.
        </Typography>
        <Image
          width={768}
          height={500}
          src="/nextjs-tailwind-blog-post-details-page/image/event.jpeg"
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography variant="small" className="font-normal !text-gray-500">
          Photo by Jackson Sophat on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            Unsplash
          </a>
        </Typography>

        <Typography className="my-12 font-normal !text-gray-500">
          Thank you Anna for the invite thank you to the whole Vogue team And I
          love you like Kanye loves Kanye.
          <br />
          <br />
          The Arctic Ocean freezes every winter and much of the sea-ice then
          thaws every summer, and that process will continue whatever happens
          with climate change. Even if the Arctic continues to be one of the
          fastest-warming regions of the world, it will always be plunged into
          bitterly cold polar dark every winter. And year-by-year, for all kinds
          of natural reasons, there&apos;s huge variety of the state of the ice.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          So what does the new record for the lowest level of winter ice
          actually mean
        </Typography>

        <Typography className="my-10 font-normal !text-gray-500">
          For a start, it does not automatically follow that a record amount of
          ice will melt this summer. More important for determining the size of
          the annual thaw is the state of the weather as the midnight sun
          approaches and temperatures rise. But over the more than 30 years of
          satellite records, scientists have observed a clear pattern of
          decline, decade-by-decade.
          <br />
          <br />
          The Arctic Ocean freezes every winter and much of the sea-ice then
          thaws every summer, and that process will continue whatever happens
          with climate change. Even if the Arctic continues to be one of the
          fastest-warming regions of the world, it will always be plunged into
          bitterly cold polar dark every winter. And year-by-year, for all kinds
          of natural reasons, there&apos;s huge variety of the state of the ice.
          <br />
          <br />
          Society has put up so many boundaries, so many limitations on
          what&apos;s right and wrong that it&apos;s almost impossible to get a
          pure thought out.
        </Typography>
        <div className="container mx-auto px-4 py-20">
          <div className="w-full mb-10 md:flex items-center justify-between">
            <div className="flex mb-5 md:mb-0 items-center gap-3">
              <Button size="sm" color="gray" variant="outlined">
                stories
              </Button>
              <Button size="sm" color="gray" variant="outlined">
                design
              </Button>
              <Button size="sm" color="gray" variant="outlined">
                catle
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 bg-[#35518D] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-facebook text-lg" />
              </button>
              <button className="w-9 h-9 bg-[#EA4C89] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-dribbble text-lg" />
              </button>
              <button className="w-9 h-9 bg-gray-900 hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-github text-lg" />
              </button>
            </div>
          </div>
          <div className=" md:flex items-center justify-between">
            <div className="mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl">
              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/nextjs-tailwind-blog-post-details-page/image/avatar1.jpg"
                  className="rounded-2xl"
                  alt="photo"
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                  className="mb-4 md:mb-0"
                  color="blue-gray"
                >
                  Emma Roberts
                </Typography>
                <Typography className="w-full md:w-10/12 font-normal !text-gray-500">
                  Dr. Sarah Mitchell is a passionate and accomplished biologist
                  with a deep-rooted fascination for the intricate workings of
                  the natural world.
                </Typography>
              </div>
            </div>
            <Button
              color="gray"
              className="w-1/2 md:w-fit flex-shrink-0"
              size="md"
            >
              follow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;

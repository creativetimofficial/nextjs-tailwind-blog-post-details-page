"use client";

import React from "react";
import Image from "next/image";

import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

import BlogCardWithImage from "@/components/blog-card-with-image";
import SimpleBlogCard from "@/components/simple-blog-card";

const SIMPLE_CONTENT = [
  {
    title: "Podcasts",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    subtitle: "An interview with Tesla founder.",
    name: "By Alexa Rossa",
  },
  {
    title: "Interviews",
    icon: PlayCircleIcon,
    subtitle: "Make $500k through small biz or raise it from family.",
    name: "By Jonathan Silvia",
  },
  {
    title: "Podcasts",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    subtitle: "An interview with Tesla founder.",
    name: "By Alexa Rossa",
  },
];

export function BlogPost() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 py-20">
      <Button color="gray" className="mb-3" size="sm">
        BLOG
      </Button>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Check out the latest articles
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 mb-8 w-full text-center font-normal !text-gray-500 max-w-4xl"
      >
        Stay at the forefront of the latest developments in the world of
        biology, as our team of expert writers and researchers bring you fresh
        insights, groundbreaking discoveries, and captivating stories from the
        ever-evolving realm of biological sciences.
      </Typography>
      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  Exploring the Role of Epigenetics in Inherited Traits
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/nextjs-tailwind-blog-post-details-page/image/avatar2.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  How Gut Bacteria Affect Our Health and Well-being
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Dive into the latest research on the human microbiome.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/nextjs-tailwind-blog-post-details-page/image/avatar1.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Mathew Glock
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Author
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <BlogCardWithImage />
        </div>
        <div className="md:border-l px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-6">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <div className="w-full mb-4 h-[149px] ">
                  <Image
                    width={768}
                    height={768}
                    src="/nextjs-tailwind-blog-post-details-page/image/blogs/blog-2.png"
                    className="w-10/12 md:w-full object-cover h-full rounded-lg"
                    alt=""
                  />
                </div>
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-6 !text-gray-900"
                >
                  Biomimicry: Nature-Inspired Innovations
                </Typography>
                <Typography className="!font-bold !text-sm text-gray-700">
                  by Mathew Glock
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-6">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <div className="w-full mb-4 h-[149px]">
                  <Image
                    width={768}
                    height={768}
                    src="/nextjs-tailwind-blog-post-details-page/image/blogs/blog-3.png"
                    className="w-10/12 md:w-full object-cover h-full rounded-lg"
                    alt=""
                  />
                </div>
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-6 !text-gray-900"
                >
                  Bringing Back Extinct Species
                </Typography>
                <Typography className="!font-bold !text-sm text-gray-700">
                  by Emma Roberts
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 md:grid-cols-1 md:border-l px-3 md:pr-36 border-blue-gray-100">
          {SIMPLE_CONTENT.map((props, idx) => (
            <div
              key={idx}
              className={`${
                SIMPLE_CONTENT.length - 1 !== idx
                  ? "md:border-b"
                  : "md:border-none"
              } border-blue-gray-100 mb-6 `}
            >
              <SimpleBlogCard key={idx} {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPost;

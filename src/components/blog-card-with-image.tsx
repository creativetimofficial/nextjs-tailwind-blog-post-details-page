import Image from "next/image";

import { Typography, Card, CardBody } from "@material-tailwind/react";

export function BlogCardWithImage() {
  return (
    <Card
      shadow={false}
      className="pb-5 p-0 !border-b md:border-none border-blue-gray-100"
    >
      <CardBody className="p-0 ">
        <div className="w-full mb-4 h-[211px] ">
          <Image
            width={768}
            height={768}
            src="/nextjs-tailwind-blog-post-details-page/image/blogs/blog-1.png"
            className="w-full h-full rounded-lg"
            alt=""
          />
        </div>
        <Typography variant="h3" className="leading-[45px] mb-4 !text-gray-900">
          How to Build a $24 Billion Dollar Company in Just 2 Years.
        </Typography>
        <Typography className="font-normal mb-4 !text-base text-gray-500 ">
          I&apos;ve come to the conclusion that 50% of folks in this world
          don&apos;t even spend enough time alone with their thoughts to have
          their own opinions. They haven&apos;t done the work to decide what
          they think. And that isn&apos;t a rewarding way to live.
        </Typography>
        <div className="flex items-center gap-3">
          <div className="">
            <Image
              width={256}
              height={256}
              src="/nextjs-tailwind-blog-post-details-page/image/avatar3.jpg"
              className="w-12 h-12 rounded-lg"
              alt="photo"
            />
          </div>
          <div>
            <Typography className="!font-bold !text-sm text-gray-900">
              Andrew Peterson
            </Typography>
            <Typography className="!font-normal !text-xs text-gray-500 ">
              Redactor
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default BlogCardWithImage;

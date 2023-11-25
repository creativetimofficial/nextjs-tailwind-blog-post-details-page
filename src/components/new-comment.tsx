import Image from "next/image";
import { Button, Typography, Textarea } from "@material-tailwind/react";

export function NewComment() {
  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className=" !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ">
          <Image
            width={768}
            height={768}
            src="/nextjs-tailwind-blog-post-details-page/image/avatar1.jpg"
            alt="img"
            className="h-full rounded w-full object-cover object-center"
          />
        </div>
        <Typography
          variant="small"
          className=" font-bold flex items-center gap-2 !text-gray-900"
        >
          Tina Andrew
        </Typography>
      </div>
      <div className="flex-col mt-4 pl-14 h-full">
        <form action="#" className="flex flex-col items-end">
          {/* @ts-ignore */}
          <Textarea
            label="Your Message"
            variant="static"
            placeholder="Write a nice reply or go home..."
          />
          <Button color="gray" className="mt-4" size="md">
            button
          </Button>
        </form>
      </div>
    </div>
  );
}

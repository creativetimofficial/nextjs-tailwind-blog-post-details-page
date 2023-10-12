"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import CommentCard from "@/components/comment-card";
import { NewComment } from "@/components/new-comment";

const COMMENTS = [
  {
    img: "/image/avatar1.jpg",
    name: "Tina Andrew",
    hours: " · 7 minutes ago",
    desc: "Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome! ",
  },
  {
    img: "/image/avatar2.jpg",
    name: "Emma Roberts",
    hours: " · 2 hours ago",
    desc: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.Don't forget, You're awesome!",
  },
];

export function Comments() {
  return (
    <section className="w-full max-w-2xl mx-auto flex flex-col px-5 pb-20">
      <Typography variant="h4" className=" md:text-center" color="blue-gray">
        3 Comments
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        {COMMENTS.map((props, idx) => (
          <CommentCard key={idx} {...props} />
        ))}
        <div className="md:pl-14">
          <CommentCard
            desc="nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.Don't forget, You're awesome!"
            img="/image/avatar1.jpg"
            name="Tina Andrew "
            hours=" · 2 hours ago"
          />
        </div>
      </div>
      <Typography
        variant="h4"
        className="my-6 md:my-14 md:text-center"
        color="blue-gray"
      >
        Post Your Comment
      </Typography>
      <NewComment />
    </section>
  );
}
export default Comments;

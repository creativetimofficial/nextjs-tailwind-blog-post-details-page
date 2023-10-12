import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  Button
} from "@material-tailwind/react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";


interface CommentCardProps {
  img: string;
  name: string;
  desc: string;
  hours: string;
}

export function CommentCard({ img, name, desc, hours }: CommentCardProps) {
  return (
    <Card
      shadow={false}
      color="transparent"
      className="grid items-center gap-6 "
    >
      <CardBody className="p-0 gap-5 flex ">
        <div className=" !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ">
          <Image
            width={768}
            height={768}
            src={img}
            alt="img"
            className="h-full rounded w-full object-cover object-center"
          />
        </div>
        <div>
          <div className="flex gap-1 mb-3 items-center">
            <Typography
              variant="small"
              className=" font-bold flex items-center gap-2 !text-gray-900"
            >
              {name}
            </Typography>
            <Typography variant="small" className="font-medium !text-gray-500">
              {hours}
            </Typography>
          </div>
          <Typography className="w-full font-normal mb-4 !text-gray-500">
            {desc}
          </Typography>
          <div className="!w-full flex justify-end">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="text"
                color="gray"
                className="flex items-center gap-1 flex-shrink-0"
              >
                <ArrowUturnLeftIcon className="w-4 text-4 h-4" />
                Reply
              </Button>
              <Button
                size="sm"
                variant="text"
                color="red"
                className="flex items-center gap-1 flex-shrink-0"
              >
                <HeartIcon className="w-4 text-4 h-4" />
                Reply
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

  export default CommentCard;
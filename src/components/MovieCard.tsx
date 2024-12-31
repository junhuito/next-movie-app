import { Movie } from "@/types/movie";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

type MovieCardProps = {
  data: Movie;
};

export const MovieCard = ({ data }: MovieCardProps) => {
  const numberToTime = (num: number) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
  }

  return (
    <Link
      href={`/movie/${data._id}`}
    >
      <Box component='div' className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
        {data.poster && <Image fill src={data.poster} alt={data.title} />}
      </Box>
      <p className="font-bold">{data.title}</p>
      <p className="text-slate-200/50">{numberToTime(data.runtime)}</p>
    </Link>
  );
};

"use client";
import * as React from 'react'
import { MovieDetail } from '@/types/movie';
import { Typography, Skeleton, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Chip } from '@/components/Chip';
import { Rating } from '@/components/Rating';
import Link from 'next/link';

export default function MovieDetailScreen() {
  const { id } = useParams<{ id: string }>();

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: async (): Promise<MovieDetail> => {
      return fetch(`/api/movie/${id}`).then((response) => response.json());
    }
  })

  if (error) {
    return <Typography>Error: {error.message}</Typography>
  }

  if (isLoading) {
    return <Skeleton width={500} height={500}/>
  }

  if (!movie) {
    return <Typography>Movie not found!</Typography>
  }

  console.log(movie)

  const numberToTime = (num: number) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
  }

  return (
    <Box>
      <div className="h-[40vh] relative overflow-hidden">
        <Image
          src={movie.poster}
          alt={movie.title}
          className="hover:scale-105 transition-transform duration-500"
          fill
        />
        <div className="space-y-2 absolute bottom-0 bg-opacity-30 text-white bg-gradient-to-t w-screen from-black to-transparent p-4">
          <Typography variant="h4">{movie.title}</Typography>
          <div className="flex">
            <Typography>{movie.year}</Typography>
            <Typography className='px-1'>|</Typography>
            <Rating rating={movie.imdb.rating}/>
            <Typography className='px-1'>|</Typography>
            <Typography>{numberToTime(movie.runtime)}</Typography>
          </div>
          <div className="flex gap-4">
            {movie.genres.map((genre) => (
              <Chip key={genre}>{genre}</Chip>
            ))}
          </div>
        </div>
      </div>
      <div className='p-4'>
        <Typography variant="h6">Storyline</Typography>
        <Typography>{movie.fullplot}</Typography>
      </div>
      <div className='p-4'>
        <Typography variant="h6">More like this</Typography>
        <div className='flex overflow-scroll gap-4'>
          {movie.similarMovies.map((similarMovie) => (
            <Link key={similarMovie._id} href={`/movie/${similarMovie._id}`}>
              <div key={similarMovie._id} className='w-[200px]'>
                <Image
                  src={similarMovie.poster}
                  alt={similarMovie.title}
                  className="hover:scale-105 transition-transform duration-500 w-[200px] h-[180px]"
                  width={200}
                  height={180}
                  objectFit='cover'
                />
                <Typography>{similarMovie.title}</Typography>
                <Typography>{similarMovie.year}</Typography>
                <Rating rating={similarMovie.imdb.rating}/>
                <Typography>{numberToTime(similarMovie.runtime)}</Typography>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </Box>
  );
}

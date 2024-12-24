"use client";
import * as React from 'react'
import { MovieCard } from '@/components/MovieCard';
import { Movie } from '@/types/movie';
import { Container, Typography, Skeleton, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function MovieDetailScreen() {
  const { id } = useParams<{ id: string }>();

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: async (): Promise<Movie> => {
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

  return (
    <Box>
      <div className="h-[55vh] relative overflow-hidden">
        <Image
          src={movie.poster}
          alt={movie.title}
          className='hover:scale-105 transition-transform duration-500'
          fill
        />
        <Typography variant='h4' className='absolute bottom-0 bg-opacity-30 text-white bg-gradient-to-t w-screen from-black to-transparent p-4'>{movie.title}</Typography>
      </div>
      <div>
        
      </div>
    </Box>
  );
}

"use client";
import * as React from 'react'
import { MovieCard } from '@/components/MovieCard';
import { Movie } from '@/types/movie';
import { Container, Typography, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function MovieDetailScreen({ params }: { params: Promise<{ id: string }> }) {

  const { id } = React.use(params)

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: async (): Promise<Movie> => {
      return fetch(`/api/movie/${id}`).then((response) => response.json());
    }
  })

  if (error) {
    return <Typography>Error: {error.message}</Typography>
  }

  if (isLoading) {
    return <Skeleton width={300} height={300}/>
  }

  if (!movie) {
    return <Typography>Movie not found!</Typography>
  }

  return (
    <Container className="space-y-4 p-10">
      <MovieCard key={movie?._id} data={movie}/>
    </Container>
  );
}

"use client";
import { MovieCard } from '@/components/MovieCard';
import { Movie } from '@/types/movie';
import { Typography, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function MovieScreen() {

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['movie'],
    queryFn: async (): Promise<Movie[]> => {
      return fetch('/api/movie').then((response) => response.json());
    }
  })

  if (error) {
    return <Typography>Error: {error.message}</Typography>
  }

  if (isLoading) {
    return <Skeleton width={100} height={100}/>
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {
        movies?.map((movie) => <MovieCard key={movie._id} data={movie}/>)
      }
    </div>
  );
}

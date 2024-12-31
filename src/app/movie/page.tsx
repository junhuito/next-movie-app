"use client";
import { Chip } from '@/components/Chip';
import { MovieCarousel } from '@/components/MovieCarousel';
import { Movie } from '@/types/movie';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function MovieScreen() {

  const genres = ["All", "Action", "Drama", "Comedy", "Science", "Magic"];

  const { data: movies } = useQuery({
    queryKey: ['movie'],
    queryFn: async (): Promise<Movie[]> => {
      return fetch('/api/movie').then((response) => response.json());
    }
  })

  return (
    <Box component='div' className='space-y-4'>
      <Box component='div'>
        <h1 className='text-4xl'>Discover Your Next<br/>Favorite Movie.</h1>
      </Box>
      <Box component='div' className='flex space-x-2 overflow-auto'>
        {genres.map((genre) => <Chip key={genre}>{genre}</Chip>)}
      </Box>

      <Box component='div'>
        <Box component='div' className='flex items-center justify-between'>
          <h2 className='font-bold'>Latest movies</h2>
          <Link href='#' className='text-blue-400'>See all</Link>
        </Box>

        <MovieCarousel movies={movies}/>
      </Box>

      <Box component='div'>
        <h2 className='font-bold'>Upcoming</h2>

      </Box>
    </Box>
  )
}

// import { Box, Skeleton } from "@mui/material";
// import { MovieCard } from "./MovieCard";
// import { Movie } from "@/types/movie";

// export const MovieCarousel = ({ movies }: { movies?: Movie[] }) => {
//   if (!movies) {
//     return (
//       <Box component="div" className="flex space-x-4 overflow-hidden">
//         {Array.from({ length: 10 })?.map((_, i) => (
//           <Skeleton
//             className="block basis-60 shrink-0"
//             variant="rounded"
//             key={i}
//             width={200}
//             height={150}
//           />
//         ))}
//       </Box>
//     );
//   }

//   return (
//     <Box component="div" className="flex space-x-4 overflow-auto">
//       {movies?.map((movie) => (
//         <MovieCard key={movie._id} data={movie} />
//       ))}
//     </Box>
//   );
// };


import { Box, Skeleton } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { Movie } from "@/types/movie";

export const MovieCarousel = ({ movies }: { movies?: Movie[] }) => {
  if (!movies) {
    return (
      <Box component="div" className="flex space-x-4 overflow-hidden">
        {Array.from({ length: 10 })?.map((_, i) => (
          <Skeleton
            component='div'
            variant="rounded"
            className="flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            key={i}
            height={250}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box component="div" className="flex space-x-4 overflow-auto">
      {movies?.map((movie) => (
        <Box key={movie._id} component="div" className="overflow-hidden rounded-2xl flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 h-auto">
            <MovieCard data={movie} />
        </Box>
      ))}
    </Box>
  );
};

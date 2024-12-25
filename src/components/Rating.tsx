import { Typography } from "@mui/material";

export const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const to5Rating = rating / 2;
  const starCount = Math.round(to5Rating);
  const starRemainder = Math.round(maxRating - starCount);
  return (
    <span className="flex">
      <Typography className="text-yellow-200">
        {"★".repeat(starCount)}
      </Typography>
      <Typography className="text-slate-400">
        {"★".repeat(starRemainder)}
      </Typography>
    </span>
  );
};

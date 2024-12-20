import { Skeleton, Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Button variant="contained">Hello world</Button>
      <Typography variant="h1">Hello world</Typography>
    </>
  );
}

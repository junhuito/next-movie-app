"use client";
import theme from "@/theme";
import { Notifications, Search } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Box component='header' className="flex items-center p-2 sticky top-0 100vw z-10" sx={{ background: theme.palette.background.default }}>
        <Box component='div' className="flex space-x-2">
          <Avatar/>
          <Box component='div'>
            <p className="text-xs">Welcome back,</p>
            <p>Jun</p>
          </Box>
        </Box>

        <Box component='div' className="ml-auto flex items-center space-x-2">
          <Box component='div' className="flex items-center bg-slate-200/10 rounded-3xl p-2 space-x-2 md:min-w-[300px]">
            <Search/> 
            <input type="tex" className="outline-none bg-transparent" placeholder="Search"/>
          </Box>

          <Notifications/>
        </Box>
      </Box>
      <Box component='main' className="p-2">
        {children}
      </Box>
    </QueryClientProvider>
  );
}

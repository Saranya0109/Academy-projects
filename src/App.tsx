import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HandsOnTraining from "./components/HandsOnTraining";
import Careers from "./pages/careers";
import CourseDetails from "./pages/coursedetails";
import ApplyForm from "./pages/ApplyForm";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Add this

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop /> {/* ✅ ensures page scrolls to top on route change */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hands-on-training" element={<HandsOnTraining />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:courseId" element={<CourseDetails />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

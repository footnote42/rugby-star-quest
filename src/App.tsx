import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GoalSetting from "./pages/GoalSetting";
import CategorySelection from "./pages/CategorySelection";
import CompetencyAssessment from "./pages/CompetencyAssessment";
import ProgressSummary from "./pages/ProgressSummary";
import DevelopmentActivities from "./pages/DevelopmentActivities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GoalSetting />} />
          <Route path="/categories" element={<CategorySelection />} />
          <Route path="/assess/:category" element={<CompetencyAssessment />} />
          <Route path="/summary" element={<ProgressSummary />} />
          <Route path="/activities" element={<DevelopmentActivities />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import MentionsLegales from "./pages/mentions-legales/page";
import CGV from "./pages/cgv/page";
import PolitiqueConfidentialite from "./pages/politique-confidentialite/page";
import { Helmet } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Helmet>
        <title>Meltech France — Création de sites web et apps</title>
        <meta
          name="description"
          content="Agence digitale créant des sites web modernes, applications mobiles et solutions Cloud pour entrepreneurs et entreprises."
        />
      </Helmet> */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="/politique-de-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/cgv" element={<CGV />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

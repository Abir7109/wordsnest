/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ScanPage from "./pages/ScanPage";
import ReviewsPage from "./pages/ReviewsPage";
import DownloadPage from "./pages/DownloadPage";
import DemoPage from "./pages/DemoPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/scan" element={<ScanPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


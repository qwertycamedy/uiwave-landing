import HomePage from 'pages/home/HomePage';
import PricingPage from 'pages/pricing/PricingPage';
import PrivacyPage from 'pages/privacy/PrivacyPage';
import TermsPage from 'pages/terms/TermsPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BlogPage from 'pages/blog/BlogPage';
import ArticlePage from 'pages/article/ArticlePage';
import FeedbackPage from 'pages/feedback/FeedbackPage';
import FaqPage from 'pages/faq/FaqPage';
import { Analytics } from '@vercel/analytics/react';
import { useDispatch } from 'react-redux';
import { getCSRF } from 'store/slices/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(getCSRF());
  }, []);

  return (
    <div className="site-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
        <Route path="/contact_us" element={<FeedbackPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;

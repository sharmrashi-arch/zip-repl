import { lazy, Suspense } from 'react';
import { Route, Switch, Router as WouterRouter, Redirect } from 'wouter';

import Home from '@/pages/Home';
import ScrollToTop from '@/components/ScrollToTop';

const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProgramsPage = lazy(() => import('@/pages/ProgramsPage'));
const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const AdmissionsPage = lazy(() => import('@/pages/AdmissionsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFound = lazy(() => import('@/pages/not-found'));
const Chatbot = lazy(() => import('@/components/Chatbot'));
const VoiceTourAgent = lazy(() => import('@/components/VoiceTourAgent'));

function LoadingFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" aria-label="Loading" />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutPage} />
      <Route path="/programs" component={ProgramsPage} />
      <Route path="/teachers" component={TeachersPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/admission" component={AdmissionsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={() => <Redirect to="/about-us" replace />} />
      <Route path="/admissions" component={() => <Redirect to="/admission" replace />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
        <VoiceTourAgent />
        <ScrollToTop />
        <Chatbot />
      </WouterRouter>
    </Suspense>
  );
}

export default App;
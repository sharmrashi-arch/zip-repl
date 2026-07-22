import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import TeachersPage from '@/pages/TeachersPage';
import GalleryPage from '@/pages/GalleryPage';
import ProgramsPage from '@/pages/ProgramsPage';
import AdmissionsPage from '@/pages/AdmissionsPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/programs" component={ProgramsPage} />
      <Route path="/teachers" component={TeachersPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;

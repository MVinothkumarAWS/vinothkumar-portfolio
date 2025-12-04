import { BrowserRouter } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  ErrorBoundary,
} from "./components";
import { config } from "./constants/config";

// Lazy load heavy 3D canvas components
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <ErrorBoundary
            fallback={
              <div className="absolute inset-0 z-[-1] h-auto w-full bg-primary" />
            }
          >
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

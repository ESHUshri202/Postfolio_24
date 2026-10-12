import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Loading from './components/Loading'

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const waitDuration = 450;
    const progressDuration = 3000;
    const startTime = performance.now();
    let animationFrame;
    let completionTimer;

    const updateProgress = (now) => {
      const elapsed = now - startTime - waitDuration;

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(updateProgress);
        return;
      }

      const nextProgress = Math.min(100, Math.floor((elapsed / progressDuration) * 100));
      setProgress(nextProgress);

      if (nextProgress === 100) {
        completionTimer = setTimeout(() => setLoading(false), 350);
        return;
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(completionTimer);
    };
  }, []);

  if (loading) {
    return <Loading progress={progress} />;
  }
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
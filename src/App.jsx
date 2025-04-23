import { useState, useEffect } from 'react';
import './App.css';
import IndexPage from './components/IndexPage/IndexPage';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This will handle the loading state
    // You can add your actual loading logic here if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <IndexPage />
      )}
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { router } from './routes/Route'
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/loader/Loader";
import { QueryClientProvider, QueryClient } from "react-query";



function App() {
  const [loading, setLoading] = useState(true);
  const [loadingC, setLoadingC] = useState(false);
  const queryClient = new QueryClient();
  useEffect(() => {
    const images = [

    ];

    cacheImages(images);
  }, [])

  const cacheImages = async (srcArr) => {
    const promises = await srcArr.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      })
    })
    await Promise.all(promises);
    setLoading(false);
  }


  return (
    <div className="">
      {loading ?
        (<Loader />) :
        (<QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>)
      }

    </div>
  );
}

export default App;

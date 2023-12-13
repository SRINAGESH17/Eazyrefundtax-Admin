import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useAuth } from "../stores/AuthContext";
import Loader from "../components/loader/Loader";
import AuthPage from "../pages/login/AuthPage";
import AdminPanelLayout from "../layouts/AdminPanelLayout";


const PrivateRoute = ({ component: Component }) => {
  const { currentUser, userRole } = useAuth();
  return (
    <>
      {currentUser && userRole?.admin ? (
        <Suspense fallback={<Loader />}>
          <Component />
        </Suspense>
      ) : (
        <Navigate to='/auth' replace />
      )}
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <Suspense fallback={<Loader />}>
        <AuthPage />
      </Suspense>
    ),
  
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <PrivateRoute component={AdminPanelLayout} />
      </Suspense>
    ),
    children: [
    
    ],
  },

]);

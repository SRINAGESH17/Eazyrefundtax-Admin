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

import Dashboard from "../components/adminPanel/Dashboard";
import AdminCreateEmployee from "../components/adminPanel/employee/AdminCreateEmployee";
import EmployeeList from "../components/adminPanel/employee/EmployeeList";

import EmployeePanel from "../components/adminPanel/employee/EmployeePanel";
import EmployeeDetails from "../components/adminPanel/employee/EmployeeDetails";
import PersonalDataInfo from "../components/adminPanel/employee/PersonalDataInfo";
import WorkData from "../components/adminPanel/employee/WorkData";
import AdminSubAdmin from "../components/adminPanel/AdminSubAdmin";

import UserCallData from "../components/adminPanel/callData/UserCallData";
import UploadCalls from "../components/adminPanel/callData/UploadCalls";

import CallLog from "../components/adminPanel/callData/CallLog";

import UploadedCalls from "../components/adminPanel/callData/UploadedCalls";
import ForeignerClients from "../components/adminPanel/callData/ForeignerClients";
import AssigningCalls from "../components/adminPanel/callData/AssigningCalls";
import MigratingCalls from "../components/adminPanel/callData/MigratingCalls";
import MigratingPendingCalls from "../components/adminPanel/callData/MigratingPendingCalls";

import ClientDocument from "../components/adminPanel/clientDocument/ClientDocument";
import TaxType from "../components/adminPanel/taxType/TaxType";
import InvoiceList from "../components/adminPanel/invoiceList/InvoiceList";

import RegisteredClients from "../components/adminPanel/registeredClients/RegisteredClients";
import Sms from "../components/adminPanel/sms/Sms";
import ReferalList from "../components/adminPanel/ReferalList";
import ForgotPassword from "../components/adminPanel/ForgotPassword";
import TaxYear from "../components/adminPanel/taxType/TaxYear";
import TaxYearDoc from "../components/adminPanel/taxType/TaxYearDoc";
import TaxYearReturn from "../components/adminPanel/taxType/TaxYearReturn";

const PrivateRoute = ({ component: Component }) => {
  const { currentUser, userRole } = useAuth();
  return (
    <>
      {currentUser && userRole?.admin ? (
        <Suspense fallback={<Loader />}>
          <Component />
        </Suspense>
      ) : (
        <Navigate to="/auth" replace />
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
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={Dashboard} />
          </Suspense>
        ),
      },

      {
        path: "employee",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={EmployeePanel} />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense>
                <PrivateRoute component={EmployeeList} />
              </Suspense>
            ),
          },
          {
            path: "create",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={AdminCreateEmployee} />
              </Suspense>
            ),
          },

          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={EmployeeDetails} />
              </Suspense>
            ),

            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loader />}>
                    <PrivateRoute component={PersonalDataInfo} />
                  </Suspense>
                ),
              },
              {
                path: "workData",
                element: (
                  <Suspense fallback={<Loader />}>
                    <PrivateRoute component={WorkData} />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },

      {
        path: "sub-admin",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={AdminSubAdmin} />
          </Suspense>
        ),
      },

      {
        path: "call-log",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={UserCallData} />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={UploadCalls} />
              </Suspense>
            ),
          },
          {
            path: "callData",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={CallLog} />
              </Suspense>
            ),
          },
          {
            path: "uploadedCalls",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={UploadedCalls} />
              </Suspense>
            ),
          },
          {
            path: "foreignerClients",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={ForeignerClients} />
              </Suspense>
            ),
          },
          {
            path: "assigningCalls",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={AssigningCalls} />
              </Suspense>
            ),
          },
          {
            path: "migratingCalls",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={MigratingCalls} />
              </Suspense>
            ),
          },
          {
            path: "migratingPendingCalls",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={MigratingPendingCalls} />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "client-document",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={ClientDocument} />
          </Suspense>
        ),
      },
      {
        path: "tax-type",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={TaxType} />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={TaxYear} />
              </Suspense>
            ),
          },
          {
            path: "year-doc",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={TaxYearDoc} />
              </Suspense>
            ),
          },
          {
            path: "year-return",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivateRoute component={TaxYearReturn} />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "invoice-list",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={InvoiceList} />
          </Suspense>
        ),
      },
      {
        path: "registered-clients",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={RegisteredClients} />
          </Suspense>
        ),
      },
      {
        path: "sms",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={Sms} />
          </Suspense>
        ),
      },
      {
        path: "referal-list",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={ReferalList} />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateRoute component={ForgotPassword} />
          </Suspense>
        ),
      },
    ],
  },
]);

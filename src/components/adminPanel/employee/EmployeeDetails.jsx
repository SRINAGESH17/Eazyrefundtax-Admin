import { useState, useEffect } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";

import Stepper from "./Stepper";

const EmployeeDetails = () => {


  const { id } = useParams();



  const [employeeDetails, setEmployeeDetails] = useState({});

  const { getAccessToken } = useAuth();

  const fetchEmployeeDetails = async () => {
    const token = await getAccessToken();

    console.log(id);

    const url = AdminAuthorURL.employee.getEmployeeById(id);

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, options);

    console.log(response);

    if (response.ok) {
      const responseData = await response.json();

      const data = responseData.response;

      setEmployeeDetails(data);

      console.log(data);
    }

    console.log("token received in employee detaild", token);
  };

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  return (
    <div
      // style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      className='flex flex-col lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow pb-[4rem] lg:pb-[8rem]  '>
      <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem] py-[1rem] lg:px-[1.2rem] lg:py-[2.5rem]'>
        Employee Detail’s
      </h1>

      <div className='flex flex-col gap-[1.5rem] lg:gap-[2.5rem]'>
        <Stepper />

        <Outlet context={[employeeDetails]} />
      </div>
    </div>
  );
};

export default EmployeeDetails;

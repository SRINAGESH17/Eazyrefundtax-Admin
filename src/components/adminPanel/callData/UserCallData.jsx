import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import CallDataStepper from "./CallDataStepper";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";
import { useAuth } from "../../../stores/AuthContext";

const UserCallData = () => {
  const [activeCallersData, setActiveCallersData] = useState([]);

  const { getAccessToken } = useAuth();

  const fetchActiveCallersData = async () => {
    try {
      console.log("effect called");
      const token = await getAccessToken();

      const url = AdminAuthorURL.callData.fetchActiveCallers;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      setActiveCallersData(responseData.response);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchActiveCallersData();
  }, []);

  console.log(activeCallersData);
  return (
    <div className='font-lato m-[1.2rem] lg:m-[2.5rem] bg-[#FAFAFA]'>
      <div className=' flex flex-col gap-[1rem] lg:gap-[2.5rem] lg:shadow-shadow '>
        <CallDataStepper />
        <Outlet context={[activeCallersData]} />
      </div>
    </div>
  );
};

export default UserCallData;

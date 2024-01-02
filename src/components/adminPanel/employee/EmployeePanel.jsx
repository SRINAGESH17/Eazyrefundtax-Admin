import { Outlet } from "react-router-dom";

import employeeProfile from "../../../assets/employeeProfile.png";

const sampleData = [
  {
    id: 1,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Caller",
    status: "active",
  },
  {
    id: 2,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Caller",
    status: "active",
  },
  {
    id: 3,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "active",
  },
  {
    id: 4,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 5,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 6,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 7,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 8,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 9,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 10,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 11,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
  {
    id: 13,
    employeeId: "12345",
    image: employeeProfile,
    name: "Manikanta Putta",
    email: "manikantaputta@gmail.com",
    phoneNumber: "9876543210",
    role: "Preparer",
    status: "inActive",
  },
];

const EmployeePanel = () => {
  return (
    <div className='font-lato p-[1.2rem] lg:p-[2.5rem] bg-[#FAFAFA]  '>
      <Outlet context={[sampleData]} />
    </div>
  );
};

export default EmployeePanel;

import { useState } from "react";
import { Icon } from "@iconify/react";
import DataTable from "react-data-table-component";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Defs,
  LinearGradient,
  Stop,
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    value: 100,
  },
  {
    name: "Febrauary",
    value: 22,
  },
  {
    name: "March",
    value: 33,
  },
  {
    name: "April",
    value: 34,
  },
  {
    name: "May",
    value: 44,
  },
  {
    name: "June",
    value: 83,
  },
  {
    name: "July",
    value: 33,
  },
  {
    name: "August",
    value: 65,
  },
  {
    name: "September",
    value: 11,
  },
  {
    name: "October",
    value: 11,
  },
  {
    name: "November",
    value: 53,
  },
  {
    name: "December",
    value: 43,
  },
];

const data4 = [
  {
    status: "Interested",
    value: 1000,
    color: "linear-gradient(225deg, #C5090A 0%, #EE3C3D 100%)",
    chartColor: "#C5090A",
  },

  {
    status: "Voice Mail",
    value: 500,
    color: "linear-gradient(180deg, #ED3A3A 0%, rgba(237, 58, 58, 0.76) 100%)",
    chartColor: "#ED3A3A",
  },
  {
    status: "Not Interested",
    value: 400,
    color: " linear-gradient(222deg, #00C041 3.25%, #4EF687 95.1%)",
    chartColor: "#00C041",
  },
  {
    status: "Pending",
    value: 100,
    color: "linear-gradient(45deg, #006CEC 0%, rgba(0, 0, 0, 0.76) 100%)",
    chartColor: "#2F80ED",
  },
  {
    status: "Self",
    value: 120,
    color: "linear-gradient(253deg, #2F80ED 16.51%, #4FBAF0 84.53%)",
    chartColor: "#12427A",
  },
  {
    status: "Others",
    value: 28,
    color: "linear-gradient(40deg, #16BFD6 30.62%, #47E9FF 86.32%)",
    chartColor: "#16BFD6",
  },
];

const Card = ({ text, label }) => {
  return (
    <div
      className='bg-[#fff] rounded-[0.7rem] py-[0.5rem] px-[1rem] lg:py-[1rem] lg:px-[1.5rem] flex flex-col gap-[0.5rem] lg:gap-[1rem]'
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}>
      <div className='flex flex-row justify-between items-center '>
        <h2 className='text-[0.7rem] lg:text-[0.8rem] text-[#1A1616] font-[400]'>
          {label}
        </h2>
        <button>
          <Icon icon='mdi:dots-vertical' className='text-[#8888A3]' />
        </button>
      </div>
      <h1 className='text-[1rem] lg:text-[1.5rem] text-[#1A1616] font-[600]'>
        {text}
      </h1>
    </div>
  );
};

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className='grid grid-cols-2 gap-y-[1rem] gap-x-[1rem] lg:gap-x-[2.5rem] w-full mt-4 '>
      {data4.map((entry, index) => (
        <li
          className='flex flex-row items-center justify-between text-[1rem] font-[500] text-[#1A1616]'
          key={`item-${index}`}>
          <div className='flex flex-row items-center gap-[0.5rem]'>
            <div
              className='h-[1.5rem] w-[1.5rem] rounded-[4px]'
              style={{
                background: entry.color,
              }}></div>
            <p> {entry.status}</p>
          </div>

          <p>{entry.value}</p>
        </li>
      ))}
    </ul>
  );
};

const columns = [
  {
    name: "Sl. No",
    cell: (row, index) => index + 1,
  },
  {
    name: "Unique Id",
    id: "id",
    selector: (row) => row.id,

    width: "120px",
  },
  {
    name: "Clients Name",
    cell: (row) => (
      <div className='flex flex-row items-center gap-[1rem]'>
        <img src={row.photo} className={"h-[3rem] w-[3rem] rounded-full"} />
        <p>{row.name}</p>
      </div>
    ),
    width: "270px",
  },
  {
    name: "Client Contact Information",
    cell: (row) => (
      <div className='flex flex-col gap-[0.2rem]'>
        <p>{row.email}</p>
        <p>{row.mobileNumber}</p>
      </div>
    ),
    width: "300px",
  },
  {
    name: "State",
    id: "state",
    selector: (row) => row.state,
    width: "200px",
  },
  {
    name: "Zip Code",
    id: "zipCode",
    selector: (row) => row.zipCode,
    width: "200px",
  },
  {
    name: "Pin code",
    id: "zipCode",
    selector: (row) => row.zipCode,
  },
  {
    name: "Time",
    id: "time",
    selector: (row) => row.time,
    width: "190px",
  },
  {
    name: "Action",
    center: true,
    cell: (row) => (
      <div className={`flex flex-row items-center gap-[1rem]`}>
        <button
          style={{ border: "0.727px solid #D9D9D9" }}
          className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
          <Icon icon='mdi:eye' />
        </button>
      </div>
    ),
  },
];

const sampleData = [
  {
    id: "12345",
    photo:
      "https://res.cloudinary.com/deh78ntmd/image/upload/v1701422532/Ellipse_7_g4gufb.png",
    name: "Manikanta Putta",
    email: "maniputtam@gmail.com",
    mobileNumber: "+919669696969",
    state: "Andhra Pradesh",
    zipCode: "500001",
    time: "Today at 10 AM",
  },
  {
    id: "12345",
    photo:
      "https://res.cloudinary.com/deh78ntmd/image/upload/v1701422532/Ellipse_7_g4gufb.png",
    name: "Manikanta Putta",
    email: "maniputtam@gmail.com",
    mobileNumber: "+919669696969",
    state: "Andhra Pradesh",
    zipCode: "500001",
    time: "Today at 10 AM",
  },
  {
    id: "12345",
    photo:
      "https://res.cloudinary.com/deh78ntmd/image/upload/v1701422532/Ellipse_7_g4gufb.png",
    name: "Manikanta Putta",
    email: "maniputtam@gmail.com",
    mobileNumber: "+919669696969",
    state: "Andhra Pradesh",
    zipCode: "500001",
    time: "Today at 10 AM",
  },
  {
    id: "12345",
    photo:
      "https://res.cloudinary.com/deh78ntmd/image/upload/v1701422532/Ellipse_7_g4gufb.png",
    name: "Manikanta Putta",
    email: "maniputtam@gmail.com",
    mobileNumber: "+919669696969",
    state: "Andhra Pradesh",
    zipCode: "500001",
    time: "Today at 10 AM",
  },
  {
    id: "12345",
    photo:
      "https://res.cloudinary.com/deh78ntmd/image/upload/v1701422532/Ellipse_7_g4gufb.png",
    name: "Manikanta Putta",
    email: "maniputtam@gmail.com",
    mobileNumber: "+919669696969",
    state: "Andhra Pradesh",
    zipCode: "500001",
    time: "Today at 10 AM",
  },
];

const customStyles = {
  headRow: {
    style: {
      fontWeight: "600",
      padding: "10px 20px",
      color: "#1A1616",
      fontFamily: "Amulya",
    },
  },
  head: {
    style: {
      borderRadius: "6px 6px 0px 0px",
      borderBottom: "1px solid #D1D4D7",
      background: "#FFF",

      fontSize: "12px",
      lineHeight: "18px",
    },
  },

  rows: {
    style: {
      borderRadius: "6px 6px 0px 0px",
      borderBottom: "1px solid #D1D4D7",
      background: "#FFF",
      color: "#8888A3",
      fontFamily: "Amulya",
      fontWeight: "400",

      padding: "10px 20px",
      fontSize: "16px",
    },
  },
  pagination: {
    style: {
      boxShadow: "10px 5px 5px #ddd",
      marginBottom: "5px",
    },
  },
  table: {
    style: {
      overflow: "visible",
      minWidth: "1100px",
    },
  },
  tableWrapper: {
    style: {
      overflow: "visible",
    },
  },
  responsiveWrapper: {
    style: {
      overflowX: "auto", // table scroll on x axis
      // for showing shadow
    },
  },
};

const Dashboard = () => {
  return (
    <div className='font-lato p-[1.2rem] lg:p-[2.5rem] bg-[#FAFAFA]'>
      <div className='bg-[#FFF] lg:rounded-[0.5rem] lg:shadow-shadow  lg:p-[2rem] flex flex-col gap-[1rem] lg:gap-[2.5rem] '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] lg:gap-[2rem] lg:pr-[4.5rem]'>
          <Card label={"Total Employee’s"} text={100} />
          <Card label={"Upload File"} text={50} />
          <Card label={"Registered Clients"} text={650} />
          <Card label={"Employee Calls"} text={2530} />
        </div>

        <div className='flex flex-col gap-[1rem] xl:flex-row xl:items-center lg:gap-[2.5rem]'>
          <div className='py-[1rem]  lg:py-[2rem] px-[1.5rem] lg:px-[2.6rem]  border border-solid border-[#D1D4D7] rounded-[0.5rem] w-full xl:w-[60%] flex flex-col gap-3 lg:gap-4'>
            <h2 className='text-[#1A1616] text-[1rem] lg:text-[1.2rem] font-[700]'>
              Client Report
            </h2>

            <div className='w-auto overflow-x-auto'>
              <BarChart
                className='font-lato text-[#D1D4D7] text-[0.6rem] font-[400] ml-[-1.8rem]'
                width={800}
                height={250}
                data={data}>
                <defs>
                  <linearGradient
                    id='myGradient'
                    x1='0%'
                    y1='0%'
                    x2='130%'
                    y2='140%'>
                    <stop offset='-63.56%' style={{ stopColor: "#C5090A" }} />
                    <stop offset='158.3%' style={{ stopColor: "#E1D6D5" }} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey='name'
                  style={{ color: "#D1D4D7" }}
                  strokeWidth={0}
                  stroke='#D1D4D7'
                />
                <YAxis style={{ color: "#D1D4D7" }} stroke='#D1D4D7' />
                <Bar
                  barSize={14}
                  dataKey='value'
                  style={{ borderRadius: "44.672px 0px" }}
                  className={`rounded-t-[44.672px]`}
                  fill='url(#myGradient)'
                  radius={[44.672, 44.672, 0, 0]}
                />
              </BarChart>
            </div>
          </div>
          <div className='py-[0.7rem]    px-[0.9rem]  border border-solid border-[#D1D4D7] rounded-[0.5rem] w-full xl:w-[40%] flex flex-col gap-3 lg:gap-[2rem]'>
            <h2 className='text-[#1A1616] text-[1rem] lg:text-[1.2rem] font-[500]'>
              Call Data
            </h2>

            <div className='w-full overflow-x-auto box-content'>
              <ResponsiveContainer width='100%' height={300}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={data4}
                    cx='50%'
                    cy='50%'
                    innerRadius={0}
                    outerRadius={75}
                    dataKey='value'>
                    {data4.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.chartColor} />
                    ))}
                  </Pie>

                  <Legend content={renderLegend} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div>
          <DataTable
            columns={columns}
            data={sampleData}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

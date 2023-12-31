import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import CustomPagination from "../../../helpers/CustomPagination";

import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";

const columns = [
  {
    name: "Call Slot Type",

    selector: (row) => row._id,
  },
  {
    name: "Slot Total Calls",
    id: "totalCalls",
    selector: (row) => row.totalCalls,
  },
  {
    name: "Assigned Calls",
    id: "assignedCalls",
    selector: (row) => row.assignedCalls,
  },
  {
    name: "Unassigned Calls",
    id: "unassignedCalls",
    center: true,

    selector: (row) => row.unassignedCalls,
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
      borderLeft: "1px solid #D1D4D7",
      borderRight: "1px solid #D1D4D7",
      background: "#FFF",
      color: "#8888A3",
      fontFamily: "Amulya",
      fontWeight: "400",

      padding: "10px 20px",
      fontSize: "14px",
      borderRadius: "0px",
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

const employeeCustomStyles = {
  headRow: {
    style: {
      fontWeight: "600",
      // padding: "0px 20px",
      color: "#1A1616",
      fontFamily: "Amulya",
      background: "#c50a0a1a",
      borderRadius: "0px",
    },
  },
  head: {
    style: {
      borderRadius: "6px 6px 0px 0px",

      borderRight: "0px",

      fontSize: "12px",
      lineHeight: "18px",
      textAlign: "center",
    },
  },

  headCells: {
    style: {
      borderTop: "1.011px solid var(--Global-Colors-Stroke, #D1D4D7)",
      borderBottom: "1.011px solid var(--Global-Colors-Stroke, #D1D4D7)",
      borderLeft: "1.011px solid var(--Global-Colors-Stroke, #D1D4D7)",
    },
  },

  rows: {
    style: {
      borderRadius: "6px 6px 0px 0px",
      borderBottom: "1px solid #D1D4D7",

      borderRight: "0px",
      background: "#FFF",
      color: "#8888A3",
      fontFamily: "Amulya",
      fontWeight: "400",

      padding: "10px 20px",
      fontSize: "14px",
      borderRadius: "0px",
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
const sampleData = [
  {
    slotType: "5L",
    totalCalls: "9999",
    assignedCalls: "9999",
    unassignedCalls: "0",
  },
  {
    slotType: "F1",
    totalCalls: "4999",
    assignedCalls: "4999",
    unassignedCalls: "0",
  },
  {
    slotType: "First data",
    totalCalls: "6905",
    assignedCalls: "6900",
    unassignedCalls: "0",
  },
  {
    slotType: "LAST 50",
    totalCalls: "13583",
    assignedCalls: "991358399",
    unassignedCalls: "0",
  },
  {
    slotType: "MEGA",
    totalCalls: "14958",
    assignedCalls: "14958",
    unassignedCalls: "0",
  },
  {
    slotType: "MEGA 5K",
    totalCalls: "5000",
    assignedCalls: "5000",
    unassignedCalls: "0",
  },
  {
    slotType: "LAST 50",
    totalCalls: "13583",
    assignedCalls: "991358399",
    unassignedCalls: "0",
  },
  {
    slotType: "TIRU 1",
    totalCalls: "2216",
    assignedCalls: "2216",
    unassignedCalls: "0",
  },
  {
    slotType: "Total Calls",
    totalCalls: "57655",
    assignedCalls: "57650",
    unassignedCalls: "0",
  },
];

const employeeColumns = [
  {
    name: "Employee Id",
    cell: (row, index) => <p>{index + 1}</p>,
    width: "200px",
    center: true,
  },
  {
    name: "Employee Name",
    id: "employeeName",
    selector: (row, index) => row.employeeName,
    center: true,
  },
  {
    name: "Assigned Calls",
    center: true,
    cell: (row) => {
      const { assignedCalls } = row;

      return (
        <div className='flex flex-col gap-[1rem]'>
          <h2 className='text-[0.8rem] text-[#1A1616] font-[600]'>
            Total - {row.totalCalls}
          </h2>
          {assignedCalls.map((call) => (
            <p className='text-[#8888A3] text-[0.8rem] font-[500] '>
              {call.fileName} - {call.data}
            </p>
          ))}
        </div>
      );
    },
  },
  {
    name: (
      <p style={{ border: "none !important" }} className=''>
        Status
      </p>
    ),
    center: true,
    style: { border: "none" },

    cell: (row) => (
      <div className='flex flex-col gap-[1rem]'>
        <p className='text-[0.8rem] text-[#8888A3] font-[500]'>
          Non Contacted-{row.nonContacted}
        </p>
        <p className='text-[0.8rem] text-[#8888A3] font-[500]'>
          Non Contacted-{row.nonContacted}
        </p>
      </div>
    ),
  },
];

const employeeSampleData = [
  {
    employeeName: "Manikanta Putta",
    totalCalls: 3500,
    assignedCalls: [
      {
        fileName: "Al",
        data: 300,
      },
      {
        fileName: "Al",
        data: 300,
      },
      {
        fileName: "Al",
        data: 300,
      },
    ],

    nonContacted: 29,
    wrongNumber: 30,
  },
  {
    employeeName: "Manikanta Putta",
    totalCalls: 3500,
    assignedCalls: [
      {
        fileName: "Al",
        data: 300,
      },
      {
        fileName: "Al",
        data: 300,
      },
      {
        fileName: "Al",
        data: 300,
      },
    ],

    nonContacted: 29,
    wrongNumber: 30,
  },
  {
    employeeName: "Manikanta Putta",
    totalCalls: 3500,
    assignedCalls: [
      {
        fileName: "Al",
        data: 300,
      },
      {
        fileName: "Al",
        data: 300,
      },
      {
        fileName: "Al",
        data: 300,
      },
    ],

    nonContacted: 29,
    wrongNumber: 30,
  },
];

const CallLog = () => {
  const { getAccessToken } = useAuth();

  const [callDataSlotWise, setCallDataSlotWise] = useState([]);

  const [callDataEmployeeWise, setCallDataEmployeeWise] = useState([]);

  const fetchCallDataBySlot = async () => {
    try {
      const token = await getAccessToken();

      const url = AdminAuthorURL.callData.fetchCallDataBySlot;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseData = await response.json();
      setCallDataSlotWise(responseData.response);

      console.log(response, "call data slot wise fetched");
      console.log(responseData, "call data-slot received");
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCallDataByEmployee = async () => {
    try {
      const token = await getAccessToken();

      const url = AdminAuthorURL.callData.fetchCallDataByEmployee;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseData = await response.json();

      console.log(response, "call data employee wise fetched");
      console.log(responseData, "call data received");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCallDataBySlot();

    fetchCallDataByEmployee();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-[1rem] lg:gap-[2.5rem]'>
        <div className='lg:px-[2.5rem]'>
          <DataTable
            columns={columns}
            data={callDataSlotWise}
            customStyles={customStyles}
          />
        </div>

        <DataTable
          columns={employeeColumns}
          data={employeeSampleData}
          customStyles={employeeCustomStyles}
        />
      </div>
    </div>
  );
};

export default CallLog;

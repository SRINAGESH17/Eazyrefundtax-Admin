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


const employeeColumns = [
  {
    name: "S.No.",
    cell: (row, index) => <p>{index + 1}</p>,
    width: "200px",
    center: true,
  },
  {
    name: "Employee Name",
    id: "employeeName",
    cell: (row, index) => {
      return (
        <div className="flex flex-col gap-[0.5rem] items-center">
          <p>{row.employeeName}</p>
          <p>{row.employeeId}</p>
        </div>
      )
    },
    center: true,
  },
  {
    name: "Assigned Calls",
    center: true,
    cell: (row) => {
      const { slotWiseCounts } = row;

      return (
        <div className='flex flex-col gap-[1rem] items-start'>
          <h2 className='text-[0.8rem] text-[#1A1616] font-[600]'>
            Total - {row.totalAssignedCalls}
          </h2>
          {slotWiseCounts.map((call) => (
            <p className='text-[#8888A3] text-[0.8rem] font-[500] '>
              {call.slotName} - {call.count}
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
      <div className='flex flex-col gap-[1rem] items-start'>
        {row.statusWiseCounts.map((call) => (
            <p className='text-[#8888A3] text-[0.8rem] font-[500] '>
              {call.status} - {call.count}
            </p>
          ))}
      </div>
    ),
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
      if(!response.ok){
        throw new Error(responseData.message)
      }
      setCallDataEmployeeWise(responseData.response)

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
          data={callDataEmployeeWise}
          customStyles={employeeCustomStyles}
        />
      </div>
    </div>
  );
};

export default CallLog;

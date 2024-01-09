import React from "react";
import DataTable from "react-data-table-component";
import eyeIcon from "../../../assets/mdi_eye.svg";

function PendingClient() {
  const columns = [
    {
      name: "SL No.",
      cell: (row, index) => index + 1,
      center: true,
    },
    {
      name: "Client Id",
      id: "slotType",
      selector: (row) => row.clientId,
      grow: 1,
    },
    {
      name: "CLients Name",
      id: "clientsName",
      selector: (row) => row.clientName,
      grow: 2,
    },
    {
      name: "Client Contact Information",
      id: "clientContactInfo",
      selector: (row) => row.clientContactInfo,
      grow: 3,
    },
    {
      name: "State",
      id: "state",
      center: true,
      grow: 1,
      selector: (row) => row.state,
    },
    {
      name: "Zip Code",
      id: "zipCode",
      selector: (row) => row.zipCode,
      grow: 1,
    },
    {
      name: "Time",
      id: "time",
      selector: (row) => row.time,
      grow: 1,
    },
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <div>
          <button
            style={{ border: "0.727px solid #D9D9D9" }}
            className="bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.5rem]"
          >
            <img src={eyeIcon} alt="" />
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        fontWeight: "600",
        padding: "10px 20px",
        color: "#1A1616",
        fontFamily: "amulya_bold",
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
        // borderLeft: "1px solid #D1D4D7",
        // borderRight: "1px solid #D1D4D7",
        background: "#FFF",
        color: "#8888A3",
        fontFamily: "amulya_light",
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
        minWidth: "1000px",
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
  ];

  return (
    <div className="flex flex-col mt-1">
      <div className="flex lg:mr-2 lg:justify-end pt-3 pr-2">
        <div className="w-full lg:w-[40%] flex flex-row h-[2.5rem]">
          <input
            placeholder="Search by Name or Phone or Email"
            type="text"
            className="flex-1 h-full  outline-none border-r-0 border-[0.5px] border-solid border-[#D1D4D7] rounded-s-[0.5rem] px-[0.5rem] text-[0.7rem] font-[500] text-[#8888A3] placeholder-[#8888A3]"
          />
          <button className="bg-[#C5090A] rounded-e-[0.5rem] px-[1.2rem] text-white text-[0.7rem] font-[500]">
            Search
          </button>
        </div>
      </div>
      <div className="flex lg:px-10">
        <DataTable
          columns={columns}
          data={sampleData}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default PendingClient;

import React from "react";
import DataTable from "react-data-table-component";

function TaxYearDoc() {
  const columns = [
    {
      name: "Call Slot Type",
      id: "slotType",
      selector: (row) => row.slotType,
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
        padding: "0px 20px",
        color: "#1A1616",
        fontFamily: "Amulya",
        background: "#c50a0a1a",
        borderRadius: "0px",
      },
    },
    head: {
      style: {
        borderRadius: "6px 6px 0px 0px",
        border: "1px solid #D1D4D7",
        borderRight: "0px",

        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
      },
    },

    headCells: {
      style: {},
    },

    rows: {
      style: {
        borderRadius: "6px 6px 0px 0px",
        borderBottom: "1px solid #D1D4D7",
        borderLeft: "1px solid #D1D4D7",
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
  ];

  return (
    <div className="flex">
      <DataTable
        columns={columns}
        data={sampleData}
        customStyles={customStyles}
      />
    </div>
  );
}

export default TaxYearDoc;

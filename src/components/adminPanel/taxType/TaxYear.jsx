import React from "react";
import DataTable from "react-data-table-component";

function TaxYear() {
  const columns = [
    {
      name: "Call Slot Type",
      id: "slotType",
      selector: (row) => row.slotType,
      grow: 4,
    },
    {
      name: "Slot Total Calls",
      id: "totalCalls",
      selector: (row) => row.totalCalls,
      grow: 1,
    },
    {
      name: "Assigned Calls",
      id: "assignedCalls",
      selector: (row) => row.assignedCalls,
      grow: 1,
    },
    {
      name: "Unassigned Calls",
      id: "unassignedCalls",
      center: true,
      grow: 1,
      selector: (row) => row.unassignedCalls,
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
        borderLeft: "1px solid #D1D4D7",
        borderRight: "1px solid #D1D4D7",
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
        // minWidth: "1100px",
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
    // {
    //   slotType: "F1",
    //   totalCalls: "4999",
    //   assignedCalls: "4999",
    //   unassignedCalls: "0",
    // },
    // {
    //   slotType: "First data",
    //   totalCalls: "6905",
    //   assignedCalls: "6900",
    //   unassignedCalls: "0",
    // },
    // {
    //   slotType: "LAST 50",
    //   totalCalls: "13583",
    //   assignedCalls: "991358399",
    //   unassignedCalls: "0",
    // },
    // {
    //   slotType: "MEGA",
    //   totalCalls: "14958",
    //   assignedCalls: "14958",
    //   unassignedCalls: "0",
    // },
    // {
    //   slotType: "MEGA 5K",
    //   totalCalls: "5000",
    //   assignedCalls: "5000",
    //   unassignedCalls: "0",
    // },
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

export default TaxYear;

import { useOutletContext } from "react-router-dom";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "SL",
    cell: (row, index) => index + 1,
    center: true,
    width: "100px",
  },
  {
    name: "Slot Name",
    id: "slotName",
    selector: (row) => row.slotName,
    center: true,
  },
  {
    name: "Assigned Calls",
    id: "assignedCalls",
    selector: (row) => row.assignedCalls,
    center: true,
  },
  {
    name: "Completed Calls",
    id: "completedCalls",
    selector: (row) => row.completedCalls,
    center: true,
  },
  {
    name: "Remailing Calls",
    id: "remainingCalls",
    selector: (row) => row.remainingCalls,
    center: true,
  },
];

const sampleData = [
  {
    slotName: "5L",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
  },
  {
    slotName: "F1 D",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
  },
  {
    slotName: "First data",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
  },
  {
    slotName: "LAST 50",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
  },
  {
    slotName: "MEGA",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
  },
  {
    slotName: "MEGA 5K",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
  },
  {
    slotName: "TIRU 1",
    assignedCalls: 0,
    completedCalls: 1,
    remainingCalls: 1,
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

const WorkData = () => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={sampleData}
        customStyles={customStyles}
      />
    </div>
  );
};

export default WorkData;

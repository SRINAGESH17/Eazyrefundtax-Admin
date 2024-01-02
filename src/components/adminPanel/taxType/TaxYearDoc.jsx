import React from "react";
import DataTable from "react-data-table-component";
import { Select, Option } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

function TaxYearDoc() {
  const theme = {
    select: {
      styles: {
        base: {
          container: {
            position: "relative",
            marginTop: "mt-4",
          },
        },
        variants: {
          outlined: {
            colors: {
              select: {
                red: {
                  close: {
                    borderColor: "border-blue-gray-200",
                  },
                  open: {
                    borderColor: "border-[#C5090A]",
                    borderTopColor: "border-t-transparent",
                  },
                  withValue: {
                    borderColor: "border-blue-gray-200",
                    borderTopColor: "border-t-transparent",
                  },
                },
              },
              label: {
                red: {
                  close: {
                    color: "text-blue-gray-400",
                    before: "before:border-transparent",
                    after: "after:border-transparent",
                  },
                  open: {
                    color: "text-blue-gray-500",
                    before: "before:border-[#C5090A]",
                    after: "after:border-[#C5090A]",
                  },
                  withValue: {
                    color: "text-blue-gray-400",
                    before: "before:border-blue-gray-200",
                    after: "after:border-blue-gray-200",
                  },
                },
              },
            },
          },
        },
      },
    },
  };

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
  ];

  return (
    <ThemeProvider value={theme}>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg:pr-11 lg:h-28 h-48 justify-between mt-5 pl-10">
          <div className="flex flex-col lg:w-[48%]">
            <span className="text-base font-amulya_bold text-[#1A1616]">
              Select tax year
            </span>
            <Select variant="outlined" label="Select Employee" color="red">
              <Option>Employee Type 1</Option>
              <Option>Employee Type 2</Option>
              <Option>Employee Type 3</Option>
              <Option>Employee Type 4</Option>
              <Option>Employee Type 5</Option>
            </Select>
          </div>
          <div className="flex flex-col lg:w-[48%]">
            <span className="text-base font-amulya_bold text-[#1A1616]">
              Tax Document Type Name
              <span className="text-[#C5090A]">*</span>
            </span>
            <div className="flex border-[#D1D4D7] border-[1px] justify-between items-center rounded-md px-6 py-2 mt-4">
              <input type="text" className="outline-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:justify-end justify-center mt-5 pr-11 mb-5">
          <button className="rounded-lg py-2 px-9 text-white text-sm font-amulya_bold bg-[#C5090A] cursor-pointer hover:bg-[#853131]">
            Update
          </button>
        </div>

        <div className="flex mt-1 lg:px-10">
          <DataTable
            columns={columns}
            data={sampleData}
            customStyles={customStyles}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TaxYearDoc;
// import { Outlet } from "react-router-dom";
import ContentBox from "../../../helpers/ContentBox";
import { Icon } from "@iconify/react";
import DataTable from "react-data-table-component";
import CustomPagination from "../../../helpers/CustomPagination";
import CustomCheckbox from "../../../helpers/CustomCheckbox";
import DeleteClient from "./DeleteClient";
import { useState, useEffect } from "react";

const RegisteredClients = () => {
  const [showPopup, setShowPopup] = useState(false);

  const delClientPopup = (row) => {
    console.log("clicked");
    setShowPopup((prev) => !prev);
  };

  const closePopUp = (val) => {
    setShowPopup(val);
  };
  console.log(showPopup);

  const columns = [
    {
      name: "SL",
      cell: (row, index) => index + 1,
    },
    {
      name: "Call ID",
      id: "callId",
      selector: (row) => row.callId,
    },
    {
      name: "Slot Name",
      id: "slotName",
      selector: (row) => row.slotName,
    },
    {
      name: "Caller Name",
      cell: (row) => (
        <div className="flex flex-row items-center gap-[1rem]">
          <img src={row.image} className={"h-[3rem] w-[3rem] rounded-full"} />
          <p>{row.name}</p>
        </div>
      ),
      width: "270px",
    },
    {
      name: "Caller Contact Information",
      cell: (row) => (
        <div className="flex flex-col gap-[0.2rem]">
          <p>{row.email}</p>
          <p>{row.phoneNumber}</p>
        </div>
      ),
      width: "300px",
    },
    {
      name: "Call Comment",
      id: "callComment",
      selector: (row) => row.callComment,
      width: "130px",
    },
    {
      name: "Employee",
      id: "status",
      cell: (row) => (
        <div className="rounded-[4px] flex flex-row items-center border border-solid border-[#D1D4D7] h-[1.9rem] pr-[0.8rem] w-[48%] lg:w-[55%]">
          <select className="border-none outline-none text-[#8888A3] text-[0.6rem] px-[0.8rem]">
            <option>Bulk Action</option>
            <option>Single</option>
          </select>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "209px",
    },
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <div>
          <button
            onClick={delClientPopup}
            style={{ border: "0.727px solid #D9D9D9" }}
            className="bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]"
          >
            <Icon icon="material-symbols:delete-rounded" />
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
        fontSize: "14px",
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
      callId: "12345",
      slotName: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
    {
      callId: "12345",
      slotName: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
    {
      callId: "12345",
      slotName: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
    {
      callId: "12345",
      slotName: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },

    {
      callId: "12345",
      slotName: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
  ];

  return (
    <ContentBox>
      <div className="flex flex-col">
        <div className="flex w-full justify-between">
          <p className="font-amulya_bold text-base">Registered Clients</p>
          <button className="rounded-2xl px-5 py-1 font-amulya_medium text-sm text-[#FFF] bg-[#C5090A] lg:hidden">
            Download
          </button>
        </div>

        <div className="flex flex-col mt-4 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex lg:order-2 lg:mr-2">
            <div className="w-full flex flex-row h-[2.5rem] md:w-[20rem]">
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

          <div className="flex mt-5 justify-between lg:mt-0  lg:order-1 lg:mr-2 ">
            <button className="rounded-[4px] flex flex-row items-center gap-[0.5rem] border border-solid border-[#D1D4D7] h-[1.9rem] px-[0.8rem] text-[#8888A3] w-[48%] lg:mr-2">
              <Icon icon="lucide:filter" className="text-[1rem]" />
              <span className="text-[0.6rem]">Filter</span>
            </button>

            <div className="rounded-[4px] flex flex-row items-center border border-solid border-[#D1D4D7] h-[1.9rem] pr-[0.8rem] w-[48%] lg:w-[55%]">
              <select className="border-none outline-none text-[#8888A3] text-[0.6rem] px-[0.8rem]">
                <option>Bulk Action</option>
                <option>Single</option>
              </select>
            </div>
          </div>
          <button className="hidden rounded-2xl px-5 py-1 font-amulya_medium text-sm text-[#FFF] bg-[#C5090A] lg:block order-3">
            Download
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <DataTable
          columns={columns}
          data={sampleData}
          customStyles={customStyles}
          pagination
          paginationComponent={CustomPagination}
          selectableRows
          selectableRowsComponent={CustomCheckbox}
        />
      </div>
      {showPopup ? <DeleteClient closeClientPopUp={closePopUp} /> : ""}
    </ContentBox>
  );
};

export default RegisteredClients;

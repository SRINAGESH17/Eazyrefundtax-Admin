import React from "react";
import ContentBox from "../../../helpers/ContentBox";
import greenDotIcon from "../../../assets/Ellipse 9.svg";
import { Link } from "react-router-dom";
import calenderIcon from "../../../assets/material-symbols_date-range-outline.svg";
import profilePic from "../../../assets/employeeProfile.png";
import DataTable from "react-data-table-component";
import eyeIcon from "../../../assets/mdi_eye.svg";
import backArrowLogo from "../../../assets/icon-park-outline_down.svg";

function ClientProfile() {
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
            // onClick={() => navigate("/client-document/client-profile")}
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
    <ContentBox>
      <div className="flex lg:px-8 py-5">
        <Link
          to="/client-document"
          className="flex items-center bg-[#C5090A] pl-1 pr-2 py-2 text-[white] font-amulya_medium text-base rounded-md w-[90px] justify-around"
        >
          <img src={backArrowLogo} alt="" />
          <p>Back</p>
        </Link>
      </div>

      <div className="flex w-full py-3 lg:mt-10 lg:pl-10">
        <div className="flex w-full">
          <div className="flex rounded-lg px-2 justify-center">
            <img
              src={profilePic}
              alt=""
              className="w-[4rem] sm:w-[7rem] rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col bg-white shadow-3dShadow rounded-2xl w-[271px] px-[0.3rem] py-[0.8rem] sm:w-[405px] lg:w-[435px] justify-between sm:px-[16px] lg:px-[16px]">
            <div className="flex w-[256px] justify-between sm:w-[369px] lg:w-[393px]">
              <p className="text-[0.9rem] font-amulya_bold sm:text-xl">
                Sivakumar(123456)
              </p>
              <div className="flex px-3 bg-[#25BF1733] w-20 rounded-md justify-between items-center">
                <img src={greenDotIcon} alt="" />
                <p className="text-xs font-amulya_light text-[#25BF17]">
                  Active
                </p>
              </div>
            </div>
            <div className="flex w-[256px] justify-between mt-2 sm:w-[369px] lg:w-[393px]">
              <div className="flex flex-col w-[131px] sm:w-[139px]  lg:w-[160px]">
                <p className="text-[#8B8D97] text-[0.6rem] sm:text-sm font-amulya_light">
                  Onboarded by
                </p>
                <div className="flex  items-center justify-between">
                  <p className="text-[0.7rem] sm:text-[0.8rem] lg:text-base font-amulya_medium">
                    Vinit Singh
                  </p>
                  <div className="flex bg-[#25BF1733] px-[0.4rem] py-[0.1rem] rounded-md">
                    <Link className="text-[10px] font-amulya_light text-[#25BF17]">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[105px] sm:w-[143px]  lg:w-[144px]">
                <p className="text-[#8B8D97] sm:text-sm text-[0.6rem] font-amulya_light">
                  Joined on
                </p>
                <div className="flex items-center justify-between">
                  <img src={calenderIcon} alt="" />
                  <p className="font-amulya_medium sm:text-sm text-[0.6rem]">
                    3 December 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b-[1px] border-b-[#D1D4D7] pl-6 mt-5 lg:ml-10 lg:mr-6">
        <p className="">
          <span className="border-b-2 border-b-[#C5090A] text-[#C5090A] text-base font-amulya_bold">
            Client Documents
          </span>
        </p>
      </div>

      <div className="flex flex-col mt-7 lg:px-10">
        <div className="flex pt-3 pr-2 justify-end">
          <div className="w-full flex flex-row h-[2.5rem] lg:w-[40%] ">
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
        <DataTable
          columns={columns}
          data={sampleData}
          customStyles={customStyles}
        />
      </div>
    </ContentBox>
  );
}

export default ClientProfile;

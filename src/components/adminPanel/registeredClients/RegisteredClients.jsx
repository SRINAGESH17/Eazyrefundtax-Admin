import ContentBox from "../../../helpers/ContentBox";
import { Icon } from "@iconify/react";
import DataTable from "react-data-table-component";
import CustomPagination from "../../../helpers/CustomPagination";
import CustomCheckbox from "../../../helpers/CustomCheckbox";
import DeleteClient from "./DeleteClient";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

const RegisteredClients = () => {
  const theme = {
    select: {
      styles: {
        base: {
          container: {
            position: "relative",
            width: "min-w-[48%] lg:min-w-[150px]",
            top: "-4px",
          },
        },
      },
    },
  };
  const [showPopup, setShowPopup] = useState(false);

  const delClientPopup = (row) => {
    setShowPopup((prev) => !prev);
  };

  const closePopUp = (val) => {
    setShowPopup(val);
  };

  const columns = [
    {
      name: "SL",
      cell: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "Client Name",
      id: "clientName",
      selector: (row) => row.clientName,
    },
    {
      name: "Client Contact Information",
      id: "clientContactInfo",
      selector: (row) => row.clientContactInfo,
    },
    {
      name: "Time and Date",
      cell: (row) => (
        <div className="flex flex-row items-center gap-[1rem]">
          <img src={row.image} className={"h-[3rem] w-[3rem] rounded-full"} />
          <p>{row.name}</p>
        </div>
      ),
      width: "270px",
    },
    {
      name: "Employee",
      id: "status",
      cell: (row) => (
        <Select variant="outlined" label="Select Employee">
          <Option>Employee Type 1</Option>
          <Option>Employee Type 2</Option>
          <Option>Employee Type 3</Option>
          <Option>Employee Type 4</Option>
          <Option>Employee Type 5</Option>
        </Select>
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
            className="bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.5rem]"
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
        fontWeight: "500",
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
        background: "#FFF",
        color: "#8888A3",
        fontFamily: "amulya_light",
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
        minWidth: "1200px",
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
      clientName: "12345",
      clientContactInfo: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
    {
      clientName: "12345",
      clientContactInfo: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
    {
      clientName: "12345",
      clientContactInfo: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },
    {
      clientName: "12345",
      clientContactInfo: "Caller",
      image:
        "https://res.cloudinary.com/deh78ntmd/image/upload/v1698809102/Picture_z544ro.png",
      name: "Mnaikanta",
      email: "manikanta@000.com",
      phoneNumber: "0000",
      callComment: "Already",
      status: "Voice Mail",
    },

    {
      clientName: "12345",
      clientContactInfo: "Caller",
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
    <ThemeProvider value={theme}>
      <ContentBox>
        <div className="flex flex-col">
          <div className="flex w-full justify-between pt-4 lg:pt-8 lg:pl-8">
            <p className="font-amulya_bold text-lg">Registered Clients</p>
            <button className="rounded-2xl px-5 py-2 font-amulya_medium text-sm text-[#FFF] bg-[#C5090A] lg:hidden">
              Download
            </button>
          </div>

          <div className="flex flex-col mt-4 lg:flex-row lg:items-center lg:justify-end lg:pr-[1rem]">
            <div className="flex lg:order-2 lg:mr-2 lg:w-[36%]">
              <div className="w-full flex flex-row h-[2.5rem]">
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

            <div className="flex mt-5 justify-between items-center lg:mt-0  lg:order-1 lg:mr-2 ">
              <button className="rounded-[4px] flex flex-row items-center gap-[0.5rem] border border-solid border-[#D1D4D7] h-[1.9rem] px-[0.8rem] text-[#8888A3] w-[48%] lg:mr-2">
                <Icon icon="lucide:filter" className="text-[1rem]" />
                <span className="text-[0.6rem]">Filter</span>
              </button>

              <Select variant="outlined" label="Change Status">
                <Option>Premium</Option>
                <Option>Overall</Option>
              </Select>
            </div>
            <button className="hidden rounded-2xl px-5 py-2 font-amulya_medium text-sm text-[#FFF] bg-[#C5090A] lg:block order-3">
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
    </ThemeProvider>
  );
};

export default RegisteredClients;

import ContentBox from "../../../helpers/ContentBox";
import { Select, Option } from "@material-tailwind/react";
import "flatpickr/dist/themes/material_green.css";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import calenderIcon from "../../../assets/calendar_month.svg";
import { ThemeProvider } from "@material-tailwind/react";
import invoiceIcon from "../../../assets/basil_invoice-solid.svg";
import paidInvoiceIcon from "../../../assets/icon-park-solid_success.svg";
import pendingInvoiceIcon from "../../../assets/mdi_receipt-text-pending.svg";
import increasingStocksLogo from "../../../assets/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg";
import { Line } from "rc-progress";
import DataTable from "react-data-table-component";
import { Icon } from "@iconify/react";
import CustomCheckbox from "../../../helpers/CustomCheckbox";
import CustomPagination from "../../../helpers/CustomPagination";
import plusIcon from "../../../assets/ic_baseline-plus.svg";
import Popup from "reactjs-popup";

import CreateNewInvoice from "./CreateNewInvoice";
import PayInvoice from "./PayInvoice";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const InvoiceList = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [openPayInvoice, setOpenPayInvoice] = useState(false);
  const closePayInvoiceModal = () => setOpenPayInvoice(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-[#ECFDF3] text-[#00C041]";
      case "unPaid":
        return "bg-[#F58F0F1A] text-[#F58F0F]";
      case "over Due":
        return "bg-[#FF1E1A1A] text-[#FF1E1A]";
    }
  };

  const customStyles = {
    headRow: {
      style: {
        fontWeight: "600",
        padding: "12px 24px",
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

  const sampleData = [
    {
      inVoiceNumber: "# ORD-5215102420",

      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "9876543210",
      date: "06/09/2018",

      dueDate: "30/09/2018",
      amount: "$920.41",
      status: "paid",
    },
    {
      inVoiceNumber: "# ORD-5215102420",

      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "9876543210",
      date: "06/09/2018",

      dueDate: "30/09/2018",
      amount: "$920.41",
      status: "unPaid",
    },
    {
      inVoiceNumber: "# ORD-5215102420",

      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "9876543210",
      date: "06/09/2018",

      dueDate: "30/09/2018",
      amount: "$920.41",
      status: "over Due",
    },
    {
      inVoiceNumber: "# ORD-5215102420",

      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "9876543210",
      date: "06/09/2018",

      dueDate: "30/09/2018",
      amount: "$920.41",
      status: "paid",
    },
  ];

  const columns = [
    {
      name: "SL",
      cell: (row, index) => index + 1,
    },
    {
      name: "Invoice Number",
      id: "inVoiceNumber",
      selector: (row) => row.inVoiceNumber,
      width: "190px",
    },

    {
      name: "Client Name",
      cell: (row) => (
        <div>
          <p className="">{row.name}</p>
        </div>
      ),
      width: "250px",
    },
    {
      name: "Contact Information",
      cell: (row) => (
        <div className="flex flex-col gap-[0.2rem]">
          <p>{row.email}</p>
          <p>{row.phoneNumber}</p>
        </div>
      ),
      width: "280px",
    },
    {
      name: "Date",
      id: "date",
      selector: (row) => row.date,
    },
    {
      name: "dueDate",
      id: "dueDate",
      selector: (row) => row.dueDate,
    },
    {
      name: "Amount",
      id: "amount",
      selector: (row) => row.amount,
    },
    {
      name: "Status",
      width: "110px",
      cell: (row) => (
        <div
          className={`${getStatusColor(
            row.status
          )} capitalize flex flex-row justify-center items-center gap-[0.3rem] rounded-[1rem] w-full`}
        >
          <Icon icon="radix-icons:dot-filled" />

          <span className="text-[0.7rem]">{row.status}</span>
        </div>
      ),
    },

    {
      name: "Action",
      center: "true",
      cell: (row) => (
        <div className="flex flex-row items-center gap-[1rem]">
          <button
            onClick={() => setOpenPayInvoice((o) => !o)}
            style={{ border: "0.727px solid #D9D9D9" }}
            className="bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]"
          >
            <Icon icon="mdi:eye" />
          </button>
          <button
            style={{ border: "0.727px solid #D9D9D9" }}
            className="bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]"
          >
            <Icon icon="material-symbols:edit" />
          </button>
        </div>
      ),
    },
  ];

  const dummyGraphData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const theme = {
    select: {
      styles: {
        base: {
          container: {
            position: "relative",
            minWidth: "min-w-[45%] sm:min-w-[60%] lg:min-w-[25%]",
            width: "w-[25%]",
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

  const [fromDate, setFromDate] = useState("");

  return (
    <ThemeProvider value={theme}>
      <ContentBox>
        <div className="flex flex-col px-5">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <h2 className="font-amulya_bold text-base lg:hidden">Invoice</h2>
            <h2 className="font-amulya_bold text-base hidden lg:block">
              Invoice
            </h2>

            <div className="flex bg-[#F5F4F6] lg:hidden justify-between rounded-md">
              <button className="focus:bg-[#C5090A] text-[#545454] focus:text-[white] rounded-md py-1 px-4 font-amulya_medium w-[30%]">
                Day
              </button>
              <button className="focus:bg-[#C5090A] text-[#545454] focus:text-[white] rounded-md py-1 px-4 font-amulya_medium w-[30%]">
                Week
              </button>
              <button className="focus:bg-[#C5090A] text-[#545454] focus:text-[white] rounded-md py-1 px-4 font-amulya_medium w-[30%]">
                Month
              </button>
            </div>

            <div className="flex lg:w-[75%] justify-between items-center">
              {/* <div className="flex w-[25%]"> */}
              <Select
                variant="outlined"
                label="Select Admin"
                className="min-w-[100px]"
                color="red"
              >
                <Option>Employee Type 1</Option>
                <Option>Employee Type 2</Option>
                <Option>Employee Type 3</Option>
                <Option>Employee Type 4</Option>
                <Option>Employee Type 5</Option>
              </Select>
              {/* </div> */}

              {true ? (
                <div className="flex items-center w-[26%] sm:w-[16%] rounded-md justify-between p-2 border-[1px] border-[#8888A3]">
                  <p className="text-base font-amulya_medium text-[#8888A3]">
                    From
                  </p>
                  <img src={calenderIcon} alt="" />
                </div>
              ) : (
                <Flatpickr
                  data-enable-time
                  value={fromDate}
                  onChange={([date]) => {
                    setFromDate(date);
                  }}
                />
              )}
              {true ? (
                <div className="flex items-center w-[19%] sm:w-[12%] rounded-md justify-between border-[1px] p-2 border-[#8888A3]">
                  <p className="text-base font-amulya_medium text-[#8888A3]">
                    To
                  </p>
                  <img src={calenderIcon} alt="" />
                </div>
              ) : (
                <Flatpickr
                  data-enable-time
                  value={fromDate}
                  onChange={([date]) => {
                    setFromDate(date);
                  }}
                />
              )}
              <div className="hidden bg-[#F5F4F6] lg:flex rounded-md">
                <button className="focus:bg-[#C5090A] text-[#545454] focus:text-[white] rounded-md py-1 px-4 font-amulya_medium">
                  Day
                </button>
                <button className="focus:bg-[#C5090A] text-[#545454] focus:text-[white] rounded-md py-1 px-4 font-amulya_medium">
                  Week
                </button>
                <button className="focus:bg-[#C5090A] text-[#545454] focus:text-[white] rounded-md py-1 px-4 font-amulya_medium">
                  Month
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 xl:flex-row xl:justify-between">
            <div className="flex flex-col md:flex-row md:rounded-lg md:justify-between md:py-6 md:px-9 md:shadow-3dShadow xl:px-4 xl:w-[65%] xl:py-3">
              <div className="rounded-lg flex flex-col shadow-3dShadow mb-5 md:mb-0 px-5 py-2 md:border-r-[1px] md:rounded-none md:w-[30%] md:border-[#8888A3] md:shadow-none xl:px-2">
                <div className="flex items-center py-2">
                  <div className="flex justify-center items-center px-2 py-2 rounded-full border-[1px] border-[#D1D4D7] xl:p-1">
                    <img src={invoiceIcon} alt="" />
                  </div>
                  <p className="text-[#8888A3] font-amulya_medium text-lg ml-4 md:text-sm xl:text-xs">
                    Total Invoices
                  </p>
                </div>
                <div className="flex py-2">
                  <p className="font-amulya_bold text-xl xl:text-base">
                    $526.9K
                  </p>
                </div>
                <div className="flex">
                  <img src={increasingStocksLogo} alt="" />
                  <p className="text-sm font-amulya_medium xl:text-xs">
                    <span className="text-[#00C041] font-amulya_medium">
                      +1.50
                    </span>{" "}
                    /month
                  </p>
                </div>
              </div>
              <div className="rounded-lg flex flex-col shadow-3dShadow mb-5 md:mb-0 px-5 py-2 md:border-r-[1px] md:rounded-none md:w-[30%] md:border-[#8888A3] md:shadow-none xl:px-2">
                <div className="flex items-center py-2">
                  <div className="flex justify-center items-center px-2 py-2 rounded-full border-[1px] border-[#D1D4D7] xl:p-1">
                    <img src={paidInvoiceIcon} alt="" />
                  </div>
                  <p className="text-[#8888A3] font-amulya_medium text-lg ml-4 md:text-sm xl:text-xs">
                    Paid Invoices
                  </p>
                </div>
                <div className="flex py-2">
                  <p className="font-amulya_bold text-xl xl:text-base">
                    $526.9K
                  </p>
                </div>
                <div className="flex">
                  <img src={increasingStocksLogo} alt="" />
                  <p className="text-sm font-amulya_medium xl:text-xs">
                    <span className="text-[#00C041] font-amulya_medium">
                      +1.50
                    </span>{" "}
                    /month
                  </p>
                </div>
              </div>
              <div className="rounded-lg flex flex-col shadow-3dShadow mb-5 md:mb-0 px-5 py-2  md:rounded-none md:w-[30%] md:shadow-none xl:px-2">
                <div className="flex items-center  py-2">
                  <div className="flex justify-center items-center px-2 py-2 rounded-full border-[1px] border-[#D1D4D7] xl:p-1">
                    <img src={pendingInvoiceIcon} alt="" />
                  </div>
                  <p className="text-[#8888A3] font-amulya_medium text-lg ml-4 md:text-sm xl:text-xs">
                    Pending Invoices
                  </p>
                </div>
                <div className="flex py-2">
                  <p className="font-amulya_bold text-xl xl:text-base">
                    $526.9K
                  </p>
                </div>
                <div className="flex">
                  <img src={increasingStocksLogo} alt="" />
                  <p className="text-sm font-amulya_medium xl:text-xs">
                    <span className="text-[#00C041] font-amulya_medium">
                      +1.50
                    </span>{" "}
                    /month
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col shadow-3dShadow py-3 rounded-md mt-5 xl:mt-0 xl:w-[33%] xl:py-1">
              <div className="flex flex-col pl-7 xl:pl-4 pr-2">
                <p className="font-amulya_bold text-base">Total Receivable</p>
                <p className="font-amulya_medium text-sm text-[#8888A3] py-3">
                  Total Unpaid Invoices $56,235
                </p>
                <Line
                  percent={20}
                  strokeWidth={2}
                  strokeColor="#C5090A"
                  trailWidth={2}
                  trailColor="#C5090A33"
                />
              </div>
              <div className="flex border-t-2 border-[#8888A3] mt-4">
                <div className="flex py-4 w-[48%] pl-10 xl:py-2">
                  <div className="flex flex-col text-[#8888A3] text-sm font-amulya_medium border-[#8888A3] border-r-2 w-full">
                    <p>Current</p>
                    <p>$50K</p>
                  </div>
                </div>
                <div className="flex py-4 w-[48%] pl-14 xl:py-2">
                  <div className="flex flex-col text-[#8888A3] text-sm font-amulya_medium">
                    <p>Over Due</p>
                    <p>$50K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-[1px] border-[#8888A3] lg:flex-row mt-5 rounded-lg">
            <div className="flex w-full h-[200px] lg:w-[70%] rounded-lg shadow-3dShadow lg:shadow-none">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={dummyGraphData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}

                  <defs>
                    <linearGradient
                      id="colorUv"
                      x1="496"
                      y1="-2.53597"
                      x2="496"
                      y2="215"
                    >
                      <stop offset="-63.56%" style={{ stopColor: "#C5090A" }} />
                      <stop offset="158.3%" style={{ stopColor: "#E1D6D5" }} />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#C5090A"
                    strokeWidth="2px"
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col py-2 shadow-3dShadow px-4 justify-between mt-5 rounded-lg lg:w-[30%] lg:flex-col lg:mt-0 md:flex-row lg:shadow-none">
              <div className="flex flex-col  lg:border-none">
                <p className="text-[#8888A3] text-sm font-amulya_medium">
                  Cash as on 09/10/2018
                </p>
                <p className="font-amulya_bold text-2xl">$526.9K</p>
              </div>
              <div className="flex py-3 md:py-0 flex-col lg:border-none">
                <p className="text-[#8888A3] text-sm font-amulya_medium">
                  Cash as on 09/10/2018
                </p>
                <p className="font-amulya_bold text-2xl">$526.9K</p>
              </div>
              <div className="flex flex-col pr-4">
                <p className="text-[#8888A3] text-sm font-amulya_medium">
                  Cash as on 09/10/2018
                </p>
                <p className="font-amulya_bold text-2xl">$526.9K</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-14">
            <h3 className="text-base font-amulya_medium lg:hidden">
              All Invoices
            </h3>
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="hidden lg:flex lg:flex-row lg:w-20% lg:items-center">
                <h3 className="text-base font-amulya_medium">All Invoices</h3>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between lg:w-[75%] lg:items-center lg:justify-end">
                <div className="w-full flex flex-row h-[2.5rem] shrink-0 md:w-[70%] lg:w-[50%] lg:pr-5">
                  <input
                    placeholder="Search by Name or Type "
                    type="text"
                    className="flex-1 h-full w-full  outline-none border-r-0 border-[0.5px] border-solid border-[#D1D4D7] rounded-s-[0.5rem] px-[0.5rem] text-[0.7rem] font-[500]  placeholder-[#D1D4D7]"
                  />

                  <button className="bg-[#C5090A] rounded-e-[0.5rem] px-[1.2rem] text-white text-[0.7rem] font-[500]">
                    Search
                  </button>
                </div>
                <button
                  onClick={() => setOpen((o) => !o)}
                  className="flex md:justify-between text-[white] text-sm font-amulya_medium bg-[#C5090A] rounded-full py-2 px-3 items-center w-full justify-center mt-5 md:w-[20%] md:mt-0 lg:w-[25%]"
                >
                  <img src={plusIcon} alt="" />
                  <p>New Invoice</p>
                </button>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={sampleData}
              customStyles={customStyles}
              selectableRows
              selectableRowsComponent={CustomCheckbox}
              pagination
              paginationComponent={CustomPagination}
            />
          </div>
          <Popup open={open} closeOnDocumentClick={false}>
            {(close) => <CreateNewInvoice close={close} />}
          </Popup>

          <Popup open={openPayInvoice} closeOnDocumentClick={false}>
            {(close) => <PayInvoice close={close} />}
          </Popup>
        </div>
      </ContentBox>
    </ThemeProvider>
  );
};

export default InvoiceList;

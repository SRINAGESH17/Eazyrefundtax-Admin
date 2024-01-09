import { Icon } from "@iconify/react";
import "flatpickr/dist/themes/material_green.css";
import { useEffect } from "react";

import DataTable from "react-data-table-component";

import Flatpickr from "react-flatpickr";

const dateOptions = {
  mode: "range",
  dateFormat: "Y-m-d",
};

const columns = [
  {
    name: "Tax File Type",
    id: "taxType",
    selector: (row) => row.taxType,
    center: true,
  },
  {
    name: "Price",
    id: "price",
    selector: (row) => row.price,
    center: true,
  },
  {
    name: "Qty",
    id: "quantity",
    selector: (row) => row.quantity,
    center: true,
  },
  {
    name: "Total Prize",
    id: "totalPrize",
    selector: (row) => row.totalPrize,
    center: true,
  },
];

const sampleData = [
  {
    taxType: "TAx Organizer",
    price: "$55",
    quantity: "1",
    totalPrize: "$55",
  },
  {
    taxType: "Federal NR Return",
    price: "$55",
    quantity: "1",
    totalPrize: "$55",
  },
];

const customStyles = {
  headRow: {
    style: {
      color: "#8888A3)",
      fontFamily: "Amulya",
    },
  },
  head: {
    style: {
      borderRadius: "6px 6px 0px 0px",

      fontSize: "14px",
      lineHeight: "20px",
    },
  },

  headCells: {
    style: {
      color: "#8888A3",
    },
  },

  rows: {
    style: {
      background: "#FFF",
      color: "#8888A3",
      fontFamily: "Amulya",
      fontWeight: "400",

      fontSize: "14px",
    },
  },

  table: {
    style: {
      overflow: "visible",

      border: "1px solid #D1D4D7",
      borderRadius: "8px",
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

const InvoiceViewCard = ({ close }) => {
  useEffect(()=>{
    console.log("invoice card rendered.............................")
  },[])
  return (
    <div className="w-full px-[5rem] flex justify-center">
      <div className="bg-[#fff] w-full sm:w-[32rem] md:w-[42rem] min-w-[15rem] rounded-[1.2rem]  pb-[3rem] pt-[1rem] lg:pt-[2rem]  font-lato">
        <div className="px-[1.5rem] lg:px-[2.5rem] pb-[0.5rem]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[#1A1A1A] text-[0.8rem] lg:text-[1.1rem] font-[700]">
              Invoice : <span className="text-[#C5090A]"># ORD-5215102420</span>
            </h1>
            <button
              onClick={() => close()}
              className="lg:rounded-[1.5rem] rounded-full border border-solid border-[#D1D4D7] p-[0.5rem] flex justify-center items-center"
            >
              <Icon
                icon="ic:sharp-cancel"
                className="text-[#C5090A] text-[0.8rem] lg:text-[1.5rem] "
              />
            </button>
          </div>
        </div>

        <hr className="h-[1px] bg-[#8888A3] w-full" />

        <div className="px-[1.5rem] lg;px-[2.5rem] pt-[1rem] lg:py-[1.3rem] flex flex-col gap-[1rem] lg:gap-[2.5rem]">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col">
              <h3 className="text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] font-[500]">
                {" "}
                Bill To:
              </h3>
              <h1 className="text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700] mt-[0.6rem]">
                Putta Manikanta
              </h1>
              <div className="mt-[1rem] flex flex-col gap-[0.5rem]">
                <p className="text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[400] leading-4">
                  manikantaputta@gmail.com
                </p>
                <p className="text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[400] leading-4">
                  9876543210
                </p>
                <p className="text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[400] leading-4">
                  State : California
                </p>
                <p className="text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[400] leading-4">
                  Zip code : 50084
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] font-[500]">
                {" "}
                Issued On :
              </h3>
              <h1 className="text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700] mt-[0.6rem]">
                09/Sep/2018
              </h1>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] font-[500]">
                {" "}
                Due to :
              </h3>
              <h1 className="text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700] mt-[0.6rem]">
                09/Oct/2018
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700] mt-[0.6rem]">
              Invoice Items
            </h1>

            <div className="w-full overflow-x-auto">
              <table className="border border-solid border-[#D1D4D7] rounded-[0.5rem]  w-full ">
                <thead className="border-b border-solid border-[#D1D4D7]">
                  <tr>
                    <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                      Tax File Type
                    </th>
                    <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                      Price
                    </th>
                    <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                      Qty
                    </th>{" "}
                    <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                      Total Prize
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      TAx Organizer
                    </td>
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      $55
                    </td>{" "}
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      1
                    </td>
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      $55
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      TAx Organizer
                    </td>
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      $55
                    </td>{" "}
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      1
                    </td>
                    <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                      $55
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <DataTable
              columns={columns}
              data={sampleData}
              customStyles={customStyles}
            /> */}
            <div className="flex flex-row items-center justify-between">
              <p className="text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] font-[400] max-w-[60%]">
                Here we can write a additional notes for the client to get
                better understanding of this invoice.
              </p>
              <p className="text-[#8888A3] text-[0.8rem] lg:text-[1.1rem] font-[500]">
                Total Amount :{" "}
                <span className="text-[#1A1A1A] font-[700]">$100.5</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[1rem] self-end">
            <button
              onClick={() => close()}
              className="border border-solid border-[#C5090A] rounded-[1.2rem] text-[0.8rem] text-[#C5090A] py-[0.5rem] px-[1.6rem]"
            >
              Cancel
            </button>
            <button onClick={close} className=" bg-[#C5090A] rounded-[1.2rem] text-[0.8rem] text-white py-[0.5rem] px-[2rem]">
              Send
            </button>
          </div>
        </div>
        <hr className="h-[1px] bg-[#8888A3] w-full" />
      </div>
    </div>
  );
};

export default InvoiceViewCard;

import { Icon } from "@iconify/react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import InvoiceSummary from "./InvoiceSummary";
// import { Icon } from "@iconify/react";

import {
  IconButton,
  Option,
  Select,
  ThemeProvider,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const dateOptions = {
  mode: "range",
  dateFormat: "Y-m-d",
};

const CreateNewInvoice = ({ close }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [itemsList, setItemsList] = useState([[]]);
  const addNewItems = () => {
    setItemsList([...itemsList, []]);
  };

  return (
    <div className="px-10 ">
      <div className="bg-[#fff] w-full sm:w-[32rem] md:w-[42rem] min-w-[20rem] rounded-[1.2rem]  pb-[3rem]  font-lato">
        <div className="px-[1.5rem] lg:px-[2.5rem] py-[0.5rem] ">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[#1A1A1A] text-[0.8rem] lg:text-[1.1rem] font-[700]">
              Create New Invoice
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
          <h1 className="text-[0.6rem] lg:text-[0.8rem] text-[#1A1616] font-[700]">
            Invoice : <span className="text-[#C5090A]"># ORD-5215102420</span>
          </h1>
        </div>
        <hr className="h-[1px] bg-[#8888A3] w-full" />
        <form>
          <div className="px-[1.5rem] lg:px-[2.5rem] pt-[1rem] lg:py-[1.9rem] flex flex-col overflow-y-auto max-h-[380px]">
            <div className="flex flex-col gap-[1rem] lg:gap-[1.5rem]">
              <div className="bg-invoiceGray w-full rounded-[0.5rem] p-[0.8rem] lg:pl-[1rem] lg:pr-[2.5rem] lg:pt-[0.5rem] lg:pb-[1rem] flex flex-col gap-[0.8rem] lg:gap-[1rem] bg-[#D1D4D74D]">
                <div className="flex flex-col gap-[0.5rem]">
                  <label className="text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[500]">
                    Client Email
                  </label>
                  <input
                    type="text"
                    placeholder="manikantaputta@gmail.com"
                    className="py-[0.8rem] px-[1rem] border border-solid border-[#D1D4D7] rounded-[0.5rem] bg-transparent outline-none text-[#8888A3] placeholder:text-[#8888A3] text-[0.5rem] lg:text-[0.8rem] font-[400]"
                  />
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  <label className="text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[500]">
                    Client Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="manikantaputta@gmail.com"
                    className="py-[0.8rem] px-[1rem] border border-solid border-[#D1D4D7] rounded-[0.5rem] bg-transparent outline-none text-[#8888A3] placeholder:text-[#8888A3] text-[0.5rem] lg:text-[0.8rem] font-[400]"
                  />
                </div>
              </div>

              <div className="pr-[3rem] lg:pr-[6rem] flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <label className="text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[500]">
                    Tax File Type
                  </label>
                  <input
                    type="text"
                    placeholder="Tax Organizer"
                    className="py-[0.8rem] px-[1rem] border border-solid border-[#D1D4D7] rounded-[0.5rem] bg-transparent outline-none text-[#8888A3] placeholder:text-[#8888A3] text-[0.5rem] lg:text-[0.8rem] font-[400]"
                  />
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  <label className="text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[500]">
                    Issue Date
                  </label>
                  <div className="flex flex-row gap-[1rem] w-full">
                    <div className="w-full border border-solid border-[#D1D4D7] rounded-[0.5rem] bg-transparent px-[1rem] py-[0.8rem] flex flex-row items-center gap-[0.5rem]">
                      <Icon
                        icon="zondicons:calendar"
                        className="text-[#8888A3] text-[1rem] lg:text-[1.5rem]"
                      />

                      <Flatpickr
                        className="form-control w-full border-none outline-none  text-[0.6rem] lg:text-[0.8rem] text-[#8888A3]"
                        placeholder="19/12/2023"
                        options={dateOptions}
                      />
                    </div>
                    <div className="w-full border border-solid border-[#D1D4D7] rounded-[0.5rem] bg-transparent px-[1rem] py-[0.8rem] flex flex-row items-center gap-[0.5rem]">
                      <Icon
                        icon="zondicons:calendar"
                        className="text-[#8888A3] text-[1rem] lg:text-[1.5rem]"
                      />

                      <Flatpickr
                        className="form-control w-full border-none outline-none text-[0.6rem] lg:text-[0.8rem] text-[#8888A3]"
                        placeholder="19/12/2023"
                        options={dateOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[0.8rem] lg:gap-[1rem]">
                <h1 className="text-[0.6rem] lg:text-[0.8rem] text-[#1A1616] font-[700]">
                  Invoice Items
                </h1>

                {itemsList.map((singleItem, index) => (
                  <div className="grid grid-cols-6 items-center gap-[1rem]">
                    <div className="flex flex-col col-span-2 gap-[0.5rem]">
                      <label className="text-[#8888A3] text-[0.5rem] lg:text-[0.7rem]">
                        Tax File Type
                      </label>
                      <input
                        type="text"
                        className="h-[2.5rem] lg:h-[3rem] w-full rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none px-[1rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-[0.5rem]">
                      <label className="text-[#8888A3] text-[0.5rem] lg:text-[0.7rem]">
                        Price
                      </label>
                      <input
                        type="text"
                        className="h-[2.5rem] lg:h-[3rem] w-full rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none px-[1rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-[0.5rem]">
                      <label className="text-[#8888A3] text-[0.5rem] lg:text-[0.7rem]">
                        Qty
                      </label>
                      <input
                        type="text"
                        className="h-[2.5rem] lg:h-[3rem] w-full rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none px-[1rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-[0.5rem]">
                      <label className="text-[#8888A3] text-[0.5rem] lg:text-[0.7rem]">
                        Total Price
                      </label>
                      <input
                        type="text"
                        className="h-[2.5rem] lg:h-[3rem] w-full rounded-[0.5rem] border border-solid border-[#D1D4D7] outline-none px-[1rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-[0.5rem]">
                      <label className="text-[#8888A3] text-[0.5rem] lg:text-[0.7rem]">
                        Action
                      </label>
                      <IconButton
                        className="shadow-none hover:shadow-none focus:shadow-none bg-white text-[#565656]"
                        style={{
                          borderRadius: "5.55px",
                          background: "#FFF",
                          
                        }}
                      >
                        <Icon
                          icon="material-symbols:delete-rounded"
                          className="text-[1.5rem]"
                        />
                      </IconButton>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-2">
                  <button
                    onClick={addNewItems}
                    type="button"
                    className="flex flex-row items-center gap-[0.2rem] text-[#C5090A]"
                  >
                    <Icon
                      icon="ic:baseline-plus"
                      className="text-[0.8rem] lg:text-[1rem]"
                    />
                    <span className="text-[0.6rem] lg:text-[0.7rem]  font-[500]">
                      Add Item
                    </span>
                  </button>
                  <p className="flex flex-row gap-[2rem] text-[0.7rem] lg:text-[0.8rem] text-[#8888A3] font-[700]">
                    Total Amount :{" "}
                    <span className="text-[#1A1616]"> $56.5</span>
                  </p>
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex flex-row gap-[0.5rem]">
                    <h1 className="text-[0.6rem] lg:text-[0.8rem] text-[#1A1616] font-[700]">
                      Additional Note:
                    </h1>

                    <div className="text-[#D1D4D7] flex flex-row items-center gap-[0.2rem]">
                      <p className="text-[0.5rem] lg;text-[0.7rem] font-[400]">
                        Optional
                      </p>
                      <Icon
                        icon="material-symbols:info-outline"
                        className="text-[0.8rem] l"
                      />
                    </div>
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Additional Note:"
                    className="border border-solid border-[#D1D4D7] outline-none rounded-[0.5rem] p-[1rem] text-[0.7rem] placeholder:text-[#8888A3]"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="h-[1px] bg-[#8888A3] w-full" />

          <div className="px-[1.5rem] lg:px-[2.5rem] py-[1rem]  flex flex-col sm:flex-row gap-[1rem] sm:justify-between ">
            <button
              type="button"
              className="border border-solid border-[#C5090A] py-[0.5rem] px-[1.75rem] text-[0.8rem] text-[#C5090A] font-[500] rounded-[1.2rem]"
            >
              {" "}
              Preview
            </button>
            <div className="flex flex-row items-center gap-[1rem]">
              <button
                type="button"
                onClick={() => close()}
                className="border border-solid border-[#C5090A] py-[0.5rem] px-[1.6rem] text-[0.8rem] text-[#C5090A] font-[500] rounded-[1.2rem]"
              >
                {" "}
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpen((o) => !o);
                  // close()
                }}
                type="button"
                className="border border-solid border-[#C5090A] bg-[#C5090A] py-[0.5rem] px-[1.75rem] text-[0.8rem] text-white font-[500] rounded-[1.2rem]"
              >
                {" "}
                Generate
              </button>
            </div>
          </div>
        </form>

        <Popup open={open} closeOnDocumentClick={false}>
          {(close) => <InvoiceSummary close={close} />}
        </Popup>
      </div>
    </div>
  );
};

export default CreateNewInvoice;

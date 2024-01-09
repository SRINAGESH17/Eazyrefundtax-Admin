import { ThreeDots } from "react-loader-spinner";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import DataTable from "react-data-table-component";
import eyeIcon from "../../../assets/mdi_eye.svg";
import { Select, Option } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

const ReviewerUploadedDoc = () => {
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

  const [loaderBtn, setLoaderBtn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [selectedFile, setSelectedFile] = useState();

  const fileRef = useRef(null);

  const onSubmit = () => {};
  return (
    <ThemeProvider value={theme}>
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex-col gap-[1rem] pt-9 mb-5 lg:px-10"
        >
          <div className="flex flex-col w-full justify-around lg:flex-row">
            <div className="flex flex-col lg:w-[45%] gap-[0.5rem] w-full mb-6">
              <p className="text-sm font-amulya_medium">Select User</p>
              <div
                className={`flex flex-row text-[0.9rem] font-[600] group-focus-within:bg-white  group-focus-within:shadow-md border  ${
                  !errors.categoryName ? "border-[#AFBACA]" : "border-red-600 "
                } items-center rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] `}
              >
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Select User"
                  className="outline-none w-1 border-none flex-grow placeholder:text-[#858585] "
                  {...register("categoryName", {
                    required: "*This field is required.",
                  })}
                />
              </div>
              {errors.categoryName?.type === "required" && (
                <p className="text-red-600 text-sm">
                  {errors.categoryName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col lg:w-[45%] gap-[0.5rem] w-full mb-6">
              <p className="text-sm font-amulya_medium">Tax Year</p>
              <div
                className={`flex flex-row text-[0.9rem] font-[600] group-focus-within:bg-white  group-focus-within:shadow-md border  ${
                  !errors.categoryName ? "border-[#AFBACA]" : "border-red-600 "
                } items-center rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] `}
              >
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Tax Year"
                  className="outline-none w-1 border-none flex-grow placeholder:text-[#858585] "
                  {...register("categoryName", {
                    required: "*This field is required.",
                  })}
                />
              </div>
              {errors.categoryName?.type === "required" && (
                <p className="text-red-600 text-sm">
                  {errors.categoryName.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full justify-around pt-4 lg:flex-row">
            <div className="flex flex-col lg:w-[45%] mb-6">
              <p className="text-sm font-amulya_medium">File Type</p>
              <Select variant="outlined" label="Select Employee" color="red">
                <Option>Employee Type 1</Option>
                <Option>Employee Type 2</Option>
                <Option>Employee Type 3</Option>
                <Option>Employee Type 4</Option>
                <Option>Employee Type 5</Option>
              </Select>
            </div>

            <div className="flex flex-col gap-[0.5rem] lg:w-[45%] w-full mb-6">
              <p className="text-sm font-amulya_medium">Choose CSV File</p>

              <input
                onChange={(e) => setSelectedFile(e.target.value)}
                ref={fileRef}
                type="file"
                style={{ display: "none" }}
              />

              <div className="bg-transparent border border-solid border-[#D1D4D7] rounded-[0.5rem] p-[0.5rem] outline-none flex flex-row items-center gap-[0.5rem]">
                <button
                  onClick={() => fileRef.current.click()}
                  className="bg-[#D1D4D7] rounded-[0.5rem] shrink-0 h-[2rem] w-24 text-[#8888A3] 
                text-[0.8rem] font-[600] "
                >
                  Choose File
                </button>
                <span className="text-[#8888A3] text-[0.8rem] font-[500]">
                  {" "}
                  No file Chosen
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center mt-5 pr-7 ">
            {loaderBtn ? (
              <ThreeDots
                height="50"
                width="50"
                radius="9"
                color="#FB6108"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <button
                type="submit"
                className="text-white text-[1.1rem] rounded-2xl px-10 py-[10px] bg-[#C5090A] font-bold ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </form>
        <div className="flex lg:px-10">
          <DataTable
            columns={columns}
            data={sampleData}
            customStyles={customStyles}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ReviewerUploadedDoc;

import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import moment from "moment";

import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { Icon } from "@iconify/react";

import { useQuery } from "react-query";
import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";

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

function TaxYearDoc() {
  const { getAccessToken } = useAuth();
  const [taxData, setTaxData] = useState();
  const [loaderBtn, setLoaderBtn] = useState(false);

  const getTaxDocuments = async () => {
    const token = await getAccessToken();

    const response = await fetch(AdminAuthorURL.taxType.getTaxDocuments, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error("Something Went Wrong Fetching Tax Year");
    }

    return result;
  };

  const { isLoading, isError, data, error, isSuccess, refetch } = useQuery(
    "fetchCategoriesList",
    getTaxDocuments
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = await getAccessToken();

      setLoaderBtn(true);
      const response = await fetch(AdminAuthorURL.taxType.addTaxDocument, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: data.taxYearDoc }),
      });

      const result = await response.json();

      if (!response.ok) {
        setLoaderBtn(false);
        toast.error(result.message);
      } else {
        setLoaderBtn(false);
        toast.success(result.message);
        reset();
        refetch();
      }
    } catch (error) {
      setLoaderBtn(false);
      toast.error("Error Adding Tax Document");
    }
  };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => index + 1,
    },
    {
      name: "Tax Document",
      id: "taxDocName",
      selector: (row) => row.taxDocName,
    },
    {
      name: "Created on",
      id: "createdOn",
      selector: (row) => moment(row.createdOn).format("DD MMMM YYYY"),
      grow: 2,
    },
    {
      name: "Actions",
      id: "action",
      cell: (row) => (
        <div className="flex space-x-2">
          <Link to={"edit/:id"}>
            <IconButton
              className="shadow-none hover:shadow-none focus:shadow-none bg-white text-[#565656]"
              style={{
                borderRadius: "5.55px",
                border: "0.925px solid #D9D9D9",
                background: "#FFF",
              }}
            >
              <Icon
                icon="material-symbols:delete-rounded"
                className="text-[1.5rem]"
              />
            </IconButton>
          </Link>
        </div>
      ),
      center: true,
      grow: 1,
    },
  ];

  useEffect(() => {
    if (isSuccess) {
      const taxDataToShow = data?.message?.data?.map((item, index) => {
        return {
          taxDocName: item.name,
          createdOn: item.createdAt,
        };
      });
      setTaxData(taxDataToShow);
    }
  }, [data]);

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

  return (
    <div className="flex flex-col mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:w-[45%] gap-[0.5rem] w-full mb-6 px-10">
          <p className="text-sm font-amulya_medium">Tax Document Type Name</p>
          <div
            className={`flex flex-row text-[0.9rem] font-[600] group-focus-within:bg-white  group-focus-within:shadow-md border  ${
              !errors.taxYearDoc ? "border-[#AFBACA]" : "border-red-600 "
            } items-center rounded-md px-[0.5rem] xs:px-[1rem] py-[0.8rem] `}
          >
            <input
              type="text"
              name="taxYearDoc"
              placeholder="Document Type"
              className="outline-none w-1 border-none flex-grow placeholder:text-[#858585] "
              {...register("taxYearDoc", {
                required: "*This field is required.",
              })}
            />
          </div>
          {errors.taxYearDoc?.type === "required" && (
            <p className="text-red-600 text-sm">{errors.taxYearDoc.message}</p>
          )}
        </div>

        <div className="flex w-full lg:justify-end justify-center mt-5 pr-11 mb-5">
          {loaderBtn ? (
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#C5090A"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <button
              type="submit"
              className="rounded-lg py-2 px-9 text-white text-sm font-amulya_bold bg-[#C5090A] cursor-pointer hover:bg-[#853131]"
            >
              Update
            </button>
          )}
        </div>
      </form>

      <div className="flex mt-1 lg:px-10">
        <DataTable
          columns={columns}
          data={taxData}
          customStyles={customStyles}
          progressPending={isLoading}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default TaxYearDoc;

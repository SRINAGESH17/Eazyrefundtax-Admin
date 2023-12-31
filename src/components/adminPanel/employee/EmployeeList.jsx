import { useEffect, useState } from "react";

import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";

import { Icon } from "@iconify/react";

import { Select, Option } from "@material-tailwind/react";
import DataTable from "react-data-table-component";

import { Link, NavLink, useNavigate, useOutletContext } from "react-router-dom";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import Popup from "reactjs-popup";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomPagination from "../../../helpers/CustomPagination";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [sampleData] = useOutletContext();

  const [employeeData, setEmployeeData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const [page, setPage] = useState(1);
  const [totalList, setTotalList] = useState();

  const columns = [
    {
      name: "SL",
      selector: (row, index) => index+(page-1)*10 + 1,
    },
    {
      name: "Employee ID",

      width: "120px",
      cell: (row) => (
        <button
          className='border-none'
          onClick={() => navigate(`/employee/${row._id}`)}>
          <p className='underline'>{row.id}</p>
        </button>
      ),
    },
    {
      name: "Employee Name",
      cell: (row) => (
        <div className='flex flex-row items-center gap-[1rem]'>
          <p>{row.name}</p>
        </div>
      ),
      width: "270px",
    },
    {
      name: "Contact Information",
      cell: (row) => (
        <div className='flex flex-col gap-[0.2rem]'>
          <p>{row.email}</p>
          <p>{row.mobileNumber}</p>
        </div>
      ),
      width: "300px",
    },
    {
      name: "Role",
      id: "designation",
      selector: (row, index) => row.designation,
    },
    {
      name: "Assign Employee to Admin",
      width: "220px",
      cell: (row) => (
        // <div className='w-[9rem] h-[2.5rem]  border border-solid border-[#D1D4D7] rounded-[0.5rem] px-[0.4rem]'>
        //   <select className='border-none bg-transparent w-full h-full text-[#8888A3] outline-none '>
        //     <option>Satyendra</option>
        //     <option>Mustaq MD Ahmed</option>
        //   </select>

        //   {/* <Select
        //     size='sm'
        //     className=' w-full'
        //     label={<p className=' text-[#8888A3]'>Select Employee</p>}>
        //     <Option>Satyendra</Option>
        //     <Option>Mustaq md Ahmed</Option>
        //   </Select> */}
        // </div>

        <div className=''>
          <Select
            size='md'
            label='Select Employee'
            className=''
            // defaultValue={row.currentLeadStatus}
            value={row.currentLeadStatus}>
            <Option>Satyendra Prajapathi</Option>
            <Option>Md Mutaq Ahmed</Option>
            <Option>Siva</Option>
          </Select>
        </div>
      ),
    },
    {
      name: "Status",
      width: "150px",
      sortable: true,

      cell: (row) => (
        <div
          className={`${
            row.status === "active"
              ? "bg-[#ECFDF3]  text-[#00C041]"
              : "bg-[#E1D6D5] text-[#8888A3]"
          } w-[4.5rem] py-[2px]  rounded-[1rem] flex flex-row justify-center items-center gap-[6px] `}>
          <Icon
            icon='octicon:dot-fill-16'
            className={`${
              row.status === "active" ? "text-[#00C041]" : "text-[#1A1616]"
            }`}
          />
          <span
            className={`text-[0.7rem] font-[500] leading-3 capitalize ${
              row.status === "active" ? "text-[#00C041]" : "text-[#8888A3]"
            }`}>
            {row.status}
          </span>
        </div>
      ),
    },
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <div className={`flex flex-row items-center gap-[1rem]`}>
          <button
            onClick={() => navigate(`/employee/${row._id}`)}
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='mdi:eye' />
          </button>

          <Popup
            modal
            position={"center center"}
            trigger={
              <button
                style={{ border: "0.727px solid #D9D9D9" }}
                className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
                <Icon icon='material-symbols:delete-rounded' />
              </button>
            }>
            {(close) => <DeleteUserConfirmation close={close} />}
          </Popup>

          <button
            onClick={() => navigate(`/employee/${row._id}`)}
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='ic:baseline-edit' />
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

  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const { getAccessToken } = useAuth();

  const fetchEmployeeDetails = async () => {
    const token = await getAccessToken();

    const url = AdminAuthorURL.employee.getAllEmployees(searchKey, page);

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, options);

    const responseData = await response.json();

    console.log(responseData);

    if (response.ok) {
      const employeesArray = responseData.response.limitedData;

      setEmployeeData(employeesArray);

      setTotalList(responseData.response.totalData);
    } else {
      setEmployeeData([]);
    }
  };

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const handleUserInput = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    console.log("search input is triggered");
    fetchEmployeeDetails();
  }, [searchKey, page]);

  return (
    <div className='flex flex-col   lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow   '>
      <div className='py-[1rem] lg:p-[1.5rem]'>
        <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem]'>
          List of the employees
        </h1>
      </div>

      <div>
        <div className='flex flex-col gap-[1rem] lg:border-y lg:border-solid lg:border-[#D1D4D7] lg:p-[1rem]  xl:pl-[5rem] xl:pr-[1.5rem]   lg:flex-row lg:items-center lg:justify-between'>
          <h1 className='text-[#8888A3] text-[0.8rem] font-[700] lg:text-[1rem] '>
            List of the employees
          </h1>

          <div className='flex flex-col lg:flex-row      gap-[1rem]'>
            <div className='flex flex-row h-[2.5rem] w-full '>
              <input
                type='text'
                value={searchKey}
                onChange={handleUserInput}
                className='flex-1 xl:w-[15rem] outline-none border-r-0  border-[0.5px] border-solid border-[#D1D4D7] rounded-s-[0.5rem] px-[1rem] py-[0.5rem] text-black font-[500] text-[0.7rem]  placeholder-[#D1D4D7]'
                placeholder='Search by Name or Phone or Email'
              />
              {/* <input
                  type='text'
                  placeholder='Search by Name or Phone or Email'
                  className='flex-1  items-center   h-full rounded-s-[0.5rem] border-[0.5px] border-solid border-[#D1D4D7] border-r-0 outline-none placeholder:text-[#D1D4D7]'
                /> */}

              <button
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #C5090A",
                }}
                className='h-full px-[1.3rem] rounded-e-[0.5rem]  text-white text-[0.7rem] font-[600]'>
                Search
              </button>
            </div>

            <button
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #C5090A",
              }}
              className='text-white flex flex-row items-center justify-center gap-[0.6rem] h-[2.5rem] w-full lg:w-[8rem] shrink-0 rounded-[0.5rem] '>
              <Icon
                icon='humbleicons:download-alt'
                className='text-[1rem] lg:text-[1.5rem]'
              />

              <span className='font-[700] text-[0.7rem]'>Export</span>
            </button>

            <Link to='create' end=''>
              <button
                onClick={notify}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #C5090A",
                }}
                className='text-white flex flex-row items-center justify-center gap-[0.6rem] h-[2.5rem] w-full lg:px-[0.5rem] lg:w-[10rem] xl:w-[16rem] rounded-[0.5rem] grow   '>
                <Icon
                  icon='material-symbols:add'
                  className='text-[1rem] lg:text-[1.5rem]'
                />

                <span className='font-[700] text-[0.7rem]'>
                  Add New Employee
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <DataTable
            columns={columns}
            data={employeeData}
            customStyles={customStyles}
            pagination
            paginationComponent={() =>
              CustomPagination({
                rowsPerPage: 10,
                rowCount: totalList,
                currentPage: page,
                onChangePage: setPage,
              })
            }
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EmployeeList;

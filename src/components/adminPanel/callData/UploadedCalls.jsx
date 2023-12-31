import { useState, useRef, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_red.css";
import { Icon } from "@iconify/react";

import { Select, Option } from "@material-tailwind/react";
import DataTable from "react-data-table-component";

import CustomPagination from "../../../helpers/CustomPagination";
import CustomCheckbox from "../../../helpers/CustomCheckbox";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";
import { useAuth } from "../../../stores/AuthContext";

const UploadedCalls = () => {
  const [callsData, setCallsData] = useState([]);
  const [fromDate, setFromDate] = useState(null);

  const [endDate, setEndDate] = useState(null);
  const dateOptions = {
    mode: "range",
    format: "d-m-Y",
  };

  const selectRef = useRef(null);

  const [searchKey, setSearchKey] = useState("");

  const [page, setPage] = useState(1);
  const [totalList, setTotalList] = useState();

  const [status, setStatus] = useState("");

  const { getAccessToken } = useAuth();

  const fetchCallData = async () => {
    try {
      const token = await getAccessToken();

      console.log(status, "s");

      const url = AdminAuthorURL.callData.fetchCalls(searchKey, status, page);

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseData = await response.json();

      if (response.ok) {
        setCallsData(responseData.response.limitedData);
        setTotalList(responseData.response.totalData);
        console.log(response);

        console.log(responseData, "uploaded calls data received");
      } else {
        setCallsData([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCallData();
  }, [page, searchKey, status]);

  const handleDateChange = (selectedDates) => {
    console.log(selectedDates.length);

    if (selectedDates.length === 1) {
      setFromDate(selectedDates[0]);
    }
    if (selectedDates.length === 2) {
      setEndDate(selectedDates[1]);
    }
  };

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
        <div className='flex flex-row items-center gap-[1rem]'>
          {/* <img src={row.image} className={"h-[3rem] w-[3rem] rounded-full"} /> */}
          <p>{row.callerInfo.name}</p>
        </div>
      ),
      width: "270px",
    },
    {
      name: "Caller Contact Information",
      cell: (row) => (
        <div className='flex flex-col gap-[0.2rem]'>
          <p>{row.callerInfo.email}</p>
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
      name: "Status",
      id: "status",
      selector: (row) => row.status,
      width: "140px",
    },
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <div>
          <button
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='material-symbols:delete-rounded' />
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

  console.log(callsData);
  return (
    <div className='flex flex-col gap-[1rem] w-full '>
      <div className='flex flex-col md:flex-row md:self-end gap-[1rem] lg:px-[2.5rem] xl:px-[4.5rem]'>
        <div className='flex flex-row items-center gap-[1rem]'>
          <button className='rounded-[4px] flex flex-row items-center gap-[0.5rem] border border-solid border-[#D1D4D7] h-[1.9rem] px-[0.8rem] text-[#8888A3]  '>
            <Icon icon='lucide:filter' className='text-[1rem]' />
            <span className='text-[0.6rem]'>Filter</span>
          </button>
          <Flatpickr
            placeholder='Select Date'
            className='form-control w-full outline-none border border-solid border-[#D1D4D7] placeholder:text-[#8888A3]  px-[0.8rem] text-[0.6rem] h-[1.9rem] '
            options={dateOptions}
            onChange={(e) => handleDateChange(e)}
          />

          <div className='rounded-[4px] flex flex-row items-center border border-solid border-[#D1D4D7] h-[1.9rem] pr-[0.8rem]'>
            <select
              ref={selectRef}
              className='border-none outline-none text-[#8888A3] text-[0.6rem] px-[0.8rem]'>
              <option>Bulk Action</option>
              <option>Single</option>
            </select>
          </div>
        </div>

        <div className='w-full flex flex-row h-[2.5rem] md:w-[20rem]'>
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder='Search by Name or Phone or Email'
            type='text'
            className='flex-1 h-full  outline-none border-r-0 border-[0.5px] border-solid border-[#D1D4D7] rounded-s-[0.5rem] px-[0.5rem] text-[0.7rem] font-[500] text-[#8888A3] placeholder-[#8888A3]'
          />

          <button
            onClick={() => fetchCallData()}
            type='button'
            className='bg-[#C5090A] rounded-e-[0.5rem] px-[1.2rem] text-white text-[0.7rem] font-[500]'>
            Search
          </button>
        </div>
      </div>

      <div className='lg:px-[3em]'>
        <DataTable
          columns={columns}
          data={callsData}
          customStyles={customStyles}
          pagination
          paginationComponent={CustomPagination}
          selectableRows
          selectableRowsComponent={CustomCheckbox}
        />
      </div>
    </div>
  );
};

export default UploadedCalls;

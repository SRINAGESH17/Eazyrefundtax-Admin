import { useState, useRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Icon } from "@iconify/react";

import { Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import employeeProfile from "../../assets/employeeProfile.png";
import CustomPagination from "../../helpers/CustomPagination";
import PhoneInput from "react-phone-number-input";
import { useAuth } from "../../stores/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminAuthorURL } from "../../baseUrl/BaseUrl";

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

const AdminSubAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [subAdminData, setSubAdminData] = useState([]);

  const [adminDetails, setAdminDetails] = useState({});
  const [adminView, setAdminView] = useState(false);

  const [searchKey, setSearchKey] = useState("");

  const [page, setPage] = useState(1);
  const [totalList, setTotalList] = useState();

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    photo: "",
    state: "",
    zipCode: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm({ defaultValues: values });

  const [image, selectImage] = useState();

  const [imageError, setImageError] = useState(false);
  const [subadminId, setSubAdminId] = useState();
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const [isPasswordMatch, setPasswordStatus] = useState(true);

  const imageRef = useRef(null);
  const [isImageSelected, setImageSelectionStatus] = useState(false);

  const [mobileNumber, setMobileNumber] = useState();

  const [permissions, setPermissions] = useState({
    employeeData: false,
    callData: false,
    document: false,
    taxType: false,
    invoice: false,
    clients: false,
    sms: false,
  });

  const { getAccessToken } = useAuth();

  const deleteSubAdmin = async (id) => {
    try {
      const token = await getAccessToken();

      console.log(id, "delete id received");

      const url = AdminAuthorURL.subAdmin.deleteSubAdmin(id);

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseObj = await response.json();

      console.log(response, "delete successfully");
      console.log(responseObj);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchSubAdminById = async (id) => {
    try {
      const token = await getAccessToken();

      const url = AdminAuthorURL.subAdmin.fetchSubAdminById(id);

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData, "specific response ");
        setAdminDetails(responseData.response);

        reset({
          name: responseData.response.name,
          email: responseData.response.email,
          mobileNumber: responseData.response.mobileNumber,
          photo: responseData.response.photo,
          state: responseData.response.state,
          zipCode: responseData.response.zipCode,
          permissions: responseData.response.permissions,
          password: responseData.response.password,
        });

        setPermissions(responseData.response.permissions);
        selectImage(responseData.response.photo);
      } else {
        setAdminDetails({});
      }
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    {
      name: "SL",
      cell: (row, index) => (page - 1) * 10 + index + 1,
    },
    {
      name: "Sub-admin ID",
      id: "id",
      selector: (row) => row.id,

      width: "120px",
    },
    {
      name: "Sub-Admin Name",
      cell: (row) => (
        <div className='flex flex-row items-center gap-[1rem]'>
          <img src={row.photo} className={"h-[3rem] w-[3rem] rounded-full"} />
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
      name: "Address",
      id: "state",
      selector: (row) => row.state,
      width: "200px",
    },
    {
      name: "Pin code",
      id: "zipCode",
      selector: (row) => row.zipCode,
    },

    {
      name: "Status",
      width: "150px",

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
            onClick={() => {
              fetchSubAdminById(row._id);
              setAdminView(true);

              setSubAdminId(row._id);
            }}
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='material-symbols:edit' />
          </button>

          <button
            onClick={() => deleteSubAdmin(row._id)}
            style={{ border: "0.727px solid #D9D9D9" }}
            className='bg-[#FFF] rounded-[7.23px] flex justify-center items text-[1.1rem] text-[#000000] p-[0.4rem]'>
            <Icon icon='material-symbols:delete-rounded' />
          </button>
        </div>
      ),
    },
  ];

  const sampleData = [
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "active",
    },
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "active",
    },
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "inActive",
    },
    {
      adminId: "12345",
      image: employeeProfile,
      name: "Manikanta Putta",
      email: "manikantaputta@gmail.com",
      phoneNumber: "2711389",
      address: "Telangana",
      pincode: 500084,
      status: "inActive",
    },
  ];

  const updateData = async (data) => {
    console.log("updata data called", data, image);
    try {
      setPasswordStatus(true);
      const token = await getAccessToken();

      const url = AdminAuthorURL.subAdmin.updateSubAdmin(subadminId);

      console.log(mobileNumber);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("zipCode", data.zipCode);
      formData.append("password", data.password);
      formData.append("state", data.state);
      formData.append("mobileNumber", data.mobileNumber);
      formData.append("photo", image);
      formData.append("permissions", JSON.stringify(permissions));

      console.log();

      const options = {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      const responseObj = await response.json();

      if (response.ok) {
        console.log(response);

        console.log(responseObj);
        toast.success(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose:5000
        });

        reset({
          name: "",
          email: "",
          mobileNumber: "",
          password: "",
          confirmPassword: "",
          photo: "",
          designation: "",
          role: "",
          identifyType: "",
          identityNumber: "",
          state: "",
          zipCode: "",
        });
        selectImage();
        setMobileNumber();
        selectImage();

        setPermissions({
          employeeData: false,
          callData: false,
          document: false,
          taxType: false,
          invoice: false,
          clients: false,
          sms: false,
        });

        setConfirmPassword("");

        console.log(response, "response");
      } else {
        toast.error(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose:5000
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createSubAdmin = async (data) => {
    try {
      setPasswordStatus(true);
      setImageError(false);
      const token = await getAccessToken();

      const url = AdminAuthorURL.subAdmin.createSubAdmin;

      console.log("create subadmin is called");

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("zipCode", data.zipCode);
      formData.append("password", data.password);
      formData.append("state", data.state);
      formData.append("mobileNumber", data.mobileNumber);
      formData.append("photo", image);
      formData.append("permissions", JSON.stringify(permissions));

      console.log();

      const options = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const responseObj = await response.json();

      if (response.ok) {
        console.log(response);

        console.log(responseObj);
        toast.success(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose:5000
        });

        reset({
          name: "",
          email: "",
          mobileNumber: "",
          password: "",
          confirmPassword: "",
          photo: "",
          designation: "",
          role: "",
          identifyType: "",
          identityNumber: "",
          state: "",
          zipCode: "",
        });
        selectImage();
        setMobileNumber();
        selectImage();

        setPermissions({
          employeeData: false,
          callData: false,
          document: false,
          taxType: false,
          invoice: false,
          clients: false,
          sms: false,
        });

        setConfirmPassword("");

        console.log(response, "response");
      } else {
        toast.error(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose:5000
        });
      }
    } catch (e) {
      toast.success(e.message, {
        position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose:5000
      });
      console.log(e);
    }
  };

  const submitData = async (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordStatus(false);
    } else {
      console.log(adminView);
      if (adminView) {
        updateData(data);
      } else {
        createSubAdmin(data);
      }
    }
  };

  const getSubAdminDetails = async () => {
    try {
      setImageSelectionStatus(false);
      const token = await getAccessToken();

      const url = AdminAuthorURL.subAdmin.fetchSubAdmin(searchKey, page);

      console.log(token, "token received");

      console.log(url, "url is fine");

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      if (response.ok) {
        const responseData = await response.json();

        setTotalList(responseData.response.totalData);

        setSubAdminData(responseData.response.limitedData);

        console.log(responseData, "response Data received");
      } else {
        setSubAdminData([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSubAdminDetails();
  }, [page, searchKey]);

  const loadImage = () => {
    // Check if the provided value is a URL or a File
    if (typeof image === "string") {
      // If it's a URL, set the image source directly
      return image;
    } else if (image instanceof File) {
      // If it's a File, create an object URL and set it as the image source
      const objectUrl = URL.createObjectURL(image);
      return objectUrl;

      // Clean up the object URL when the component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  console.log(subAdminData, "sub-admin-data");

  console.log(page, "page changed");

  const contextClass = {
    success: "bg-[#00C041] text-white",
    error: "bg-red-600 text-white",
    info: "bg-gray-600 text-white",
    warning: "bg-orange-400 text-white",
    default: "bg-indigo-600 text-white",
    dark: "bg-white-600 font-gray-300 text-white",
  };

  return (
    <div className='font-lato m-[1.2rem] lg:m-[2.5rem] bg-[#FAFAFA]'>
      <div className='flex flex-col   lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow   '>
        <div>
          <div className='py-[1rem] lg:p-[1.5rem]'>
            <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem]'>
              Sub Admin
            </h1>
          </div>

          <div className='flex flex-col gap-[1rem] lg:mx-[1.7rem]  lg:border-solid lg:border-[0.5px] lg:border-[#D1D4D7] lg:rounded-[0.6rem]'>
            <form
              onSubmit={handleSubmit(submitData)}
              className='flex flex-col gap-[1rem] lg:gap-[1.5rem] lg:pb-[1.5rem]'>
              <div className='flex flex-row items-center justify-between lg:p-[1.5rem]'>
                <h1 className='text-[0.8rem] text-[#1A1616] font-[700] lg:text-[1rem]'>
                  {adminView ? "Update Sub-admin" : "Adding Sub-admin"}
                </h1>

                <div className='flex flex-row gap-[1rem]'>
                  {adminView && (
                    <button
                      onClick={() => {
                        setAdminView(false);
                        reset({
                          name: "",
                          email: "",
                          mobileNumber: "",
                          photo: "",
                          state: "",
                          zipCode: "",
                          password: "",
                        });

                        setPermissions({
                          employeeData: false,
                          callData: false,
                          document: false,
                          taxType: false,
                          invoice: false,
                          clients: false,
                          sms: false,
                        });

                        selectImage();
                      }}
                      type='button'
                      className='h-[2.3rem] lg:w-[6rem] px-[1rem] flex justify-center items-center bg-[#C5090A] rounded-[0.5rem] text-[#FFF] text-[0.5rem] lg:text-[0.8rem] font-[500]'>
                      Back
                    </button>
                  )}

                  <button
                    type='submit'
                    className='h-[2.3rem]  lg:w-[10rem] px-[2.5rem] lg:px-[1rem]  shrink-0 flex justify-center items-center bg-[#C5090A] rounded-[0.5rem] text-[#FFF] text-[0.5rem] lg:text-[0.8rem] font-[500]'>
                    {adminView ? "Save" : "Create Sub Admin"}
                  </button>
                </div>
              </div>

              <div className='flex flex-col xl:flex-row gap-[1.5rem]'>
                <div className='grid grid-cols-1 gap-[1rem]  lg:grid-cols-2 lg:gap-y-[1.5rem] lg:gap-x-[3rem] lg:px-[5rem] xl:w-[70%]'>
                  <div className='flex flex-col gap-[0.2rem]'>
                    <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      {...register("name", {
                        required: "This field is required",
                      })}
                      placeholder='Ex : Manikanta'
                      className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                    />
                    {errors.name && (
                      <p className='text-red-600 font-bold text-sm'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className='flex flex-col gap-[0.2rem]'>
                    <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                      Email
                    </label>

                    <div className='flex flex-row  border border-solid border-[#D1D4D7] h-[3.2rem] rounded-[0.5rem] '>
                      <div className='flex items-center pl-[1rem]'>
                        <Icon
                          icon='mdi:email'
                          className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                        />
                      </div>
                      <input
                        name='email'
                        {...register("email", {
                          required: "*This field is required.",
                          pattern: /^\S+@\S+$/i,
                        })}
                        type='email'
                        placeholder='Enter Email Address'
                        className='outline-none flex-1 rounded-[0.5rem] border-none px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                      />
                    </div>
                    {errors.email?.type === "required" && (
                      <p className='text-red-600 font-bold text-sm'>
                        {errors.email.message}
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className='text-sm font-bold text-red-600'>
                        Invalid email
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-[0.2rem]'>
                    <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                      Phone Number
                    </label>

                    <PhoneInputWithCountry
                      defaultCountry='IN'
                      name='mobileNumber'
                      control={control}
                      onChange={setMobileNumber}
                      className='outline-none cursor-pointer rounded-[0.5rem]  border border-solid border-[#D1D4D7] px-[1rem] py-0 text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                      rules={{
                        required: "*This field is required.",
                        validate: isValidPhoneNumber,
                      }}
                      style={{
                        height: "51.2px",
                        outline: "none ",
                      }}
                      placeholder='Enter Mobile Number'
                    />
                    {errors?.mobileNumber?.type === "required" && (
                      <div className='text-sm font-bold text-[#E92215]'>
                        {errors.mobileNumber.message}
                      </div>
                    )}
                    {errors?.mobileNumber?.type === "validate" && (
                      <div className='text-sm font-bold text-[#E92215]'>
                        Invalid Mobile Number
                      </div>
                    )}
                  </div>

                  {!adminView && (
                    <>
                      <div className='flex flex-col gap-[0.2rem]'>
                        <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                          Password
                        </label>

                        <div className='flex flex-row  border border-solid border-[#D1D4D7] h-[3.2rem] rounded-[0.5rem]'>
                          <div className='flex items-center pl-[1rem]'>
                            <Icon
                              icon='mdi:password'
                              className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                            />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            {...register("password", {
                              required: "This field is required",
                            })}
                            placeholder='Enter password'
                            className='outline-none flex-1  border-none px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                          />

                          <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='flex items-center pr-[1rem]'>
                            <Icon
                              icon={showPassword ? "mdi:eye" : "mdi:eye-off"}
                              className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                            />
                          </button>
                        </div>
                        {errors.password && (
                          <p className='text-red-600 font-bold text-sm'>
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div className='flex flex-col gap-[0.2rem]'>
                        <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                          Confirm Password
                        </label>

                        <div className='flex flex-row  border border-solid border-[#D1D4D7] rounded-[0.5rem] h-[3.2rem]'>
                          <div className='flex items-center pl-[1rem]'>
                            <Icon
                              icon='mdi:password'
                              className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                            />
                          </div>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirmPassword", {
                              required: "This field is required",
                            })}
                            placeholder='Enter password'
                            className='outline-none flex-1  border-none px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                          />

                          <button
                            type='button'
                            onClick={() =>
                              setConfirmPassword(!showConfirmPassword)
                            }
                            className='flex items-center pr-[1rem]'>
                            <Icon
                              icon={
                                showConfirmPassword ? "mdi:eye" : "mdi:eye-off"
                              }
                              className='text-[#E1D6D5] text-[1rem] lg:text-[1.5rem]'
                            />
                          </button>
                        </div>
                        {errors.password && (
                          <p className='text-red-600 font-bold text-sm'>
                            {errors.password.message}
                          </p>
                        )}
                        {!isPasswordMatch && (
                          <p className='text-red-600 font-bold text-sm'>
                            Password doesn't match
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <div className='flex flex-col gap-[0.2rem]'>
                    <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                      State
                    </label>

                    <input
                      type='text'
                      name='state'
                      {...register("state", {
                        required: "This field is required",
                      })}
                      placeholder='Ex : Texas'
                      className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                    />
                    {errors.state && (
                      <p className='text-red-600 font-bold text-sm'>
                        {errors.state.message}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-[0.2rem]'>
                    <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                      Zip Code
                    </label>

                    <input
                      type='text'
                      name='zipCode'
                      {...register("zipCode", {
                        required: "This field is required",
                      })}
                      placeholder='Ex : 535558'
                      className='outline-none rounded-[0.5rem] h-[3.2rem] border border-solid border-[#D1D4D7] px-[1rem] text-[0.7rem] lg:text-[0.9rem] placeholder:text-[0.7rem] font-[500] placeholder:text-[#E1D6D5]'
                    />
                    {errors.zipCode && (
                      <p className='text-red-600 font-bold text-sm'>
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='flex flex-col gap-[1rem] lg:px-[5rem] xl:px-0 lg:w-[30rem] xl:w-auto'>
                  <label className='text-[#1A1616] text-[0.6rem] lg:text-[0.8rem] font-[600]'>
                    Sub-admin Image
                  </label>

                  {!adminView ? (
                    <input
                    
                      style={{ display: "none" }}
                      type='file'
                      accept='image/*'
                      control={control}
                      ref={imageRef}
                      onChange={({ target: { files } }) => {
                        if (files[0]) {
                          selectImage(files[0]);
                        }
                      }}
                    />
                  ) : (
                    <input
                      style={{ display: "none" }}
                      type='file'
                      accept='image/*'
                      ref={imageRef}
                      onChange={({ target: { files } }) => {
                        if (files[0]) {
                          selectImage(files[0]);
                        }
                      }}
                    />
                  )}

                  <div className='flex flex-col gap-[1rem] md:w-[11rem]  relative '>
                    <button
                      type='button'
                      onClick={() => {
                        console.log("edit button is clicked");
                        imageRef.current.click();
                      }}
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
                      }}
                      className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-1%] lg:right-[-1rem] flex justify-center items-center'>
                      <Icon
                        icon='material-symbols:edit'
                        className='text-[1.1rem] text-[#000000]'
                      />
                    </button>
                    {adminView ? (
                      <img
                        src={loadImage()}
                        className='h-[9rem]   w-auto rounded-[0.5rem] '
                      />
                    ) : (
                      <img
                        src={
                          (image && URL.createObjectURL(image)) ||
                          employeeProfile
                        }
                        className='h-[9rem]   w-auto rounded-[0.5rem] '
                      />
                    )}

                    <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
                      {values.name}
                    </p>
                  </div>
                  {errors.image && (
                    <p className='text-red-600 font-bold text-sm'>
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='lg:px-[5rem] flex flex-col gap-[0.5rem]'>
                <p className='text-[#1A1616] text-[1rem] lg:text-[1.2rem] font-[500]'>
                  Permissions
                </p>

                <div className='lg:border-[1.067px] lg:border-solid lg:border-[#D1D4D7] grid grid-cols-2  sm:grid-cols-3   xl:grid-cols-5  gap-[1rem] lg:p-[1.5rem] lg:rounded-[1.2rem]'>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.employeeData}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          employeeData: e.target.checked,
                        })
                      }
                      id='leads'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='leads'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Employee data
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.callData}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          callData: e.target.checked,
                        })
                      }
                      id='callData'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='callData'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Call data
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.document}
                      id='document'
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          document: e.target.checked,
                        })
                      }
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='document'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Document
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.taxType}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          taxType: e.target.checked,
                        })
                      }
                      id='taxType'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='taxType'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Tax Type
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.invoice}
                      id='invoice'
                      color='pink'
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          invoice: e.target.checked,
                        })
                      }
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='invoice'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Invoice
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0  cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.registeredClients}
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          registeredClients: e.target.checked,
                        })
                      }
                      id='registeredClients'
                      color='pink'
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='registeredClients'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      Registered Clients
                    </label>
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                    }}
                    className='flex flex-row  items-center shrink-0 cursor-pointer rounded-[0.9rem] border-[1.067px]  border-solid border-[#D9D9D9] md:border-[#D1D4D7]     px-[0.8rem] lg:px-[1rem] py-[4px]'>
                    <Checkbox
                      checked={permissions.SMS}
                      id='SMS'
                      color='pink'
                      onChange={(e) =>
                        setPermissions({
                          ...permissions,
                          sms: e.target.checked,
                        })
                      }
                      className='h-[0.8rem] w-[0.8rem] lg:h-[1rem] lg:w-[1rem] border border-solid border-[#858585] rounded-[2px]'
                    />

                    <label
                      htmlFor='SMS'
                      className='text-[#64646E]  text-[0.7rem] md:text-[0.8rem] font-[500]'>
                      SMS
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='py-[3rem] '>
          <div className='lg:px-[1.5rem] lg:py-[1rem] lg:border lg:border-solid lg:border-[#D1D4D7]   flex flex-col gap-[1rem] lg:flex-row lg:items-center  lg:justify-between'>
            <div className='flex flex-row h-[2.5rem] w-full '>
              <input
                type='text'
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className='flex w-full lg:w-[15rem] outline-none border-r-0  border-[0.5px] border-solid border-[#D1D4D7] rounded-s-[0.5rem] px-[1rem] py-[0.5rem] text-black font-[500] text-[0.7rem]  placeholder-[#D1D4D7]'
                placeholder='Search by Name or Phone or Email'
              />
             

              <button
                style={{
                  background: "#C5090A",
                }}
                className='h-full px-[1.3rem] rounded-e-[0.5rem]  text-white text-[0.7rem] font-[600]'>
                Search
              </button>
            </div>

            <div className='flex flex-row items-center gap-[1rem]'>
              {/* <select
                className='border-none bg-transparent outline-none text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[500]  shrink-0'
                placeholder='Select Status'>
                <option disabled selected>
                  Select Status
                </option>
                <option>inProgress</option>
                <option>Completed</option>
              </select> */}

              <button className='rounded-[0.5rem] w-full sm:w-[8rem] flex flex-row justify-center items-center gap-[0.6rem] p-[0.5rem] bg-[#C5090A] text-[#FFF] font-[700] text-[0.7rem] '>
                <Icon
                  icon='humbleicons:download-alt'
                  className='text-[1.5rem]'
                />

                <span>Export</span>
              </button>
            </div>
          </div>

          <div>
            <DataTable
              columns={columns}
              data={subAdminData}
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
      </div>
      <ToastContainer
        icon={true}
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-2 h-[4rem] text-white  text-[1rem] font-[500]  rounded-tr justify-between overflow-hidden cursor-pointer"
        }
      />
    </div>
  );
};

export default AdminSubAdmin;

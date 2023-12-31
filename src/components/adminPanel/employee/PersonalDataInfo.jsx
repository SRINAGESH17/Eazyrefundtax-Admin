import { useState, useRef, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";
import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";
import employeeProfile from "../../../assets/employeeProfile.png";

const PersonalDataInfo = () => {
  const [employeeDetails] = useOutletContext();

  const { id } = useParams();

  console.log(employeeDetails);

  const {
    designation,
    email,
    identity,
    mobileNumber,
    name,
    photo,
    state,
    zipCode,
  } = employeeDetails;

  console.log(employeeDetails, "employee details");
  const imageRef = useRef(null);
  const identityFileRef = useRef(null);

  const [editProfile, setEditProfile] = useState(false);

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    if (employeeDetails) {
      setUserDetails({
        name: employeeDetails.name,
        role: employeeDetails.designation,
        email: employeeDetails.email,
        mobileNumber: employeeDetails.mobileNumber,
        idType: employeeDetails.identity?._IDType,
        idUrl: employeeDetails.identity?.url,
        idNumber: employeeDetails.identity?._IDNumber,
        photo: employeeDetails.photo,
        state: employeeDetails.state,
        zipCode: employeeDetails.zipCode,
      });
    }
  }, [employeeDetails]);

  console.log(userDetails, "input user details");

  const { getAccessToken } = useAuth();

  const updateData = async (e) => {
    e.preventDefault();

    try {
      const token = await getAccessToken();

      const {
        name,
        role,
        mobileNumber,
        email,
        idType,
        idNumber,
        photo,
        idUrl,
        state,
        zipCode,
      } = userDetails;

      const url = AdminAuthorURL.employee.updateEmployee(id);
      const formData = new FormData();

      formData.append("name", name);
      formData.append("mobileNumber", mobileNumber);
      formData.append("email", email);
      formData.append("photo", photo);
      formData.append("state", state);
      formData.append("zipCode", zipCode);
      formData.append("_IDURL", idUrl);
      formData.append("designation", role);

      formData.append("identityType", idType);
      formData.append("identityNumber", idNumber);

      console.log(formData, "form-data");

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
        toast.success(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          draggable: true,
          autoClose:5000
        });
      } else {
        toast.error(responseObj.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme:"colored",
          draggable:true,
          autoClose:5000
        });
      }

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const loadImage = (image) => {
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

  const contextClass = {
    success: "bg-[#00C041]",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <div className='flex flex-col lg:flex-row lg:items-start gap-[3rem] lg:max-w-[700px] xl:max-w-[920px]  '>
      <div className='flex flex-row w-full lg:w-auto  lg:flex-col lg:gap-[2.8rem]  xl:px-[4rem] lg:px-[2rem] gap-[2rem] '>
        <div className='flex flex-col gap-[1rem] md:w-[11rem]  relative'>
          <input
            ref={imageRef}
            type='file'
            accept='image/*'
            style={{ display: "none" }}
            onChange={({ target: { files } }) => {
              if (files[0]) {
                setUserDetails({
                  ...userDetails,
                  photo: files[0],
                });
              }
            }}
          />
          <button
            type='button'
            onClick={() => imageRef.current.click()}
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-5%] flex justify-center items-center'>
            <Icon
              icon='material-symbols:edit'
              className='text-[1.1rem] text-[#000000]'
            />
          </button>
          <img
            src={
              (userDetails?.photo && loadImage(userDetails?.photo)) ||
              employeeProfile
            }
            className='h-[9rem]   w-auto rounded-[0.5rem] '
          />
          <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
            {name}
          </p>
        </div>

        <div className='flex flex-col md:w-[11rem] gap-[1rem] relative'>
          <button
            type='button'
            onClick={() => identityFileRef.current.click()}
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-5%] flex justify-center items-center'>
            <Icon
              icon='material-symbols:edit'
              className='text-[1.1rem] text-[#000000]'
            />
          </button>

          <input
            ref={identityFileRef}
            type='file'
            accept='image/*'
            style={{ display: "none" }}
            onChange={({ target: { files } }) => {
              if (files[0]) {
                setUserDetails({
                  ...userDetails,
                  idUrl: files[0],
                });
              }
            }}
          />

          <img
            // src={identity?.url}

            src={
              (userDetails?.idUrl && loadImage(userDetails?.idUrl)) ||
              employeeProfile
            }
            className='h-[9rem] w-full  rounded-[0.5rem]'
          />
          <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
            {identity?._IDType}
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-[1rem] lg:gap-[1.5rem] w-full lg:grow lg:bg-[#fff] lg:border lg:border-solid lg:border-[#D1D4D7] lg:shadow-formShadow lg:p-[1.5rem] lg:rounded-[1.2rem]  xl:p-[2.5rem]'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700]'>
            Personal Data
          </h1>

          <button onClick={() => setEditProfile(!editProfile)}>
            <Icon icon='material-symbols:edit' />
          </button>
        </div>

        <form
          onSubmit={updateData}
          className='flex flex-col gap-[1rem] lg:gap-[1.5rem]'>
          <div className='flex flex-col gap-[1rem]'>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Personal Data
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {name}
                </p>
              )}
            </div>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Role
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.role}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, role: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {designation}
                </p>
              )}
            </div>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Mobile Number
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.mobileNumber}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      mobileNumber: e.target.value,
                    })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {mobileNumber}
                </p>
              )}
            </div>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Email address
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {email}
                </p>
              )}
            </div>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                State
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.state}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, state: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {state}
                </p>
              )}
            </div>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Zip Code
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.zipCode}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, zipCode: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {zipCode}
                </p>
              )}
            </div>

            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Document
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.idType}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, idType: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {identity?._IDType}
                </p>
              )}
            </div>
            <div
              style={{ background: "rgba(209, 212, 215, 0.2)" }}
              className='py-[0.5rem] px-[1rem] lg:px-[1.5rem] w-full rounded-[0.5rem] flex flex-col gap-[0.1rem]'>
              <label className='text-[#D1D4D7] text-[0.5rem] lg:text-[0.7rem] font-[500]'>
                Documents Number
              </label>

              {editProfile ? (
                <input
                  type='text'
                  value={userDetails.idNumber}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, idNumber: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {identity?._IDNumber}
                </p>
              )}
            </div>
          </div>

          {editProfile && (
            <button
              type='submit'
              className='bg-[#C5090A] text-[#fff] text-[0.8rem] w-[7rem] py-[0.5rem] rounded-[0.5rem] self-end '>
              Save
            </button>
          )}
        </form>
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

export default PersonalDataInfo;

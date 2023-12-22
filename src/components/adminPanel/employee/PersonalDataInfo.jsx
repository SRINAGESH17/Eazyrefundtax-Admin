import { useState, useRef, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

import { useAuth } from "../../../stores/AuthContext";
import { AdminAuthorURL } from "../../../baseUrl/BaseUrl";

const PersonalDataInfo = () => {
  const [employeeDetails] = useOutletContext();

  const { id } = useParams();

  const { designation, email, identity, mobileNumber, name, photo } =
    employeeDetails;

  console.log(employeeDetails,"employee dertails");

  // const identityDetails = {
  //   identityPhoto: identity.url,
  //   identityType: identity._IDType,
  // };

  const imageRef = useRef(null);

  const [editProfile, setEditProfile] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: name,
    role: designation,
    phoneNumber: mobileNumber,
    email: email,
    idType: identity?._IDType,
    idNumber: identity?._IDNumber,
    employeePhoto: photo,
    idUrl: identity?.__IDURL,
  });

  

  const [image, selectImage] = useState();

  console.log(userDetails, "input user details");

  const { getAccessToken } = useAuth();

  const updateData = async (e) => {
    e.preventDefault();

    try {
      const token = await getAccessToken();

      const {
        name,
        role,
        phoneNumber,
        email,
        idType,
        idNumber,
        employeePhoto,
        idUrl,
      } = userDetails;

      const url = AdminAuthorURL.employee.updateEmployee(id);
      const formData = new FormData();

      formData.append("name", name);
      formData.append("mobileNumber", phoneNumber);
      formData.append("email", email);
      formData.append("photo", employeePhoto);
      formData.append("_IDURL", idUrl);
      formData.append("designation", role);

      formData.append("identityType", idType);
      formData.append("identityNumber", idNumber);
      // formData.append("state",data.state)
      // formData.append("zipCode",data.zipCode)

      const options = {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row lg:items-start gap-[3rem] lg:max-w-[700px] xl:max-w-[920px]  '>
      <div className='flex flex-row w-full lg:w-auto  lg:flex-col lg:gap-[2.8rem]  xl:px-[4rem] lg:px-[2rem] gap-[2rem] '>
        <div className='flex flex-col gap-[1rem] md:w-[11rem]  relative'>
          <input
            ref={imageRef}
            type='file'
            accept='image/*'
            value={userDetails.photo}
            style={{ display: "none" }}
            onChange={({ target: { files } }) => {
              if (files[0]) {
                selectImage(files[0]);
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
            src={(image && URL.createObjectURL(image)) || photo}
            className='h-[9rem]   w-full rounded-[0.5rem] '
          />
          <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
            {name}
          </p>
        </div>

        <div className='flex flex-col md:w-[11rem] gap-[1rem] relative'>
          <button
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-5%] flex justify-center items-center'>
            <Icon icon='mdi:eye' className='text-[1.1rem] text-[#000000]' />
          </button>
          <img
            src={identity?.url}
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
                  value={userDetails.phoneNumber}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, mobileNumber: e.target.value })
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
                Address
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
                  {/* {selectedUser.name} */}
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
    </div>
  );
};

export default PersonalDataInfo;

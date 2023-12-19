import { useState, useRef, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const PersonalDataInfo = () => {
  const [selectedUser] = useOutletContext();

  const { id } = useParams();

  console.log(selectedUser);

  const imageRef = useRef(null);

  const [editProfile, setEditProfile] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: selectedUser.name,
    role: selectedUser.role,
    phoneNumber: selectedUser.phoneNumber,
    email: selectedUser.email,
  });

  const [image, selectImage] = useState();

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
            src={(image && URL.createObjectURL(image)) || selectedUser.image}
            className='h-[9rem]   w-full rounded-[0.5rem] '
          />
          <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
            {selectedUser.name}
          </p>
        </div>

        <div className='flex flex-col md:w-[11rem] gap-[1rem] relative'>
          <button
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            className='h-[2rem] w-[2rem] rounded-[1.2rem] bg-[#FFF]   p-[7.23px] absolute top-[-5%] right-[-5%] flex justify-center items-center'>
            <Icon icon='mdi:eye' className='text-[1.1rem] text-[#000000]' />
          </button>
          <img
            src={selectedUser.image}
            className='h-[9rem] w-full  rounded-[0.5rem]'
          />
          <p className='text-[#8888A3] text-[0.8rem] lg:text-[1rem] font-[700] self-center'>
            Pan
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

        <form className='flex flex-col gap-[1rem] lg:gap-[1.5rem]'>
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
                  {selectedUser.name}
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
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {selectedUser.name}
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
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {selectedUser.name}
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
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {selectedUser.name}
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
                  {selectedUser.name}
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
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {selectedUser.name}
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
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className='border-none bg-transparent outline-none text-[0.5rem] lg:text-[0.7rem]'
                />
              ) : (
                <p className='text-[0.5rem] lg:text-[0.7rem] text-[#1A1616] font-[600]'>
                  {selectedUser.name}
                </p>
              )}
            </div>
          </div>

          {editProfile && (
            <button className='bg-[#C5090A] text-[#fff] text-[0.8rem] w-[7rem] py-[0.5rem] rounded-[0.5rem] self-end '>
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PersonalDataInfo;

const ForgotPassword = () => {
  return (
    <div className='font-lato p-[1.2rem] lg:p-[2.5rem]'>
      <div
        style={{ boxShadow: " 0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className='bg-[#fff] p-[1rem] lg:p-[2.5rem] flex flex-col gap-[1rem] lg:gap-[2.5rem] '>
        <h1 className='text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700]'>
          Change Password
        </h1>

        <form className='lg:max-w-[80%] flex flex-col gap-[1rem] lg:gap-[2.5rem]'>
          <div className='flex flex-col gap-[1rem]'>
            <div className='flex flex-col gap-[0.5rem]'>
              <label className='text-[#1A1616] text-[0.7rem] lg:text-[0.8rem] font-[500]'>
                Email Address
              </label>
              <input
                style={{
                  border: "1px solid var(--Global-Colors-Stroke, #D1D4D7)",
                  borderRadius: "8px",
                }}
                type='text'
                className='p-[1rem] outline-none '
              />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
              <label className='text-[#1A1616] text-[0.7rem] lg:text-[0.8rem] font-[500]'>
                Enter Old Password
              </label>
              <input
                style={{
                  border: "1px solid var(--Global-Colors-Stroke, #D1D4D7)",
                  borderRadius: "8px",
                }}
                type='text'
                className='p-[1rem] outline-none '
              />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
              <label className='text-[#1A1616] text-[0.7rem] lg:text-[0.8rem] font-[500]'>
                Enter New Password
              </label>
              <input
                style={{
                  border: "1px solid var(--Global-Colors-Stroke, #D1D4D7)",
                  borderRadius: "8px",
                }}
                type='text'
                className='p-[1rem] outline-none '
              />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
              <label className='text-[#1A1616] text-[0.7rem] lg:text-[0.8rem] font-[500]'>
                Confirm Password
              </label>
              <input
                style={{
                  border: "1px solid var(--Global-Colors-Stroke, #D1D4D7)",
                  borderRadius: "8px",
                }}
                type='text'
                className='p-[1rem] outline-none '
              />
            </div>
          </div>

          <div className='flex flex-row items-center gap-[1rem] lg:gap-[1.5rem] self-end'>
            <button className='bg-[#C5090A] rounded-[0.5rem] py-[1rem] px-[1.5rem] text-white text-[0.8rem]'>
              {" "}
              Change Password
            </button>
            <button className='bg-transparent border border-solid border-[#C5090A] text-[#C5090A] rounded-[0.5rem] py-[1rem] w-[10.5rem]  text-[0.8rem]'>
              {" "}
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

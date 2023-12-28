import { Outlet } from "react-router-dom";
import ContentBox from "../../../helpers/ContentBox";
import { NavLink } from "react-router-dom";
import dropDownIcon from "../../../assets/mingcute_down-fill.svg";

const TaxType = () => {
  return (
    <ContentBox>
      <div className="flex flex-col w-full">
        <div className="flex overflow-x-auto w-full">
          <div className="flex min-w-[125%] lg:min-w-[60%] h-12 justify-around pl-5 items-center text-[#808080] text-base font-amulya_medium">
            <NavLink
              to=""
              end
              className={({ isActive, isPending }) =>
                isPending
                  ? " h-full flex items-center"
                  : isActive
                  ? "border-b-2 border-[#C5090A] text-[#C5090A] h-full flex items-center"
                  : ""
              }
            >
              Tax year
            </NavLink>
            <NavLink
              to="/tax-type/year-doc"
              className={({ isActive, isPending }) =>
                isPending
                  ? " h-full flex items-center"
                  : isActive
                  ? "border-b-2 border-[#C5090A] text-[#C5090A] h-full flex items-center"
                  : ""
              }
            >
              Tax year document
            </NavLink>

            <NavLink
              to="/tax-type/year-return"
              className={({ isActive, isPending }) =>
                isPending
                  ? " h-full flex items-center"
                  : isActive
                  ? "border-b-2 border-[#C5090A] text-[#C5090A] h-full flex items-center"
                  : ""
              }
            >
              Tax year return type
            </NavLink>
          </div>
        </div>

        <div className="w-full px-3">
          <hr className="border-[1px] border-[#D1D4D7]" />
        </div>

        <div className="mt-4 pl-10">
          <p className="text-[#1A1616] text-base font-amulya_bold">Tax Type</p>
          <p className="text-[#8888A3] text-lg font-amulya_medium mt-5">
            Select to which type of tax add
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:pr-11 lg:h-28 h-48 justify-between mt-5 pl-10">
          <div className="flex flex-col lg:w-[48%]">
            <span className="text-base font-amulya_bold text-[#1A1616]">
              Select tax type
            </span>
            <div className="flex border-[#D1D4D7] border-[1px] justify-between items-center rounded-md px-6 py-3 mt-3">
              <span className="text-sm font-amulya_medium text-[#000]">
                Select tax type
              </span>
              <img src={dropDownIcon} alt="" />
            </div>
          </div>

          <div className="flex flex-col lg:w-[48%]">
            <span className="text-base font-amulya_bold text-[#1A1616]">
              Tax Return Document Type Name
              <span className="text-[#C5090A]">*</span>
            </span>
            <div className="flex border-[#D1D4D7] border-[1px] justify-between items-center rounded-md px-6 py-3 mt-3">
              <input type="text" className="outline-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:justify-end justify-center mt-5 pr-11 mb-5">
          <button className="rounded-lg py-2 px-9 text-white text-sm font-amulya_bold bg-[#C5090A] cursor-pointer hover:bg-[#853131]">
            Update
          </button>
        </div>
      </div>
      <Outlet />
    </ContentBox>
  );
};

export default TaxType;

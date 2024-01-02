import { Outlet } from "react-router-dom";
import ContentBox from "../../../helpers/ContentBox";
import { NavLink } from "react-router-dom";

const TaxType = () => {
  return (
    <ContentBox>
      <div className="flex flex-col w-full">
        <div className="flex overflow-x-auto w-full pt-4">
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
      </div>
      <Outlet />
    </ContentBox>
  );
};

export default TaxType;

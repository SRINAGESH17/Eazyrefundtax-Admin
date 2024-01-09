import { Outlet } from "react-router-dom";
import ContentBox from "../../../helpers/ContentBox";
import { NavLink } from "react-router-dom";

const ClientDocument = () => {
  return (
    <ContentBox>
      <div className="flex overflow-x-auto w-full pt-4 lg:pl-14">
        <div className="flex min-w-[125%] lg:min-w-[83%] h-12 justify-between pl-5 items-center text-[#808080] text-base font-amulya_medium">
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
            Client Documents
          </NavLink>
          <NavLink
            to="/client-document/pending-client-doc"
            className={({ isActive, isPending }) =>
              isPending
                ? " h-full flex items-center"
                : isActive
                ? "border-b-2 border-[#C5090A] text-[#C5090A] h-full flex items-center"
                : ""
            }
          >
            Pending Client Documents
          </NavLink>

          <NavLink
            to="/client-document/reviewer-uploaded-doc"
            className={({ isActive, isPending }) =>
              isPending
                ? " h-full flex items-center"
                : isActive
                ? "border-b-2 border-[#C5090A] text-[#C5090A] h-full flex items-center"
                : ""
            }
          >
            Reviewer Uploaded Documents
          </NavLink>
        </div>
      </div>

      <div className="w-full px-3 lg:pl-10 lg:pr-6">
        <hr className="border-[1px] border-[#D1D4D7]" />
      </div>
      <Outlet />
    </ContentBox>
  );
};

export default ClientDocument;

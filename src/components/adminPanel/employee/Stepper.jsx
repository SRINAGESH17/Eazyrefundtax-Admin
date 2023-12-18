import { NavLink, useLocation, useParams } from "react-router-dom";

const Stepper = () => {
  const location = useLocation();

  const { id } = useParams();
  return (
    <ul className='flex flex-row items-center gap-[2.5rem] border-b-[1.5px] border-solid border-[#D1D4D7] pb-[1rem]  lg:px-[1.5rem]'>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive && location.pathname === `/employee/${id}`
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={""}>
          Personal Data and Contact info
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#C5090A] border-b-[3px] border-solid border-[#C5090A] pb-[1rem]"
                : "text-[#8888A3]"
            } font-[700] text-[0.8rem] lg:text-[1rem]  `
          }
          to={"workData"}>
          Work Data
        </NavLink>
      </li>
    </ul>
  );
};

export default Stepper;

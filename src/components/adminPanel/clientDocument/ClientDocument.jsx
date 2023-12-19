import { Outlet } from "react-router-dom";

const stepOptions = [
  {
    label: "Client Documents",
    path: "client-documents",
  },
  {
    label: "Pending Client Documents",
    path: "client-documents",
  },
  {
    label: "Reviewer uploaded Documents",
    path: "client-documents",
  },
];

const ClientDocument = () => {
  return (
    <div>
      <div className='font-lato p-[1.2rem] lg:p-[2.5rem]'>
        <div className=' flex flex-col gap-[1rem] lg:gap-[2.5rem] lg:shadow-shadow '>
          {/* <UStepper stepOptions={stepOptions} /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientDocument;

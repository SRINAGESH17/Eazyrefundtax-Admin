import React from "react";
import { useMemo } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Icon } from '@iconify/react';
import { IconButton } from "@material-tailwind/react";

// default component options
const defaultComponentOptions = {
  rowsPerPageText: "Rows per page:",
  rangeSeparatorText: "of",
  noRowsPerPage: false,
  selectAllRowsItem: false,
  selectAllRowsItemText: "All",
};

// custom pagination component
export default function CustomPagination({
  rowsPerPage,
  rowCount,
  currentPage,
  direction,
  paginationRowsPerPageOptions = [10, 15, 20, 25, 30],
  paginationIconLastPage,
  paginationIconFirstPage,
  paginationIconNext,
  paginationIconPrevious,
  paginationComponentOptions,
  onChangeRowsPerPage,
  onChangePage = null,
}) {
  const handlePrevious = React.useCallback(
    () => currentPage > 1 && onChangePage(currentPage - 1),
    [currentPage, onChangePage]
  );
  const handleNext = React.useCallback(
    () => currentPage < numPages && onChangePage(currentPage + 1),
    [currentPage, onChangePage]
  );
  const goToPage = (page) => onChangePage(page);
  // console.log(currentPage)
  const numPages = useMemo(
    () => getNumberOfPages(rowCount, rowsPerPage),
    [rowCount, rowsPerPage]
  );
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === numPages;
  const options = { ...defaultComponentOptions, ...paginationComponentOptions };
  const range =
    currentPage === numPages
      ? `${firstIndex}-${rowCount} ${options.rangeSeparatorText} ${rowCount}`
      : `${firstIndex}-${lastIndex} ${options.rangeSeparatorText} ${rowCount}`;
  return (
    <div
      className="flex justify-between items-center gap-[1rem]  px-2 py-1 rouded mt-3 bg-white"
      style={{ width: "fit-content" }}
    >
      <Icon icon="material-symbols:arrow-back-ios-new-rounded" className="text-[#969696] text-[1.5rem] cursor-pointer" onClick={()=>handlePrevious()}  />
     
    
      <div className="flex space-x-4">
        {currentPage > 1 && (
         
          <IconButton
          onClick={() => goToPage(currentPage - 1)}
           className="text-[#969696] shadow-none hover:shadow-none focus:shadow-none w-[2rem] h-[2rem] text-[0.9rem] font-bold"
           style={{borderRadius: "6px",
            border: "1px solid #ECECEC",
            background: "#FFF"}}
          >

            {currentPage - 1}
          </IconButton>
        )}
      
        <IconButton
      
           className="text-white bg-[#BE0A23] shadow-none hover:shadow-none focus:shadow-none w-[2rem] h-[2rem] text-[0.9rem] font-bold"
           style={{borderRadius: "6px",
            border: "1px solid #ECECEC"}}
          >

            {currentPage}
          </IconButton>
        {currentPage < numPages && (
        
           <IconButton
           onClick={() => goToPage(currentPage + 1)}
           className="text-[#969696] shadow-none hover:shadow-none focus:shadow-none w-[2rem] h-[2rem] text-[0.9rem] font-bold"
           style={{borderRadius: "6px",
           border: "1px solid #ECECEC",
           background: "#FFF"}}
           >
 
             {currentPage + 1}{" "}
         
           </IconButton>
          
        )}
      </div>
      <Icon icon="material-symbols:arrow-back-ios-new-rounded" rotate={2} className="text-[#969696] text-[1.5rem] cursor-pointer" onClick={()=>handleNext()}  />

      
    </div>
  );
}

export function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

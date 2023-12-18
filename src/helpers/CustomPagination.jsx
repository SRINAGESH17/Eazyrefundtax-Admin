import React from "react";
import { useMemo } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
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
    <div className='flex flex-col lg:flex-row justify-between lg:items-center py-[1.6rem] px-[1rem]'>
      <p className='text-[#8888A3] text-[0.8rem] font-[500]'>
        {currentPage} - {lastIndex} of {numPages} items
      </p>
      <div className='flex flex-row justify-between self-start items-center gap-[1rem]  px-2 py-1 rounded mt-3 bg-white'>
        <button
          className='bg-#FFF] rounded-[0.5rem] border border-solid border-[#D1D4D7] py-[0.5rem] px-[0.8rem] text-[#8888A3] text-[0.8rem] font-[500]'
          onClick={() => handlePrevious()}>
          Previous
        </button>

        {/* <span className='border-[0.727px] border-solid  border-[#E1D6D5] rounded-[7.23px] p-[7.23px] text-[0.6rem]'>
          1
        </span> */}

        <div className='flex space-x-4'>
          {currentPage > 1 && (
            <span
              onClick={() => goToPage(currentPage - 1)}
              className='text-[#D1D4D7] bg-[#FFF] p-[7.23px] text-[0.7rem] flex justify-center items-center'
              style={{
                borderRadius: "7.273px",
                border: "0.727px solid #ECECEC",
              }}>
              {currentPage - 1}
            </span>
          )}

          <span
            className='text-[#D1D4D7] bg-[#FFF] p-[7.273px] text-[0.7rem] flex justify-center items-center '
            style={{
              borderRadius: "7.273px",
              border: "0.727px solid #ECECEC",
            }}>
            {currentPage}
          </span>
          {currentPage < numPages && (
            <span
              onClick={() => goToPage(currentPage + 1)}
              className='text-[#D1D4D7] bg-[#FFF] p-[7.23px] text-[0.7rem] flex justify-center items-center '
              style={{
                borderRadius: "7.273px",
                border: " 0.727px solid #ECECEC",
              }}>
              {currentPage + 1}{" "}
            </span>
          )}
        </div>
        <button
          className='bg-#FFF] rounded-[0.5rem] border border-solid border-[#D1D4D7] py-[0.5rem] px-[0.8rem] text-[#8888A3] text-[0.8rem] font-[500]'
          onClick={() => handleNext()}>
          Next
        </button>
      </div>
    </div>
  );
}

export function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

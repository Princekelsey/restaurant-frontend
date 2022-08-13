import React from "react";
import {
  Pagination as HeadlessPagination,
  PageButton,
} from "react-headless-pagination";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <HeadlessPagination
      className='flex items-center w-full h-10 text-sm select-none'
      currentPage={currentPage}
      edgePageCount={1}
      middlePagesSiblingCount={1}
      setCurrentPage={setCurrentPage}
      totalPages={totalPages}
      truncableClassName='w-10 px-0.5 text-center'
      truncableText='...'
    >
      <div className='flex items-center space-x-3 justify-center flex-grow'>
        <PageButton
          activeClassName='bg-[#323cf0] text-white'
          className='flex items-center justify-center h-11 w-11 cursor-pointer hover:bg-[#4c54ee] hover:text-white'
          inactiveClassName='bg-[#f3f4f5]'
        />
      </div>
    </HeadlessPagination>
  );
};

export default Pagination;

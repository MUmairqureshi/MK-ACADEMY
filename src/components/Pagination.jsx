import React from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const generatePagination = () => {
    const items = [];

    items.push(
      <Pagination.First key="paginationFirst" onClick={() => onPageChange(1)} />
    );

    items.push(
      <Pagination.Prev
        key="paginationPrev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
    );

    const maxVisiblePages = 5;
    const pageRange = 2;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      startPage = Math.max(currentPage - pageRange, 1);
      endPage = Math.min(currentPage + pageRange, totalPages);
      if (currentPage - startPage <= pageRange) {
        endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
      } else if (endPage - currentPage <= pageRange) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          key={`paginationItem${i}`}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    items.push(
      <Pagination.Next
        key="paginationNext"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    );

    items.push(
      <Pagination.Last
        key="paginationLast"
        onClick={() => onPageChange(totalPages)}
      />
    );
    return items;
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination>{generatePagination()}</Pagination>
    </div>
  );
};

export default CustomPagination;

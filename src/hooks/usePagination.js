// src/hooks/usePagination.js

export const usePagination = (totalItems, itemsPerPage, currentPage) => {
    const totalPages = Math.ceil(totalItems.length / itemsPerPage);
  
    const getPageData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {
        startIndex,
        endIndex,
        currentPageData: totalItems.slice(startIndex, endIndex),
        totalPages,
      };
    };
  
    const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
        return pageNumber;
      }
      return currentPage;
    };
  
    return { getPageData, handlePageChange, totalPages };
  };
  
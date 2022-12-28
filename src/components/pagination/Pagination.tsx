import ReactPaginate from 'react-paginate';

type PaginationPropsType = {
  onPageChange: (page: number) => void;
};

function Pagination({onPageChange}: PaginationPropsType): JSX.Element {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(evt) => onPageChange(evt.selected)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      // renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;

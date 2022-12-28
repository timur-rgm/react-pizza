import ReactPaginate from 'react-paginate';

function Pagination(): JSX.Element {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(evt) => console.log(evt)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
      // renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;

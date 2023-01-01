import { useDispatch } from 'react-redux';
import { setPage } from '../../store/filter/filterSlice';
import ReactPaginate from 'react-paginate';

function Pagination(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(evt) => dispatch(setPage(evt.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      // renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;

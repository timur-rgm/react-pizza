import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/filter/filterSlice';
import { getCurrentPage } from '../../store/filter/selectors';

function Pagination(): JSX.Element {
  const currentPage = useSelector(getCurrentPage);
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
      forcePage={currentPage - 1}
    />
  );
}

export default Pagination;

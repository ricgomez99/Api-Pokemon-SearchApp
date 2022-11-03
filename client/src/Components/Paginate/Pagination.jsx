import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageIndex } from "../../Redux/Actions/actions";
import "./pagination.css";

export const Pagination = (props) => {
  const [pages, setPages] = useState([0]);
  const [page, setPage] = useState();
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  let pageCount = Math.ceil(props.quantity / 9);

  const buildPagination = (pageIndex) => {
    setPage(pageIndex);

    let newPages = [];
    for (let i = 0; i < pageCount; i++) {
      newPages.push(i);
    }
    setPages(newPages);
    //   start = 0,
    //   end = pagesToDisplay;

    // if (pageIndex > (pagesToDisplay - 1) / 2) {
    //   start = pageIndex - (pagesToDisplay - 1) / 2;
    //   end = start + pagesToDisplay;
    // }

    // if (pageIndex > pageCount - (pagesToDisplay + 1) / 2) {
    //   start = pageCount - pagesToDisplay;
    //   end = pageCount;
    // }

    // for (let i = start; i < end; i++) {
    //   newPages.push(i);
    // }
    // setPages(newPages);
  };
  useEffect(() => {
    buildPagination(0);
  }, [pokemons]);

  useEffect(() => {
    dispatch(setPageIndex(page + 1));
  }, [dispatch, page]);

  return (
    <div className="pagination">
      <button
        disabled={page === 0}
        onClick={() => buildPagination(0)}
        className="material-symbols-outlined"
        type="button"
      >
        <i className="fa-solid fa-backward-step"></i>
      </button>
      {pages.length &&
        pages.map((p) => (
          <button
            className={p === page ? "active" : ""}
            onClick={() => buildPagination(p)}
            key={p}
            type="button"
          >
            {p + 1}
          </button>
        ))}

      <button
        disabled={page === pageCount - 1}
        onClick={() => buildPagination(pageCount - 1)}
        className="material-symbols-outlined"
        type="button"
      >
        <i className="fa-solid fa-forward-step"></i>
      </button>
    </div>
  );
};

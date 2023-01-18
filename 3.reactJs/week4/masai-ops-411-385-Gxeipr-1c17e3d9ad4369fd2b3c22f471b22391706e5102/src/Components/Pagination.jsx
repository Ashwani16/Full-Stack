function Pagination( {total,page,setPage}) {
  const prev = <button disabled={page<=1} onClick={()=>{setPage(page-1)}} data-testid="prev-page">PREV</button>;
  const currentPage = <button disabled data-testid="current-page">{page}</button>;
  const next = <button disabled={page>Math.ceil(total/10)} onClick={()=>{setPage(page+1)}} data-testid="next-page">NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{Math.ceil(total/10)+1}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;

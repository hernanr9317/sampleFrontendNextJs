export const Paginator = ({currentPage, totalPages, onPageChange}) => {
  const pages = [];

  // Generar los números de página
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={i === currentPage ? 'active' : ''}>
        <button onClick={() => onPageChange(i)}>{i}</button>
      </li>,
    );
  }

  return (
    <div className="paginator">
      <ul>
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
        </li>
        {pages}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

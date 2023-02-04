export const Loading = () => {
  return (
    <div className="d-flex justify-content-center" style={{marginTop: '350px'}}>
      <strong style={{marginRight: '10px'}}>Cargando...</strong>
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

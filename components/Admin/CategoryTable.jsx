export const CategoryTable = ({categories, title}) => {
  return (
    <div>
      <h1>{title}</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Orden</th>
            {/* <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
          {categories?.map((element, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{element.nombre}</td>
              <td>{element.precio}</td>
              {/* <td>@mdo</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

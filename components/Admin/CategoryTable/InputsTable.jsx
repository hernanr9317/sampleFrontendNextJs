export const InputsTable = ({
  title,
  editForm,
  errors,
  description,
  register,
}) => {
  return (
    <>
      <div className="mb-3">
        <input
          className="form-control"
          id="exampleFormControlInput1"
          defaultValue={title}
          disabled={editForm}
          {...register('nombre', {
            required: 'Este campo es requerido',
            minLength: {value: 3, message: 'Mínimo 3 caracteres'},
          })}
        />
        <div className="invalid-feedback d-block">{errors.nombre?.message}</div>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          defaultValue={description}
          disabled={editForm}
          {...register('descripcion', {
            required: 'Este campo es requerido',
            minLength: {value: 3, message: 'Mínimo 3 caracteres'},
          })}
        ></textarea>
        <div className="invalid-feedback d-block">
          {errors.descripcion?.message}
        </div>
      </div>
    </>
  );
};

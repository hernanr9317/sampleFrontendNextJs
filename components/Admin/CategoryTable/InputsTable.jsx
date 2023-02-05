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
        <label>Título</label>
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
        <label>Descripción</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          defaultValue={description}
          disabled={editForm}
          {...register('descripcion')}
        ></textarea>
        <div className="invalid-feedback d-block">
          {errors.descripcion?.message}
        </div>
      </div>
    </>
  );
};

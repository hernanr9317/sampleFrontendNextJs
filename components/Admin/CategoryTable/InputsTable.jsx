import RichText from './../../Slate/RichText';

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
        <div className={editForm ? 'disableDiv' : 'activeDiv'}>
          <RichText newData={description} isNota={'category'} />
        </div>

        <div className="invalid-feedback d-block">
          {errors.descripcion?.message}
        </div>
      </div>
    </>
  );
};

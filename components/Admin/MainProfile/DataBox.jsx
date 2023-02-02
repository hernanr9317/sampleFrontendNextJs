export const DataBox = () => {
  return (
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Nombre completo</h6>
            </div>
            <div class="col-sm-9 text-secondary">Kenneth Valdez</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">fip@jukmuh.al</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-12">
              <button className="btn btn-primary">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

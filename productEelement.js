const productElement = (productNumber) =>
(`<div class="row mt-3">
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Label"
    aria-label="Label"
    id="label"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Quantity"
    aria-label="Quantity"
    id="quantity"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Price"
    aria-label="Price"
    id="price"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Discount"
    aria-label="Discount"
    id="discount"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control w-50 d-inline"
    placeholder="Taxed"
    aria-label="Taxed"
    id="taxed"
  />
  <span class="ms-2 d-inline">%</span>
</div>
<div class="col">
  <button id="delete" class="btn btn-danger" style="float: right" type="button" onclick="deleteRow(this)">
    Delete
  </button>
</div>
</div>`)
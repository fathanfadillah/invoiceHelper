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
    class="form-control w-50 me-2 d-inline"
    placeholder="Discount"
    aria-label="Discount"
    id="discount"
    min="0"
    max="100"
  />
  <label for="discount" class="d-inline">%</label>
</div>
<div class="col">
  <select
    id="taxed"
    class="form-select w-75"
    aria-label="Default select example"
  >
    <option selected>Tax</option>
    <option value="11">PPN 11%</option>
    <option value="15">PPh 15%</option>
  </select>
</div>
<div class="col">
  <button id="delete" class="btn btn-danger" style="float: right" type="button" onclick="deleteRow(this)">
    Delete
  </button>
</div>
</div>`)
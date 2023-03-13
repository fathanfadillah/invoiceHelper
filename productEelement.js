const productElement = (productNumber) =>
(`<div class="row mt-3">
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Label"
    aria-label="Label"
    id="label-${productNumber}"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Quantity"
    aria-label="Quantity"
    id="quantity-${productNumber}"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Price"
    aria-label="Price"
    id="price-${productNumber}"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Discount"
    aria-label="Discount"
    id="discount-${productNumber}"
  />
</div>
<div class="col">
  <input
    type="text"
    class="form-control"
    placeholder="Taxed"
    aria-label="Taxed"
    id="taxed-${productNumber}"
  />
</div>
</div>`)
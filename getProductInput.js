const formIsSubmitted = (event) => {
    console.log(getFromInput);

    getFromInput.product = [];

    for (let index = 0; index < productNumber; index++) {
        const product = {};

        const label = $("#label-0").val();
        const quantity = $("#quantity-0").val();
        const price = $("#price-0").val();
        const discount = $("#discount-0").val();
        const taxed = $("#taxed-0").val();

        product.label = label;
        product.quantity = quantity;
        product.price = price;
        product.discount = discount;
        product.taxed = taxed;

        getFromInput.product.push(product);
    }

    console.log(getFromInput);
};
const getProductInput = async (getFromInput) => {
    const neWFromInput = getFromInput
    neWFromInput.product = [];

    for (let index = 0; index <= productNumber; index++) {
        const product = {};

        const label = $(`#label-${index}`).val();
        const quantity = $(`#quantity-${index}`).val();
        const price = $(`#price-${index}`).val();
        const discount = $(`#discount-${index}`).val();
        const taxed = $(`#taxed-${index}`).val();
        const totalPrice = price * quantity
        const amount = totalPrice - (totalPrice * discount / 100) + (totalPrice * taxed / 100)

        product.label = label;
        product.quantity = quantity;
        product.price = price;
        product.discount = discount;
        product.taxed = taxed;
        product.amount = amount;

        neWFromInput.product.push(product);
    }

    return neWFromInput
}
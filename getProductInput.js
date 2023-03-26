const getProductInput = async (getFromInput) => {
    const neWFromInput = getFromInput
    neWFromInput.product = [];

    const length = $('#productList .row').length
    for (let index = 0; index < length; index++) {
        const label = $(`#productList .row:eq(${index}) #label`).val()
        const quantity = $(`#productList .row:eq(${index}) #quantity`).val()
        const price = $(`#productList .row:eq(${index}) #price`).val()
        const discount = $(`#productList .row:eq(${index}) #discount`).val()
        const taxed = $(`#productList .row:eq(${index}) #taxed`).val()

        const totalPrice = price * quantity
        const amount = totalPrice - (totalPrice * discount / 100) + (totalPrice * taxed / 100)

        const product = {};
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
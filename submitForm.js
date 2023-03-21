const formIsSubmitted = async (getFromInput, file) => {
    if (file) {
        getFromInput.image = await toBase64(file)
    }

    const getFromInputWithProduct = await getProductInput(getFromInput)
    printPdf(getFromInputWithProduct)
};
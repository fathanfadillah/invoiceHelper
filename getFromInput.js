let getFromInput = {}

$("#invoiceNumber").on("input", (event) => {
    getFromInput.invoiceNumber = event.target.value;
});

$("#expireDate").on("input", (event) => {
    getFromInput.expireDate = event.target.value;
});

$("#firstNameSender").on("input", (event) => {
    getFromInput.fistName = event.target.value;
});

$("#lastNameSender").on("input", (event) => {
    getFromInput.lastName = event.target.value;
});

$("#emailAddressSender").on("input", (event) => {
    getFromInput.emailAddress = event.target.value;
});

$("#addressSender").on("input", (event) => {
    getFromInput.address = event.target.value;
});

$("#firstNameRecevier").on("input", (event) => {
    getFromInput.fistName = event.target.value;
});

$("#lastNameRecevier").on("input", (event) => {
    getFromInput.lastName = event.target.value;
});

$("#emailAddressRecevier").on("input", (event) => {
    getFromInput.emailAddress = event.target.value;
});

$("#addressRecevier").on("input", (event) => {
    getFromInput.address = event.target.value;
});

$("#bankName").on("input", (event) => {
    getFromInput.bankName = event.target.value;
});

$("#bankBranch").on("input", (event) => {
    getFromInput.bankBranch = event.target.value;
});

$("#accountName").on("input", (event) => {
    getFromInput.accountName = event.target.value;
});

$("#paymentReference").on("input", (event) => {
    getFromInput.paymentReference = event.target.value;
});

$("#customerReference").on("input", (event) => {
    getFromInput.customerReference = event.target.value;
});
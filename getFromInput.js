let getFromInput = {
    invoiceNumber: '',
    expireDate: '',
    image: '',
    sender: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        address: ''
    },
    recevier: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        address: ''
    },
    bankName: '',
    accountName: '',
    accountNumber: '',
    paymentReference: '',
    customerReference: '',
    subTotal: 0,
    ppn: 11,
    total: 0
}

$("#invoiceNumber").on("input", (event) => {
    getFromInput.invoiceNumber = event.target.value;
});

$("#expireDate").on("input", (event) => {
    getFromInput.expireDate = event.target.value;
});

getFromInput.sender = {}
$("#firstNameSender").on("input", (event) => {
    getFromInput.sender.firstName = event.target.value;
});

$("#lastNameSender").on("input", (event) => {
    getFromInput.sender.lastName = event.target.value;
});

$("#emailAddressSender").on("input", (event) => {
    getFromInput.sender.emailAddress = event.target.value;
});

$("#addressSender").on("input", (event) => {
    getFromInput.sender.address = event.target.value;
});

getFromInput.recevier = {}
$("#firstNameRecevier").on("input", (event) => {
    getFromInput.recevier.firstName = event.target.value;
});

$("#lastNameRecevier").on("input", (event) => {
    getFromInput.recevier.lastName = event.target.value;
});

$("#emailAddressRecevier").on("input", (event) => {
    getFromInput.recevier.emailAddress = event.target.value;
});

$("#addressRecevier").on("input", (event) => {
    getFromInput.recevier.address = event.target.value;
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

$("#accountNumber").on("input", (event) => {
    getFromInput.accountNumber = event.target.value;
});

$("#paymentReference").on("input", (event) => {
    getFromInput.paymentReference = event.target.value;
});

$("#customerReference").on("input", (event) => {
    getFromInput.customerReference = event.target.value;
});
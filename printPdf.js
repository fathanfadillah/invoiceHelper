const getToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return today
}

const getName = (firstName, lastName) => {
    if (firstName && lastName) return { text: `${firstName} ${lastName}`, bold: true, margin: [0, 0, 0, 10] }
    if (firstName || lastName) return { text: firstName || lastName, bold: true, margin: [0, 0, 0, 10] }
    if (!firstName && !lastName) return { text: "", bold: true, margin: [0, 0, 0, 10] }
}

const printPdf = (formData) => {
    formData.image = formData.image ? {
        image: formData.image,
        fit: [100, 100]
    } : ''

    let subTotal = 0
    formData['product'].map((product) => {
        return subTotal += product.amount
    })

    formData.subTotal = subTotal
    formData.total = formData.subTotal + (formData.subTotal * formData.ppn / 100)

    formData.startDate = getToday()

    const tableHeader = [[{ text: 'QTY', bold: true, fontSize: 9 }, { text: 'DESCRIPTION', bold: true, fontSize: 9 }, { text: 'DISCOUNT', bold: true, fontSize: 9 }, { text: 'UNITs', bold: true, fontSize: 9 }, { text: 'TAXED', bold: true, fontSize: 9 }, { text: 'AMOUNT (Rp.)', bold: true, fontSize: 9 }]]

    const tableBody = formData.product.map((product) => (
        [`${product.quantity} - Pcs`, product.label, { text: `${product.discount}%`, alignment: 'right' }, { text: product.price, alignment: 'right' }, { text: `${product.taxed}%`, alignment: 'right' }, { text: product.amount, alignment: 'right' }]
    ))

    const tableFooter = [
        [{ text: 'SubTotal', colSpan: 5 }, '', '', '', '', { text: formData.subTotal, alignment: 'right' }],
        [{ text: `PPN ${formData.ppn}.0%`, colSpan: 6 }, '', '', '', '', ''],
        [{ text: 'TOTAL', colSpan: 5 }, '', '', '', '', { text: formData.total, alignment: 'right' }],
    ]

    const table = (tableHeader.concat(tableBody)).concat(tableFooter)

    const docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'potrait',
        content: [
            {
                margin: [0, 40, 0, 0],
                columns:
                    [
                        formData.image,
                        {
                            alignment: "right",
                            stack: [
                                { text: "To :", alignment: "right" },
                                getName(formData.recevier.firstName, formData.recevier.lastName),
                                formData.recevier.address,
                                formData.recevier.emailAdress,
                            ],
                        },
                    ]
            },
            {
                margin: [0, 30],
                columns:
                    [
                        {
                            stack: [
                                'From : ',
                                getName(formData.sender.firstName, formData.sender.lastName),
                                { text: formData.sender.address, margin: [0, 0, 0, 10] },
                                formData.sender.emailAdress,
                            ]
                        },
                        {
                            table: {
                                widths: '*',
                                heights: 10,
                                body: [
                                    [{ text: `Qoute # ${formData.invoiceNumber}`, bold: true, fillColor: '#E5E4E2', alignment: 'right', margin: [0, 15, 10, 0] },],
                                    [{ text: formData.startDate, bold: true, fillColor: '#E5E4E2', alignment: 'right', margin: [0, 0, 10, 0] }],
                                    [{ text: `Expired Date: ${formData.expireDate}`, fillColor: '#E5E4E2', alignment: 'right', margin: [0, 0, 10, 0] }],
                                    [{ text: formData.total, bold: true, fontSize: 18, fillColor: '#E5E4E2', alignment: 'right', margin: [0, 0, 10, 15] }]
                                ]
                            },
                            layout: 'noBorders',
                        }
                    ],
            },
            {
                margin: [0, 0, 0, 10],
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return rowIndex === 0 ? "#ebebeb" : "";
                    },
                },
                table: {
                    widths: ['10%', '35%', '10%', '15%', '15%', '15%'],
                    body: table
                },
            },
            {
                margin: [0, 30],
                columns: [
                    {
                        stack: [
                            { text: 'Payment Detail', bold: true, margin: [0, 0, 0, 10] },
                            `Bank Name : ${formData.bankName}`,
                            `Bank Branch : ${formData.bankBranch}`,
                            { text: `Account Name : ${formData.accountName}`, margin: [0, 10, 0, 0] },
                            `Account Number : ${formData.accountNumber}`,
                            `Payment Reference : ${formData.paymentReference}`
                        ]
                    },
                    {
                        stack: [
                            { text: 'Other Information', bold: true, margin: [0, 0, 0, 10] },
                            'Customer Reference :',
                            formData.customerReference,
                        ]
                    }
                ]
            },
        ]
    };

    const pdf = createPdf(docDefinition);
    pdf.download("Invoice.pdf");
}
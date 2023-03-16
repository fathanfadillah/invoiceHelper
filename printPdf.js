const getToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return today
}

const countAmount = (product) => {
    console.log(product)
    const { price, qty, discount, taxed } = product
    console.log(price, qty, discount, taxed)
    const amount = (price * qty) - (price * discount / 100) + (price * taxed / 100)
    console.log('amount', amount)
    return amount
}

const countTotal = (product) => {
    const total = product.reduce((acc, curr) => acc.amount + curr, 0)
    console.log('total', total)
    return total
}

const printPdf = (formData) => {
    formData.image = formData.image ? {
        image: formData.image,
        fit: [100, 100]
    } : ''

    // for (product in formData.product) {
    //     console.log(product)
    //     formData.product.amount = countAmount(product)
    // }

    // formData.total = countTotal(formData.product)
    let subTotal = 0
    formData['product'].map((product) => {
        return subTotal += product.amount
    })

    formData.subTotal = subTotal
    formData.total = formData.subTotal + (formData.subTotal * formData.ppn / 100)

    formData.startDate = getToday()

    console.log('formData', formData)

    const tableHeader = [[{ text: 'QTY', bold: true, fontSize: 9 }, { text: 'DESCRIPTION', bold: true, fontSize: 9 }, { text: 'DISCOUNT', bold: true, fontSize: 9 }, { text: 'UNITs', bold: true, fontSize: 9 }, { text: 'TAXED', bold: true, fontSize: 9 }, { text: 'AMOUNT (Rp.)', bold: true, fontSize: 9 }]]

    const tableBody = [
        ['1 - Pcs', 'Fuse 2A', { text: '0.0%', alignment: 'right' }, { text: 1000, alignment: 'right' }, { text: 100, alignment: 'right' }, { text: 1100, alignment: 'right' }],
        ['1 - Pcs', 'Fuse 2A', { text: '0.0%', alignment: 'right' }, { text: 1000, alignment: 'right' }, { text: 100, alignment: 'right' }, { text: 1100, alignment: 'right' }],
    ]

    const tableFooter = [
        [{ text: 'SubTotal', colSpan: 5 }, '', '', '', '', { text: formData.subTotal, alignment: 'right' }],
        [{ text: `PPN ${formData.ppn}.0%`, colSpan: 6 }, '', '', '', '', ''],
        [{ text: 'TOTAL', colSpan: 5 }, '', '', '', '', { text: formData.total, alignment: 'right' }],
    ]

    const table = (tableHeader.concat(tableBody)).concat(tableFooter)

    console.log('table', table)

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
                                { text: formData.recevier.firstName + formData.recevier.lastName, bold: true, margin: [0, 0, 0, 10] },
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
                                { text: formData.sender.firstName + formData.sender.lastName, bold: true, margin: [0, 0, 0, 10] },
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
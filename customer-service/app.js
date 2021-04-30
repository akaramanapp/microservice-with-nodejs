const express = require("express");
const app = express();

const customerList = [
    { customerId: 1, customerName: "Customer 1", city: "Istanbul" },
    { customerId: 2, customerName: "Customer 2", city: "London" },
    { customerId: 3, customerName: "Customer 3", city: "Paris" }
]

app.get('/customer', (req, res) => {
    return res.send(customerList)
})

app.listen(5002, () => {
    console.log('listining on port 5002')
})
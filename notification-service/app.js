const express = require("express");
const app = express();

app.get('/send', (req, res) => {
    return res.send('The notification has been sent.')
})

app.listen(5001, () => {
    console.log('listining on port 5001')
})
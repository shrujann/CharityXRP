const express = require('express');
const cors = require('cors');
const { sendRLUSD } = require('./js/rlusd_transaction');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Webpage')));

app.post('/api/send-rlusd', async (req, res) => {
    try {
        // Optionally, get data from req.body if you want to pass amount/address from frontend
        await sendRLUSD();
        res.json({ success: true, message: "Transaction sent!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
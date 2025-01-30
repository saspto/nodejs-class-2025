const express = require("express");

const app = express();

app.get("/download", (req, res) => {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=output1.csv");

    const csvData = "Name, Age, Country \nJohn Doe, 30, USA \nJane Doe, 25, UK";
    res.send(csvData);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

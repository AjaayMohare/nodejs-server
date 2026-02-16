const express = require("express");
const axios = require("axios");
const PORT = 3000;
const app = express();


// middleware use
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/' , (req,res)=>{
    res.end("weather backend is running");
})

app.get("/weather/:city", async (req, res) => {

    const city = req.params.city;

    try {

        const url = `https://wttr.in/${city}?format=j1`;

        const response = await axios.get(url);

        const data = response.data;

        const result = {
            city: city,
            temperature: data.current_condition[0].temp_C,
            condition: data.current_condition[0].weatherDesc[0].value,
            humidity: data.current_condition[0].humidity,
            feels_like: data.current_condition[0].FeelsLikeC
        };

        res.json(result);

    } 
    catch (error) {

        res.status(500).json({
            error: "Failed to fetch weather data"
        });

    }

});


app.listen(PORT, ()=>{
    console.log("server started");
    console.log("visit  localhost:3000")
})

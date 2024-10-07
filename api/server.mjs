import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    const responseData = {
        APIVersion:"1.0",
        Message:"API Working!",
        Environement:process.env.ENV || "dev"
    };
    const jsonContent = JSON.stringify(responseData);

    res.header('content-type','application/json')
    res.send(jsonContent);
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});

export default app;
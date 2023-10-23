const express = require("express");

const app = express();

app.get('/',(request, response)=> { 
    return response.json({message:'Server is up'});
})

app.get('/atualizado',(request, response) => {
    return response.json({message:'server atualizado'})
})

app.post('/teste',(request, response)=> {
    const {name, date} = request.body;

    return response.json({name, date})
})

app.listen(3333)
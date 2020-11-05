const express = require('express');
const defaultRouter = require('./routes/routes')
const app = express();

app.listen(3000);

app.use(express.json())
app.use(express.urlencoded({extend:true}))
app.use('/api', defaultRouter)

app.get('/',(request, response)=>{
    response.json({success:true})
})

app.post('/', (res,req)=>{
    res.json({success: true})
})

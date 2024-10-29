const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const productsCtrl = require('./ctrls/products.ctrl');
const employeesCtrl = require('./ctrls/employees.ctrl');
const productsRouter =require('./routers/products.router')
const employeesRouter=require('./routers/employees.router')
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Welcome to Express Js App');
});
app.use('/products',productsRouter)
app.use('/employees',employeesRouter)

// app.get('/products/:id', productsCtrl.getById);
// app.get('/products', productsCtrl.getAll);
// app.delete('/products/:id', productsCtrl.delete);
// app.get('/employees/:id',employeesCtrl.getById)
// app.get('/employees', employeesCtrl.getAll);
// app.delete('/employees/:id',employeesCtrl.delete)
// app.post('/employees',employeesCtrl.create)
// app.put('/employees/:id',employeesCtrl.update)
app.listen(3000, () => {
    console.log ('Server is up on runing!');
});
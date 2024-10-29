// const { getById } = require("./products.ctrl");

const { update } = require("./products.ctrl");

// const { response } = require("express");
// const { create } = require("./products.ctrl");

const  data= [
    {
        id: 1,
        name: 'Varsha',
        designation: 'Software Engineer',
    },
    {
        id: 2,
        name: 'Rachana',
        designation: 'Test Engineer',
    },
    {
        id:3,
        name:'krishna',
        designation:'software engineer',
    },
    {
        id:4,
        name:'dibyendu',
        designation:'android devloper',
    }
]
const employeesCtrl = {
  
    getAll: (request, response) => {
        response.send({
            status: 'Retrieved employees successfully',
           data :data
        });
    },
    getById:(request,response)=>{
        const filteredEmployee=data.find(emp =>emp.id == request.params.id)
        console.log(filteredEmployee)

        if(filteredEmployee){
            response.send({filteredEmployee})
        }
        else{
            response.send({
                message:'unable to find data'
            })
        }
    },
    delete:(req,res) =>{
       const deleteEmp=data.findIndex(emp => emp.id == req.params.id) 
       console.log(deleteEmp)
       data.splice(deleteEmp,1);

       if(deleteEmp !== -1){
            res.send({message:'emp delte sucesfully'})
       }
       else{
        res.send({ message: 'Unable to find the product'})
       }
    },
    create:(req,res)=>{
        
        data.push(req.body);
        res.send({
            message: 'Data added successfully',
            data
        });
        console.log(req.body)
    },
    update:(req,res) => {
        const index= data.findIndex(pdt => pdt.id === parseInt(req.params.id));
        console.log(req.body)
        if(index !== -1){
            data.splice(index,1,req.body)
            res.send({
                message: 'data updated succesfully'
            });
        }
        else{
            res.send({
                message:'Unable tofind matching products'
            })
        }
            
    }
};

module.exports = employeesCtrl;
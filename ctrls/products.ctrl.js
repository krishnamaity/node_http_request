const products = [
    {
        id: 1,
        name: "Apple iPhone 15 (Blue, 128 GB)",
        price: 56249,
        originalPrice: 69900,
        discount: "19% off",
    },
    {
        id: 2,
        name: "Motorola g45 5G (Brilliant Green, 128 GB)",
        price: 11999,
        originalPrice: 14999,
        discount: "20% off",
    },
    {
        id: 3,
        name: "Samsung Galaxy S23 (Phantom Black, 128 GB)",
        price: 74999,
        originalPrice: 84999,
        discount: "12% off",
    },
    {
        id: 4,
        name: "OnePlus Nord 2T (Gray Shadow, 128 GB)",
        price: 28999,
        originalPrice: 31999,
        discount: "9% off",
    },
    {
        id: 5,
        name: "Xiaomi Redmi Note 12 (Frosted Green, 128 GB)",
        price: 16999,
        originalPrice: 19999,
        discount: "15% off",
    },
];

const productsCtrl = {
    getAll: (request, response) => {
        response.send({ products: products });
    },
    getById: (request, response) => {
        const filteredProduct = products.find(product => product.id == request.params.id);

        if (filteredProduct) {
            response.send(filteredProduct);
        } else {
            response.send({
                message: 'Unable to find the matching product'
            });
        }
    },
    delete: (request, response) => {
        const index = products.findIndex(product => product.id == request.params.id);
        products.splice(index, 1);
        if (index !== -1) {
            response.send({
                message: 'Deleted the product successfully'
            });
        } else {
            response.send({
                message: 'Unable to find the product'
            });
        }
    },
    create: (request, response) => {
       products.push(request.body);
       response.send({
        message:'product add succes fully'
       })

    },
    update: (request, response) => {
         const index= products.findIndex(item => item.id === parseInt(request.params.id))
        
          
         if(index !== -1){
            products.splice(index,1,request.body)
            response.send({
                message:'product updated succes fully'
            })
         }
         else
         {
            response.send({
                message:'unable to find product'
            })
         }
    }
}

module.exports = productsCtrl;
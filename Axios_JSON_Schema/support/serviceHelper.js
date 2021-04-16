const axios = require('axios');

const createOrder = async (data)=>{
   const newOrder =  await axios.post('https://petstore.swagger.io/v2/store/order', data) ;
   return newOrder;
};

const getOrder = async (order_id)=>{
    const getOrder =  await axios.get(`https://petstore.swagger.io/v2/store/order/${order_id}`, ) ;
    return getOrder;
};

const deleteOrder = async (order_id)=>{
    const delOrder =  await axios.delete(`https://petstore.swagger.io/v2/store/order/${order_id}`, ) ;
    return delOrder; 
};

module.exports = {
    createOrder,
    getOrder,
    deleteOrder
}
const { expect } = require('chai');
const {createOrder, getOrder, deleteOrder} = require('../support/serviceHelper');
const data = require('../data/order.json');
const schema = require('../schema/createGetOrder.json')
const validator = require('jsonschema');

describe('testing petsore', async()=>{
    let order_id;
    
    const {request, response, expectedStatuscode} = data
    
    it('create an order for a pet', async ()=>{
        const first_order_response = await createOrder(request);
        order_id = first_order_response.data.id;
    
        validator.validate(first_order_response.data, schema);
          
        expect(first_order_response.status).to.equal(expectedStatuscode);
        expect(first_order_response.data.petId).to.equals(123);
        })

    it('should get the order', async ()=>{
        const get_first_order_response = await getOrder(order_id);
        
        validator.validate(get_first_order_response.data, schema);

        expect(get_first_order_response.status).to.equal(expectedStatuscode);
        expect(get_first_order_response.data.petId).to.equals(123);
    })

    it('should delete the order', async ()=>{
        const get_first_order_response = await deleteOrder(order_id);
        
        expect(get_first_order_response.status).to.equal(expectedStatuscode);
    });

})
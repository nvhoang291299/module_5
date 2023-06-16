import request from '../http-request/http_request';

const getListFacility = () => {
    return request.get('facility')
}

const getCustomers = () => {
    return request.get('customer')
}

const createCustomer = (customer) => {
    return request.post('customer', customer)
}

export {
    getListFacility,
    getCustomers,
    createCustomer
}
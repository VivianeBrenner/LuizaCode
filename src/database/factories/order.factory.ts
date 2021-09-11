import {define, factory} from "typeorm-seeding";
import { Customer } from '../../entities/Customer';
import {Order} from "../../entities/Order";

define(Order, () => {
  
    const customer = factory(Customer)() as any
    const order = new Order()
    order.customer = customer
    order.datePlaced = new Date()
    
    return new Order()
})
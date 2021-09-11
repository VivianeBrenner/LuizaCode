import { Connection } from 'typeorm';
import {Factory, Seeder, times} from'typeorm-seeding';
import { Customer } from '../../entities/Customer';
import { Order } from '../../entities/Order';
import { OrderItem } from '../../entities/OrderItem';
import { Product } from '../../entities/Product';

export default class CreateCustomerOrderSeeder implements Seeder {
    
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const products = await factory(Product)().createMany(20)

        const em = connection.createEntityManager();
        const customers = await times(3, async (n) => {
            
            const orders = await times(2, async (n) => {
                const order = await factory(Order)().make()
                let savedOrder = await em.save(order)
                const orderItem = new OrderItem()

                orderItem.orderId = savedOrder.id
                orderItem.productId = products[0].id
                orderItem.productName = products[0].name
                orderItem.price = products[0].price
                orderItem.amount = 2

                await em.save(orderItem)
                savedOrder.orderItems = [orderItem]
                return savedOrder
            })
            
            const customer = await factory(Customer)().make()
            customer.orders = orders;
            return await em.save(customer);
        });
    }
}
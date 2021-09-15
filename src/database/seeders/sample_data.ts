import { Connection } from 'typeorm';
import {Factory, Seeder, times} from'typeorm-seeding';
import { Customer } from '../../entities/Customer';
import { Order } from '../../entities/Order';
import { OrderItem } from '../../entities/OrderItem';
import { Product } from '../../entities/Product';
import { Store } from '../../entities/Store';

export default class SampleDataSeeder implements Seeder {
    
    public async run(factory: Factory, connection: Connection): Promise<any> {

        // Customer seeds
        const customers = new Array<Customer>()
        customers[0] = new Customer()
        customers[0].firstName = 'Alan'
        customers[0].lastName = 'Turing'
        customers[0].email = 'alan@gmail.com'
        customers[0].password = 'FSOIE1230as@#'

        customers[1] = new Customer()
        customers[1].firstName = 'Ada'
        customers[1].lastName = 'Lovelace'
        customers[1].email = 'ada@gmail.com'
        customers[1].password = '34KUAOIE1230as@#'

        const em = connection.createEntityManager()
        await em.save(customers)

        // Stores seeds
        const stores = new Array<Store>()
        stores[0] = new Store()
        stores[0].name = 'Magazine Luiza 1'
        stores[0].phone = '+55 33 99956-2696'
        stores[0].address = 'Rua Raul Soares, 46, Centro, Caratinga/MG'
        
        stores[1] = new Store()
        stores[1].name = 'Magazine Luiza 2'
        stores[1].phone = '+55 11 92004-5522'
        stores[1].address = 'Rua Voluntários da Franca, 1465, Centro, Franca/SP, '
        await em.save(stores)

        // Products seeds
        const products = new Array<Product>()
        products[0] = new Product()
        products[0].name = 'Produto A'
        products[0].price = 13.50
        products[0].imageUrl = 'http://image1.url.com'

        products[1] = new Product()
        products[1].name = 'Produto B'
        products[1].price = 211.50
        products[1].imageUrl = 'http://image2.url.com'

        await em.save(products)

        // Order seed for customer 1
        const order1 = new Order()
        order1.datePlaced = new Date()
        order1.customer = customers[0]
        order1.store = stores[1]
        await em.save(order1)

        const order1items = new Array<OrderItem>()
        order1items[0] = new OrderItem()
        order1items[0].orderId = order1.id
        order1items[0].productId = products[0].id
        order1items[0].price = products[0].price
        order1items[0].productName = products[0].name
        order1items[0].amount = 1

        order1items[1] = new OrderItem()
        order1items[1].orderId = order1.id
        order1items[1].productId = products[1].id
        order1items[1].price = products[1].price
        order1items[1].productName = products[1].name
        order1items[1].amount = 1
        await em.save(order1items)

        // Order seed for customer 2
        const order2 = new Order()
        order2.datePlaced = new Date()
        order2.customer = customers[1]
        order2.store = stores[2]
        await em.save(order2)

        const order2items = new Array<OrderItem>()
        order2items[1] = new OrderItem()
        order2items[1].orderId = order2.id
        order2items[1].productId = products[1].id
        order2items[1].price = products[1].price
        order2items[1].productName = products[1].name
        order2items[1].amount = 1
        await em.save(order2items)

        
    }

}
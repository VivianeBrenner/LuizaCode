import Faker from 'faker'
import {define} from "typeorm-seeding";
import {Customer} from "../../entities/Customer";

define(Customer, (faker: typeof Faker) => {
    faker.locale = 'pt_BR'
    const customer = new Customer()
    customer.firstName = faker.name.firstName()
    customer.lastName = faker.name.lastName()
    customer.email = faker.internet.exampleEmail()
    customer.password = faker.internet.password()

    return customer
})
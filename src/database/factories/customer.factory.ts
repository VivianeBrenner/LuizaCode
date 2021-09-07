import Faker from 'faker'
import {define} from "typeorm-seeding";
import {Customer} from "../../entities/Customer";

define(Customer, (faker: typeof Faker) => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.exampleEmail(firstName, lastName)
    const password = faker.internet.password()

    const customer = new Customer()

    customer.firstName = firstName
    customer.lastName = lastName
    customer.email = email
    customer.password = password

    return customer
})
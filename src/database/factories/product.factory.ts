import Faker from 'faker'
import {define} from "typeorm-seeding";
import {Product} from "../../entities/Product";

define(Product, (faker: typeof Faker) => {
    const product = new Product()
    product.name = faker.commerce.product()
    product.price = Number(faker.commerce.price())
    product.imageUrl = faker.image.imageUrl()

    return product
})
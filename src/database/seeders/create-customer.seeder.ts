import {Factory, Seeder} from'typeorm-seeding';
import {Customer} from "../../entities/Customer";

export default class CreateCustomerSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(Customer)().createMany(20);
    }
}
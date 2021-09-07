import { EntityRepository, Repository } from "typeorm"
import { Customer } from "../entities/Customer"

@EntityRepository(Customer)
class CustomerRepository extends Repository <Customer> {

}

export default CustomerRepository
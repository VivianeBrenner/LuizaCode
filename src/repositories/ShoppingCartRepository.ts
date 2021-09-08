import { EntityRepository, Repository } from "typeorm"
import { ShoppingCart } from "../entities/ShoppingCart"

@EntityRepository(ShoppingCart)
class ShoppingCartRepository extends Repository <ShoppingCart> {

}

export default ShoppingCartRepository
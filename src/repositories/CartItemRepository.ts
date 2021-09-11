import { EntityRepository, Repository } from "typeorm"
import { CartItem } from "../entities/CartItem"

@EntityRepository(CartItem)
class CartItemRepository extends Repository <CartItem> {

}

export default CartItemRepository
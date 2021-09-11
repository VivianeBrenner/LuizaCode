import { EntityRepository, Repository } from "typeorm"
import { OrderItem } from "../entities/OrderItem"

@EntityRepository(OrderItem)
class OrderItemRepository extends Repository <OrderItem> {

}

export default OrderItemRepository
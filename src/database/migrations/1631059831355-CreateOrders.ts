import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateOrders1631059831355 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "status", type: "varchar", isNullable: false, length: "255"},
                    {name: "order_dt", type: "timestamp", default: "now()", isNullable: false},
                    {name: "payment", type: "varchar", isNullable: false, length: "255"},
                    {name: "id_customer", type: "integer", isNullable: false, length: "255"},
                    {name: "id_shopping-cart", type: "integer", isNullable: false, length: "255"}
                ]
            })
        )

        await queryRunner.createForeignKey("orders", new TableForeignKey({
            columnNames: ["id_customer"],
            referencedColumnNames: ["id"],
            referencedTableName: "customers",
            name: "fk_orders_customers"
        }))

        await queryRunner.createForeignKey("orders", new TableForeignKey({
            columnNames: ["id_shopping-cart"],
            referencedColumnNames: ["id"],
            referencedTableName: "shopping_carts",
            name: "fk_orders_shopping_carts"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders")
    }

}

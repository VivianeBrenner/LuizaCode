import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateShoppingCarts1631059889259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "shopping_carts",
                columns: [
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "total", type: "numeric",  precision: 8, scale: 2, isNullable: false, length: "65"},
                    {name: "id_product", type: "integer", isNullable: false, length: "255"}
                ]
            })
        )

        await queryRunner.createForeignKey("shopping_carts", new TableForeignKey({
            columnNames: ["id_product"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            name: "fk_shopping_carts_products"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("shopping_carts")
    }

}

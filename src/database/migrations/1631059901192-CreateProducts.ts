import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProducts1631059901192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "name", type: "varchar", isNullable: false, length: "255"},
                    {name: "image", type: "varchar", isNullable: false, length: "255"},
                    {name: "price", type: "numeric",  precision: 8, scale: 2, isNullable: false, length: "65"},
                    {name: "id_store", type: "integer", isNullable: false, length: "255"}
                ]
            })
        )

        await queryRunner.createForeignKey("products", new TableForeignKey({
            columnNames: ["id_store"],
            referencedColumnNames: ["id"],
            referencedTableName: "stores",
            name: "fk_products_stores"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}

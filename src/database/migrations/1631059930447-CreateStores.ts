import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStores1631059930447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stores",
                columns: [
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "name", type: "varchar", isNullable: false, length: "255"},
                    {name: "phone", type: "varchar", isNullable: false, length: "255"},
                    {name: "address", type: "varchar", isNullable: false, length: "255"}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("stores")
    }

}

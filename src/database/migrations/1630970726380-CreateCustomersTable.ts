import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomersTable1630963093647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "customers",
                columns: [
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "firstName", type: "varchar", isNullable: false, length: "255"},
                    {name: "lastName", type: "varchar", isNullable: false, length: "255"},
                    {name: "email", type: "varchar", isNullable: false, length: "255"},
                    {name: "password", type: "varchar", isNullable: false, length: "255"}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Customers")
    }
}

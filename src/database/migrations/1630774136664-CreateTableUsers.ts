import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUsers1630774136664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_table",
                columns: [
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "name", type: "varchar", length: "100"},
                    {name: "email", type: "varchar", length: "50"},
                    {name: "password", type: "varchar", length: "8"},
                ]
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_table")
    }

}

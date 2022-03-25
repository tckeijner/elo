import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (t) => {
    t.increments('id').primary();
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.timestamps(false, true);
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user');
}

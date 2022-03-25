import { randomUUID } from 'crypto';
import knex from 'knex';

export async function generateAuthenticationToken({ id }) {
  console.log('Generating authentication token for user' + id);
  const uuid = randomUUID();
  console.log('UUID: ' + uuid);
  await knex('auth_token').insert({
    id: uuid,
    user_id: id,
  });
  console.log('inserted in database');
  return uuid;
}
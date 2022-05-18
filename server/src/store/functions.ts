import { randomUUID } from 'crypto';
const knex = require('../database/knexfile')

export async function generateAuthenticationToken({ id }) {
  const uuid = randomUUID();
  await knex('auth_token').insert({
    id: uuid,
    user_id: id,
  });
  return uuid;
}
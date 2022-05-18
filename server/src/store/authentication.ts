const knex = require('../database/knexfile');

export async function authenticate({ email, password }) {
  const [user] = await knex('user')
    .where({ email });
  if (!user)
    return { success: false };
  return {
    success: password === user.password,
    id: user.id,
  };
}
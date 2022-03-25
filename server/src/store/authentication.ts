import knex from 'knex';

export async function authenticate({ email, password }) {
  console.log(`Authenticating user ${email}`);
  const [user] = await knex('user')
    .where({ email });
  if (!user)
    return { success: false };
  return {
    success: password === user.password,
    id: user.id,
  };
}
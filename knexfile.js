module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/dating_crud'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};

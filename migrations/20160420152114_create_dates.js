exports.up = function(knex, Promise) {
  return knex.schema.createTable('dates', function(table){
    table.increments();
    table.string('firstname');
    table.string('lastname');
    table.string('username');
    table.string('email');
    table.string('phone');
    table.text('avatar');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dates');
};

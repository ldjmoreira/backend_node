exports.up = function (knex, Promise) {//evolucao da tabela
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function (knex, Promise) {//colocar o contrario de up
    return knex.schema.dropTable('users')
};
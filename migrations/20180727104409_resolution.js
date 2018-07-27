exports.up = function(knex, Promise) {
    return knex.schema.createTable("resolution", table => {
        table.increments("id").start(4);
        table.date("dueDate");
        table.text("resolution");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExits("resolution");
};

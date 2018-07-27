const CONFIG = require("./knexfile")[process.env.NODE_ENV || "development"];
module.exports = require("knex")(CONFIG);

// var pg = require("./knexfile")({
//     client: "pg",
//     connection: "postgres://localhost:/gmemory1"
//     // searchPath: ["knex", "public"],
//     // pool: { min: 0, max: 7 }
// });

// module.exports = pg;

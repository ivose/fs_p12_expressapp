const config = require('../util/config')

db.createUser({
    user: config.MONGO_INITDB_ROOT_USERNAME,
    pwd: config.MONGO_INITDB_ROOT_PASSWORD,
    roles: [
        {
            role: 'dbOwner',
            db: config.MONGO_INITDB_DATABASE,
        },
    ],
});

db.createCollection('todos');

db.todos.insert({ text: 'Write code', done: true });
db.todos.insert({ text: 'Learn about containers', done: false });
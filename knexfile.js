module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'victor',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};
module.exports = {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'caiulucas',
    password: 'postgres',
    database: 'tests',
    dropSchema: true,
    logging: false,
    synchroize: true,
    migrationsRun: true,
  
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
    },
  };
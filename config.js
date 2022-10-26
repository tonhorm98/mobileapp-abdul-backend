const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'; //
const dev = {
  db: {
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    connectionLimit: 10,
    dateStrings: false,
  },
  domain: process.env.TEST_DOMAIN,
};
const staging = {
  db: {
    host: process.env.STAGING_DB_HOST,
    port: process.env.STAGING_DB_PORT,
    user: process.env.STAGING_DB_USER,
    password: process.env.STAGING_DB_PASSWORD,
    database: process.env.STAGING_DB_NAME,
    connectionLimit: 10,
    dateStrings: false,
  },
  domain: process.env.TEST_DOMAIN,
};

const production = {
  db: {
    host: process.env.PRODUCTION_DB_HOST,
    port: process.env.PRODUCTION_DB_PORT,
    user: process.env.PRODUCTION_DB_USER,
    password: process.env.PRODUCTION_DB_PASSWORD,
    database: process.env.PRODUCTION_DB_NAME,
    connectionLimit: 10,
    dateStrings: false,
  },
  domain: process.env.PROD_DOMAIN,
};

const config = {
  dev,
  staging,
  production,
};

export default config[env];

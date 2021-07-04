import databaseConfig from './database.json';
interface IDatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
  timezone: string;
}
const config = {
  development: {
    server: {
      host: 'localhost',
      port: 8080
    },
    database: databaseConfig.development as IDatabaseConfig
  },
  test: {
    server: {
      host: 'localhost',
      port: 8080
    },
    database: databaseConfig.test as IDatabaseConfig
  },
  production: {
    server: {
      host: 'localhost',
      port: 8080
    },
    database: databaseConfig.production as IDatabaseConfig
  }
};
export type ConfigKey = keyof typeof config;

const NODE_EVN = (process.env.NODE_EVN as ConfigKey) ?? 'development';

export default config[NODE_EVN];

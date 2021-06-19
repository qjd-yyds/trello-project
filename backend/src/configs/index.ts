const config = {
  development: {
    server: {
      host: 'localhost',
      port: 8080
    }
  },
  test: {
    server: {
      host: 'localhost',
      port: 8080
    }
  },
  production: {
    server: {
      host: 'localhost',
      port: 8080
    }
  }
};
export type ConfigKey = keyof typeof config;

const NODE_EVN = (process.env.NODE_EVN as ConfigKey) ?? 'development';

export default config[NODE_EVN];

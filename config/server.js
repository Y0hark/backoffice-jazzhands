module.exports = ({ env }) => ({
  host: env('HOSTED_HOST'),
  port: env.int('HOSTED_PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

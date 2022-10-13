module.exports = ({ env }) => ({
  host: env('LOCAL_HOST'),
  port: env.int('LOCAL_PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

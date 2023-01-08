module.exports = ({ env }) => ({
  host: env('LOCAL_HOST'),
  port: env.int('LOCAL_PORT'),
//   url: 'https://yohark.de/jazzhands-backoffice',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

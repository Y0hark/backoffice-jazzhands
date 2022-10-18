module.exports = ({ env }) => ({
  host: env('HOSTED_HOST'),
  port: env.int('HOSTED_PORT'),
  url: 'https://yohark.de/jazzhands-backoffice',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

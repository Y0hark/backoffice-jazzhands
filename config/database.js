// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('LOCAL_DB_HOST'),
//       port: env.int('LOCAL_DB_PORT'),
//       database: env('LOCAL_DB_NAME'),
//       user: env('LOCAL_DB_USER'),
//       password: env('LOCAL_DB_PASSWORD'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('HOSTED_DB_HOST'),
      port: env.int('HOSTED_DB_PORT'),
      database: env('HOSTED_DB_NAME'),
      user: env('HOSTED_DB_USER'),
      password: env('HOSTED_DB_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

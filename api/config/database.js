module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DB_URI", "mongodb://admin:password@127.0.0.1:27017/admin"),
      },
    },
  },
});

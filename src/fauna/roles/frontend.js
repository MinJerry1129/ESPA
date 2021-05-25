const { query } = require("faunadb");

const { Function } = query;

module.exports = {
  name: "frontend",
  membership: [],
  privileges: [
    {
      resource: Function("subscribe"),
      actions: {
        call: true,
      },
    },
    {
      resource: Function("unsubscribe"),
      actions: {
        call: true,
      },
    },
  ],
};

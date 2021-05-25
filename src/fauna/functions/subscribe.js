const { query } = require("faunadb");

const { Query, Lambda, IsDoc, Create, Collection, Var } = query;

module.exports = {
  name: "subscribe",
  role: "admin",
  body: Query(
    Lambda(
      ["email"],
      IsDoc(
        Create(Collection("Subscriptions"), { data: { email: Var("email") } })
      )
    )
  ),
};

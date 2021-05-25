const { query } = require("faunadb");

const { Query, Lambda, IsDoc, Delete, Select, Get, Match, Index, Var } = query;

module.exports = {
  name: "unsubscribe",
  role: "admin",
  body: Query(
    Lambda(
      ["email"],
      IsDoc(
        Delete(
          Select(
            ["ref"],
            Get(Match(Index("unique_Subscriptions_email"), Var("email")))
          )
        )
      )
    )
  ),
};

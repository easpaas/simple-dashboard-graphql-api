import gql from "graphql-tag";

// Schema definition, a.k.a typeDefs
const typeDefs = gql`

  # This "KeyMetric" type defines the queryable fields for every key metric in our data source.
  type KeyMetric {
    title: String!
    info: String
    value: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "key metrics" query returns an array of zero or more key metrics (defined above).
  type Query {
    metrics: [KeyMetric]
  }
`;


export default typeDefs;
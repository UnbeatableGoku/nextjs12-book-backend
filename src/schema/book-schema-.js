const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar JSON
  type Query {
    greet: String
    books(input: criteria!): [Book]
    book(bookId: String): Book
    comparebooks(compareBook: [String]): [Book]
  }
  input inputCriteria {
    index: Int
    userquery: String
  }
  input criteria {
    index: Int
    userquery: String
    filter: String
  }
  type Book {
    id: String
    volumeInfo: BookDetails
    saleInfo: BookSalesDetails
  }
  type BookSalesDetails {
    saleability: String
    retailPrice: RetailPrice
    buyLink: String
  }
  type RetailPrice {
    amount: Float
  }
  type BookDetails {
    title: String!
    subtitle: String
    description: String
    imageLinks: Img
    publisher: String
    authors: [String]
    averageRating: Float
    publishedDate: String
    categories: [String]
  }

  type Img {
    thumbnail: String
  }
`;

module.exports = { typeDefs };

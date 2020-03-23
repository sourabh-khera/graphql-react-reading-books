const { buildSchema } = require('graphql');



module.exports = buildSchema(
  `
    type Book {
      _id: ID!,
      name: String!,
      genre: String!,
      author: Author!
    }

    type Author {
      _id: ID!,
      name: String!
      books: [Book!]
    }
    
    input BookInput {
      name: String!,
      genre: String!,
      authorId: ID!,
    }
    
    input AuthorInput { 
      name: String!
    }

    type RootQuery {
      books: [Book!]!
      authors: [Author!]!
      book(bookId: ID!): Book!
      author(authorId: ID!): Author!
    }

    type RootMutation {
      addBook(bookInput: BookInput): Book
      addAuthor(authorInput: AuthorInput): Author
    }
    
    schema {
     query: RootQuery
     mutation: RootMutation
    } 
  `
);
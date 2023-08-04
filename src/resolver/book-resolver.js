const { default: axios } = require('axios');

const resolvers = {
  Query: {
    greet: () => {
      return 'Hello world';
    },
    books: async (parent, { input }) => {
      console.log(input);

      const url =
        `https://www.googleapis.com/books/v1/volumes?q=${input.userquery}` +
        (input.filter ? `&filter=${input.filter}` : ``) +
        `&startIndex=${input.index}&maxResults=10&key=AIzaSyBITC4OdMC9U2abJntj6XIva2EOHNrcfd4`;
      const { data } = await axios.get(url);
      return data.items;
    },
    book: async (parent, { bookId }) => {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      return data;
    },
    comparebooks: async (parent, { compareBook }) => {
      console.log(compareBook);
      const allBooks = compareBook.map(async (item) => {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${item}`
        );
        return data;
      });
      return allBooks;
    },
  },
};

module.exports = { resolvers };

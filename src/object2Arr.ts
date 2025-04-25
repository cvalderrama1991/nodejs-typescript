// How to sort an object and within the object
type Book = {
  id: string;
  title: string;
  author: {
    firstName: string;
    lastName: string;
  },
  year: number;
}

type Books = {
  [key: string]: Book[]
}

const books: Books = {
  'B': [
    {
      id: '1234',
      title: 'how to cut onions',
      author: {
        firstName: 'mark',
        lastName: 'stink'
      },
      year: 1234
    }
  ],
  'A': [
    {
      id: '2234',
      title: 'letters from war',
      author: {
        firstName: 'ryan',
        lastName: 'blows'
      },
      year: 2234
    }
  ],
  'D': [
    {
      id: '3234',
      title: 'birds',
      author: {
        firstName: 'ross',
        lastName: 'boss'
      },
      year: 3234
    },
    {
      id: '3235',
      title: 'breathing under water',
      author: {
        firstName: 'phillip',
        lastName: 'fisher'
      },
      year: 3235
    }
  ]
}

function sortBooks(bks: Books): Books {
  const sorted: Books = {};
  Object.keys(bks)
    .sort()
    .forEach((key) => {
      if (bks[key]) {
        sorted[key] = [...bks[key]!].sort((a, b) => a.author.lastName.localeCompare(b.author.lastName));
      } else {
        sorted[key] = []; // Handle undefined or missing key with an empty array
      }
    });
  return sorted;
}

console.log(sortBooks(books));

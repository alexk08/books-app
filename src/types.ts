export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    categories: Array<string>;
    authors: Array<string>;
  };
};

export type DataType = {
  totalItems: number;
  items: Array<Book>;
};

export type SelectOption = {
  id: number;
  value: string;
  label: string;
};

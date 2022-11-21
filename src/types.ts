export type Book = {
  id: string;
  volumeInfo: {
    title?: string;
    imageLinks?: {
      thumbnail?: string;
      medium?: string;
    };
    publishedDate?: string;
    description?: string;
    categories?: Array<string>;
    authors?: Array<string>;
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

export type Params = {
  searchTerm?: string;
  category?: string;
  orderedBy?: string;
  startIndex?: number;
};

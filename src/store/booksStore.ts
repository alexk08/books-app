import { makeAutoObservable, runInAction } from "mobx";
import { getBooks } from "../api";
import type { Book, Params } from "../types";

export class BooksStore {
  books: Array<Book> = [];
  totalCount: number = 0;
  state: Status = "initial";

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBooks(params: Params) {
    this.books = [];

    if (!params.searchTerm) {
      this.state = "initial";
      return;
    }

    this.state = "pending";

    try {
      const data = await getBooks(params);

      runInAction(() => {
        this.books = data?.items ?? [];
        this.totalCount = data?.totalItems ?? 0;
        this.state = "done";
      });
    } catch (e) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }

  async fetchMoreBooks(params: Params) {
    this.state = "pending";

    try {
      const data = await getBooks(params);

      runInAction(() => {
        this.books = [...this.books, ...(data?.items ?? [])];
        this.totalCount = data?.totalItems ?? 0;
        this.state = "done";
      });
    } catch (e) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }

  get startIndex() {
    return this.books.length;
  }
}

export const booksStore = new BooksStore();

type Status = "initial" | "pending" | "error" | "done";

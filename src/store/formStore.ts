import { makeAutoObservable } from "mobx";
import { booksStore } from "./booksStore";

export class FormStore {
  searchTerm = "";
  category = "all";
  orderedBy = "relevance";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchTerm(value: string) {
    this.searchTerm = value;
    this.fetchBooks();
  }

  setCategory(value: string) {
    this.category = value;
    this.fetchBooks();
  }

  setOrderedBy(value: string) {
    this.orderedBy = value;
    this.fetchBooks();
  }

  fetchBooks() {
    booksStore.fetchBooks({
      searchTerm: this.searchTerm,
      category: this.category,
      orderedBy: this.orderedBy,
    });
  }
}

export const formStore = new FormStore();

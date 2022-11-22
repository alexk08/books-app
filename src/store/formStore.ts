import { makeAutoObservable, reaction } from "mobx";
import { booksStore } from "./booksStore";
import debounce from "lodash.debounce";

export class FormStore {
  searchTerm = "";
  category = "all";
  orderedBy = "relevance";

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.searchTerm,

      debounce(() => {
        this.fetchBooks();
      }, 500)
    );
  }

  setSearchTerm(value: string) {
    this.searchTerm = value;
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

import axios, { AxiosResponse } from "axios";
import type { DataType, Params } from "../types";

const baseURL = "https://www.googleapis.com/books/v1";

const booksApi = axios.create({
  baseURL: baseURL,
  params: {
    key: "AIzaSyC3F3AQUWnzj6BG8mC2ZfJDbqy71gwcS-M",
  },
});

export async function getBooks(params?: Params) {
  try {
    const response: AxiosResponse<DataType> = await booksApi.get("/volumes", {
      params: {
        q:
          params?.category === "all"
            ? params?.searchTerm
            : `${params?.searchTerm} subject:${params?.category}`,
        orderBy: params?.orderedBy,
        maxResults: 28,
        startIndex: params?.startIndex,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch");
  }
}

export async function getBook(id?: string) {
  try {
    const response: AxiosResponse<DataType> = await booksApi.get(`/volumes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch");
  }
}

import axios from "axios";
import { useState } from "react";
import { BookList } from "../types/bookList";
import { Book } from "../types/api/book";

//　書籍一覧を取得するカスタムフック
export const useAllBooks = () => {
  const [bookLists, setBookLists] = useState<Array<BookList>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBooks = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<Book>>(
        "https://api-for-missions-and-railways.herokuapp.com/public/books?offset=20"
      )
      .then((res) => {
        const data = res.data.map((book) => ({
          id: book.id,
          title: book.title,
          url: book.url,
          detail: book.detail,
          review: book.review,
          reviewer: book.reviewer
        }));
        setBookLists(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getBooks, bookLists, loading, error };
};

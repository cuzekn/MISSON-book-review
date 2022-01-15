import "./styles.css";
import { BookCard } from "./components/BookCard";
import { useAllBooks } from "./hooks/useAllBooks";

export default function App() {
  const { getBooks, bookLists, loading, error } = useAllBooks();

  const onClickFfetchBook = () => getBooks();

  return (
    <div className="w-screen h-full bg-yellow-900">
      <button onClick={onClickFfetchBook} className="p-3 mt-3 ml-3 bg-teal-700 rounded-lg tex3t-yellow-100 text-yellow-50 text-bold">データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p className="text-yellow-50">Loading...</p>
      ) : (
        <>
          {bookLists.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </>
      )}
    </div>
  );
}

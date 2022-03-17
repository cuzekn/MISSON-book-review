import { VFC } from "react";
import { BookList } from "../types/bookList";

type Props = {
  book: BookList;
};

export const BookCard: VFC<Props> = (props) => {
  const { book } = props;

  return (
    <div className="py-16 m-8 font-mono text-lg font-bold border-current border-solid rounded-t-lg bg-yellow-50">
      <dl className="px-5">
        <dt>タイトル</dt>
        <dd>{book.title}</dd>
        <dt>URL</dt>
        <dd>{book.url}</dd>
        <dt>説明</dt>
        <dd>{book.detail}</dd>
        <dt>レビュー</dt>
        <dd>{book.review}</dd>
        <dt>ユーザー</dt>
        <dd>{book.reviewer}</dd>
      </dl>
    </div>
  );
};

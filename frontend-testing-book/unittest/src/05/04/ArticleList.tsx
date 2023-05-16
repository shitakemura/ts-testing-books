import { ArticleListItem, ItemProps } from "./ArticleListItem";

type Props = {
  items: ItemProps[];
};

export const ArticleList = ({ items }: Props) => {
  return (
    <div>
      <h2>記事一覧</h2>
      {items.length ? (
        <ul>
          {items.map((item) => {
            return <ArticleListItem key={item.id} {...item} />;
          })}
        </ul>
      ) : (
        <p>投稿記事がありません</p>
      )}
    </div>
  );
};

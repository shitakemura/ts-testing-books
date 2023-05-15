import { getMyArticles } from "../fetchers";

export async function getMyArticleLinksByCategory(category: string) {
  const data = await getMyArticles();

  const articles = data.articles.filter((article) =>
    article.tags.includes(category)
  );
  if (!articles.length) {
    return null;
  }

  return articles.map((article) => {
    return {
      title: article.title,
      link: `/articles/${article.id}`,
    };
  });
}

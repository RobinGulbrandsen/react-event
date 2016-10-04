var ArticleListEntry = ({article, articleClickEvent}) => (
  <div>
    <p onClick={() => articleClickEvent(article)}>{article.title}</p>
  </div>
);
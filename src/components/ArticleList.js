var ArticleList = ({articles, articleClickEvent}) => (
  <div>
    <h3 className="menu-title">Menu</h3>
    <ul>
      {articles.map(function(article) {
        return <li><ArticleListEntry article={article} articleClickEvent={articleClickEvent} /></li>
      })}
    </ul>
  </div>
);
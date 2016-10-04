var ArticleListEntry = ({article, articleClickEvent}) => (
  <div>
    <p onClick={() => articleClickEvent(article)}>{article.title}</p>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ArticleListEntry.propTypes = {
  article: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ArticleListEntry = ArticleListEntry;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: exampleData,
      article: {}
    };
  }

  articleClickEvent(article) {
    this.setState({
      article: article
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="menu">
          <ArticleList articles={this.state.articles} articleClickEvent={this.articleClickEvent.bind(this)} />
        </div>
        <div className="content">
          <Article article={this.state.article}/>
        </div>
      </div>
    );
  }
}
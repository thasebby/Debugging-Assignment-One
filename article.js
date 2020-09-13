// Import Component
const Component = require ("./Component.js");

// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    // Send what it gets to its parent object
    super(props){
        super(props);
        this.props.title = new ArticleTitle(
            {
                title: this.props.title
            }
        );

        this.props.text = new ArticleContent(
            {
                text: this.props.text
            }
        );
    }
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
       ${this.props.title.render()}
       <span>${this.props.author}</span>
       ${this.props.text.render()}
      </Article>
    `
    );

  }

}

module.exports =  Article;
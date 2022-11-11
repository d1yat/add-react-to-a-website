'use strict';

import Button from './button.js';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <Button onClick={this.handleClick }>
        <i className="fa-solid fa-thumbs-up"></i> Like
      </Button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('like_button_container'));
root.render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>
);

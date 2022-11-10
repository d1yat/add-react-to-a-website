'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <Button onClick={() => this.setState({ liked: true }) }>
        Like
      </Button>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>
);

'use strict';

import Button from './button.js';

const useState = React.useState;

function MyButton() {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return <button className='btn btn-primary' onClick={onButtonClick}>
    <i className='fa-solid fa-thumbs-up'></i> Clicked {count} times
    </button>
}

function App() {
  return (
    <div>
      <h2>Counters that update separately</h2>
      <MyButton />
      <MyButton />
    </div>
  )
}

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
    <App />
  </React.StrictMode>
);

'use strict';

import Button from './button.js';

const useState = React.useState;

function MyButton() {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return (
    <div className='mb-2'>

      <Button onClick={onButtonClick}>
        <i className='fa-solid fa-thumbs-up'></i> Clicked {count} times
      </Button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Counters that update separately</h2>
      <MyButton />
      <MyButton />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('like_button_container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Button from './button.js';

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();

      this.setState({ liked: true });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.liked) {
        return 'You liked this.';
      }

      return React.createElement(
        Button,
        { onClick: this.handleClick },
        React.createElement('i', { className: 'fa-solid fa-thumbs-up' }),
        ' Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('like_button_container'));
root.render(React.createElement(
  React.StrictMode,
  null,
  React.createElement(LikeButton, null)
));
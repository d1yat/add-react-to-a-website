'use strict';

 class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

Button.defaultProps = {children: 'I am a button'};

import React from 'react';
import Message from './Message';
class Hello extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, World!</h1>
        <Message />
      </>
    );
  }
}
export default Hello;

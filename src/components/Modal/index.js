import React from 'react';
import { Background, Container, Message } from './style';

export class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <Background>
        <Container>
            <Message>
                {this.props.children}
            </Message>
            <button onClick={this.props.onClose}>
              Close
            </button>
        </Container>
      </Background>
    );
  }
}
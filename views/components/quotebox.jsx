import React from 'react';

const quoteList = [
  'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
  'Great things are done by a series of small things brought together.',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  'Some are born great, some achieve greatness, and some have greatness thrust upon them.',
  'The greatest weapon against stress is our ability to choose one thought over another.'
];

class QuoteBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      quote: quoteList[Math.floor(Math.random() * quoteList.length)]
    }
  }

  render() {
    return(
        <blockquote className="qotd">{this.state.quote}</blockquote>
    );
  }
}

export default QuoteBox;

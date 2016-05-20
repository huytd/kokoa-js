import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Layout from './layout';
import QuoteBox from './components/quotebox';

class quote extends React.Component {
  render() {
    return(
      <Layout title={this.props.title}>
        <div className="container">
          <div className="row">
            <div className="one-half column" style={{marginTop: 25 + '%'}}>
              <h4>Quote of the Day</h4>
              <QuoteBox/>
              <p>Feeling bored? Back to <a href="/">home page</a> and <a href="https://github.com/huytd/kokoa-js">grab the code</a>, then play yourself!</p>
            </div>
            <div className="one-half column" style={{marginTop: 25 + '%'}}>
                <img src="/img/quote.png" style={{opacity: 0.1}}/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default quote;

import React from 'react';
import Layout from './layout';

class hello extends React.Component {
  render() {
    return(
      <Layout title={this.props.title}>
        <div className="container">
          <div className="row">
            <div className="one-half column" style={{marginTop: 25 + '%'}}>
              <h4>Hello! I'm Kokoa</h4>
              <p>I'm the starter kit that built this page!</p>
              <p>So, what am I?</p>
              <ul>
                  <li>React server-side rendering</li>
                  <li>Tiny CSS framework (<a href="http://getskeleton.com/" target="_blank">Skeleton</a>)</li>
                  <li>That's all!</li>
              </ul>
              <p>Want to see <a href="/quote">what can I do</a>?</p>
              <p><a className="button button-primary" href="https://github.com/huytd/kokoa-js">GET ME HERE</a></p>
            </div>
            <div className="one-half column" style={{marginTop: 25 + '%', opacity: 0.5}}>
                <h5>Am I open source?</h5>
                <p>Yes, I am! I was published (by the f*ckin creator) under MIT license.</p>
                <h5>Am I have a bug(s)?</h5>
                <p>Yes, I am!!! I have a lot of bugs. So I need you to help my f*ckin creator to fix me. He left me here with <a href="https://github.com/huytd/kokoa-js/issues">a buggy body</a> Please help me :(</p>
                <h5>Want to fix me?</h5>
                <p>Yes please!!! Feel free to create a <a href="https://github.com/huytd/kokoa-js/pulls">pull request</a>. My creator is lazy so he will happy to <strike>close</strike> merge them!!!!</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default hello;

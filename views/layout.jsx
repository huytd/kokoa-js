import React from 'react';

class Layout extends React.Component {
  render() {
    return(
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Kokoa React'}</title>
          <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css"/>
          <link rel="stylesheet" href="/css/normalize.css"/>
          <link rel="stylesheet" href="/css/skeleton.css"/>
          <link rel="stylesheet" href="/css/main.css"/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

export default Layout;

'use strict';

var react = require('koa-react-view');
var path = require('path');
var koa = require('koa');
var staticCache = require('koa-static-cache');
var register = require('babel-register');
var route = require('koa-route');

var app = koa();

var viewpath = path.join(__dirname, 'views');
var assetspath = path.join(__dirname, 'public');

react(app, {
  views: viewpath
});

app.use(staticCache(assetspath));

register({
  only: [
    viewpath,
    assetspath
  ],
  presets: ['es2015', 'react']
});

app.use(route.get('/', function* () {
  this.render('hello', {title: 'Kokoa React | Home'});
}));

app.use(route.get('/quote', function* () {
  this.render('quote');
}));

app.listen(3000);
console.log('server start listen at 3000');

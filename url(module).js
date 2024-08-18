const url = require("url");

// const a=url.urlToHttpOptions('http://www.baidu.com:80/s?wd=nodejs&ie=utf-8:8000');
/* url is a module which intergrates us to create a path added with number of vulnerabalitites such as
adding an external hostname, port , any ither url.hash(#) or query parameters and so on */
// console.log(a);

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL);
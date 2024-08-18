const path = require("path");

const a1= path.dirname(__filename);
const a2=path.basename("'C:\\temp\\myfile.html'")
const a3=path.extname('index.html');
const a4=path.parse('/home/user/dir/file.txt');
console.log(a3);
console.log(a1);
console.log(a2);
console.log(a4);

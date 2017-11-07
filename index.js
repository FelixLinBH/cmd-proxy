
function list(val) {
  return val.split(',');
}
function splitPath(val) {
  return val.split('-');
}
var program = require('commander');
var express = require('express');
var proxy = require('http-proxy-middleware');

program
    .version('0.0.1')
    .option('-l, --host [host]', 'Host')
    .option('-t, --port [port]', 'Port')
    .option('-x, --proxy <items>', 'Proxy path',list)
    .option('-s, --https', 'Use https')
    .parse(process.argv);

if (process.argv.length <= 2) {
	console.log("Please see help,using -h");
	process.exit(1);
}
if (!program.host){
	console.log("Please set host,using -l.");
	process.exit(1);
}
if (!program.port){
	console.log("Please set port,using -t.");
	process.exit(1);
}
if (!program.proxy) {
	console.log("Please set proxy path,using -x.");
	process.exit(1);
}

var prefix = (program.https)?"https://":"http://";
var host = prefix + program.host + ":" + program.port;
var app = express();
for (var i = 0; i < program.proxy.length; i++) {
	var tmp = splitPath(program.proxy[i]);
	app.use(tmp[0], proxy({target: prefix +  tmp[1], changeOrigin: true}));
}

app.use('/', proxy({target: host, changeOrigin: false}));
app.listen(program.port);

//-l 127.0.0.1 -t 8088 -x /v1-13.228.170.157,/v2-13.1.1.1

# Cmd-proxy

>Node.js proxy with command-line. 

[![NPM](https://nodei.co/npm/cmd-proxy.png?downloads&downloadRank)](https://nodei.co/npm/cmd-proxy/)

## Install

If you haven't already got Node.js, then [go get it](http://nodejs.org/).

```
npm install cmd-proxy -g
```

## Features

#### Support mulit-proxy with command-line.


## Introduction

### How to use

```
$ cmd-proxy -l 127.0.0.1 -t 8088 -x /v1-1.1.1.1,/v2-2.2.2.2
```

The first path **http://127.0.0.1:8088/v1** will redirect to **http://1.1.1.1/v1** and the other path **http://127.0.0.1:8088/v2** will redirect to **http://2.2.2.2/v2**.

## Authors

* **Felix Lin** - [Github](https://github.com/FelixLinBH)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

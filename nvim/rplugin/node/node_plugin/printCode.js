const fs = require("fs");
const path = require("path");

const express = require("express");

const cp = require("child_process");
const http = require("http");



let printCode = async (plugin)=>{
	try {

		const buffer = await plugin.nvim.buffer;
		const _lines = await buffer.lines;

		const _curDir = path.join(process.env.localappdata,"nvim","rplugin","node","node_plugin","views");
		const _port = "1515";
		const _url = "http://localhost:"+_port;

		function activateServer(){
			let app = express();
			app.set("view engine","ejs");
			app.set("views",_curDir);

			app.get("/",defaultHandler);
			app.use(express.static("ace-builds"));
			let server = app.listen(_port);

			return server;
		}

		const defaultHandler = (request,response)=>{
			//response.json(_lines.join("\n"));
			let codes=[];
			codes.push(buffer.toString());
			//response.render('index',{codes})
			response.json(buffer.toString());
		};

		function executeBrowser(){
			cp.exec("start "+_url);
		}

		let server = activateServer();
		executeBrowser();
		setTimeout(()=>{
			server.close();
		},3000);




	} catch (err) {
		console.error(err);
	}
};

module.exports=printCode;

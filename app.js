const path = require("path");
const fs = require("fs");

function app(){
	let dirLocalAppData = process.env.localappdata;
	console.log(path.join(dirLocalAppData,"nvim","init.vim"));

	let contentInitVim = fs.readFileSync("init.vim","utf-8");
	console.log(contentInitVim);
	
	//
	writeNvim(dirLocalAppData,contentInitVim);
	//writeNvim("C:\\init.vim",contentInitVim);
}

function writeNvim(path,content){
	fs.writeFileSync(path,content,"utf-8");
}

app();


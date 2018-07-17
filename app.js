const path = require("path");
const fs = require("fs");

const copydir = require("copy-dir");
let _dirNvim = path.join(__dirname,"nvim")
let _dirLocalAppData = path.join(process.env.localappdata,"nvim");

copydir.sync(_dirNvim,_dirLocalAppData);


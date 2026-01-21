const fs = require("fs");
fs.readFile("read.txt",{flag: "r",encoding:"utf8"},(err,data)=>{
    if(err)throw err;
    console.log(data);
});

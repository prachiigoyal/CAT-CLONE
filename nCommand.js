let fs=require("fs");

function nCommand(filePath){
try{
let data = fs.readFileSync(filePath, encoding = 'utf8');
let fileContentList=data.split('\n');
let num=1;
for(let i=0;i<fileContentList.length;i++){
    console.log(num++ +" "+ fileContentList[i]);
}
}catch(err){
    console.log(err);
}
}
module.exports={
    nCommandfn:nCommand
}
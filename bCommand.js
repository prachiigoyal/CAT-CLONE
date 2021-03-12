let fs=require("fs");

function bCommand(filePath){
try{
let data = fs.readFileSync(filePath, encoding = 'utf8');
let fileContentList=data.split('\n');
let num=1;
for(let i=0;i<fileContentList.length;i++){
    if(fileContentList[i].length==0|| fileContentList[i]=='\r'){
        console.log(fileContentList[i]);
    }else{
        console.log(num++ +" "+ fileContentList[i]);
    }
}
}catch(err){
    console.log(err);
}
}
module.exports={
    bCommandfn:bCommand
}
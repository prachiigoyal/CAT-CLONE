let fs=require("fs");

function displayCommand(filePath){
try{
let data = fs.readFileSync(filePath, encoding = 'utf8');
console.log(data);
}catch(err){
    console.log(err);
}
}
module.exports={
    displayfn:displayCommand
}
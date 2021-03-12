
let sCommandObj=require('./sCommand');
let bCommandObj=require('./bCommand');
let nCommandObj=require('./nCommand');
let displayfnObj=require('./displayCommand');

let input=process.argv.slice(2);

const PATT = /[\\/]/; // regex to check filepaths
let filePaths = [];
while(PATT.test(input[input.length-1])){
    filePaths.push(input.pop())
}

console.log("The entered file paths are:");
for(let i=0;i<filePaths.length;i++){
    console.log(filePaths[i]);
}

for(let i=0;i<filePaths.length;i++){
    let bExecuted=false;
    let nExecuted=false;
    for(let j=0;j<input.length;j++){
        if(input[j]=="-s"){
            sCommandObj.sCommandfn(filePaths[i]);
        }else if(input[j]=="-b" && nExecuted==false){
            bCommandObj.bCommandfn(filePaths[i]);
            bExecuted=true;
        }else if(input[j]=="-n" && bExecuted==false){
            nCommandObj.nCommandfn(filePaths[i]);
            nExecuted=true;
        }
    }
}
if(input.length==0){
    for(let i=0;i<filePaths.length;i++){
        displayfnObj.displayfn(filePaths[i]);
    }
}
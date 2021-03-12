let fs=require('fs');

const PATT = /\r|\r{2,}|\n{2,}/ ; // Regex pattern to search for line breaks

function sCommand(filePath){
    try{
        let data = fs.readFileSync(filePath, encoding = 'utf8');
        var testStr = data;
        // replace line breaks
        while(PATT.test(testStr)){
            testStr = testStr.replace(PATT, '\n');
        }
        console.log(testStr);
    } catch(err){
        console.log(err);
    }
}
module.exports={
    sCommandfn:sCommand
}
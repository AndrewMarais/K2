
//var basePath = '../Immersion.Original';
var basePath = '.';

const fs = require('fs');
var mergeCSSFile = basePath + '/temp/merged.html';
try 
{
    //Delete the temp file
    fs.unlinkSync(mergeCSSFile);
} catch (error) {
    //File didn't exist    
}

try 
{
    fs.mkdirSync(basePath +'/temp', { recursive: true });
} catch (error) {
    //Folder already existed
}

var files = fs.readdirSync(basePath+"/src/");
//listing all files using forEach
files.forEach(function (file) {
    // Do whatever you want to do with the file
    if(file==='Sharedo.css' || file==='ApplyStyle.html')
    {
        console.log("Appending to \"" + mergeCSSFile + "\" File:("  + basePath + "/src/" + file +")");
        fs.readFile(basePath + "/src/" + file, 'utf8', function (err,cssData) {
            if (err) {
                return console.log("Error reading " + file + '. ' + err);
            }
            if(file==='Sharedo.css')
            {
                fs.appendFileSync(mergeCSSFile, "<style>" + cssData + "</style>");
            }
            else
                fs.appendFileSync(mergeCSSFile, cssData);
        });
    }
});

console.log("Finished append \"" + mergeCSSFile + "\"");
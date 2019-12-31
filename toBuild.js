const fs=require('fs')
const path=require('path')
console.log(process.argv)
try{
    const data= fs.readFileSync(path.join(__dirname,'./public/config.json'),'utf8')
    console.log(data)
    const _data = JSON.parse(data);
    const num = new Date().getTime()
    _data.xskjVersion = num;
    fs.writeFileSync(path.join(__dirname, './public/config.json'), JSON.stringify(_data))
} catch(err) {
    throw err
}

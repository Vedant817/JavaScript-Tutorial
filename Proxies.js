//!Proxies act as an extra layer between the operations on an object.
const gameSettings={}
const gameSettingsProxy= new Proxy(gameSettings,{
    get:(o,property)=>{
        return property in o ? o[property] :"Property does not exist"
    },
    set:(o,property,value)=>{
        if(property==='difficulty'&& !['easy','medium','hard'].includes(value.toLowerCase())){
            throw new Error('Invalid difficulty');
        }
        o[property]=value;
    }
})
console.log(gameSettingsProxy.difficulty);
gameSettingsProxy.difficulty='easy';
console.log(gameSettingsProxy.difficulty);

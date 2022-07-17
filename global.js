//globals - no window

//__dirname - path to current directory 
//__filename - file name
//require - function to use modules(commonjs)
//module-info about current module
//process - info about env where the program is being executed

console.log(module.info)
setInterval (()=> {
    console.log('hello world')
}, 1000)

const ajax = (settings = undefined) => {
    let params = {};
    switch (typeof settings) {
        case 'string':
            params.url = settings;
            break;
        case 'object': params = settings;

        default:
            break;
    }

if(!('data'in params))params.data={};
if(!('method'in params))params.method='POST';
let promise={
    resolve: null,
    reject:null
}
let request= new XMLHttpRequest();
const url= function (url) {
    params.url=url;
    return this;
    
}
const method=function(method){
    params.method=method;
    return this;
}
const data=function(objectOrKey,value){
    Push(objectOrKey,value)
    return this;
}
const Push= function(objectOrKey,value){
    switch (typeof objectOrKey) {
        case'object': params.data=
        Object.assign(objectOrKey,params.data);break;
        case'string':params.data=Object.assign(
            {[objectOrKey]:value},params.data);break;
        
    }const post=fuction(data{para})
}

}
function mySome(callback){
    for(let i = 0; i< this.length;i++){
        callback(this[i],i,this)
        if(callback){
           return true
        }
    }
    return  false
}


function myMap(callback){
    let result = callback
    for(let i = 0; i< this.length;i++){
        result(this[i],i,this)
    }
    return result
}


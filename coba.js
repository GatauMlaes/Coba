const getUserAsync = (id,cb) => {
    const time = id == 1 ?3000 :5000
    setTimeout(() =>{
        const nama = id == 1 ?'Tirta' :'Fuad' ;
        cb({id,nama})
    },time)
}


module.exports=getUserAsync

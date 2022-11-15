const std = {
    name: 'Khojiakbar',
    surname: 'Murodov',
    age: 16,
    status: true
}


let passportData = {
    serries: 'AC',
    number: 05200,
    date: 2022
}


let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}

let ObjectRelate = Object.assign(std, passportData)

let connectedChanges = Object.assign(
    Object.keys(std, passportData),
    Object.values(std, passportData)
)

let filtered = connectedChanges.filter(item => {
    let key = typeof item

    if(types[key]){
     types[key].push(item)
    }
})


console.log(
    ObjectRelate,
    connectedChanges
    );
    
    console.log(filtered);





// console.log(
//     Object.assign(std, passportData),
//     Object.keys(std, passportData),
//     Object.values(std, passportData),
//     Object.assign(std.passportData)
// );


// let objectConnect = Object.assign(std, passportData)
// let objectKeys = Object.keys(std, passportData)
// let objectValues = Object.values(std, passportData)
// let arrConnect = Object.assign(objectKeys, objectValues)
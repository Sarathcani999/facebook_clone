const deletePassword = (JSON_obj) => {
    console.log("Before Deletion : ")
    console.log(Object.keys(JSON_obj))

    delete JSON_obj["password"]

    console.log("After Deletion : ")
    console.log(JSON_obj)
}

// var obj = { 
//     occupation: 'Student',
//     city: 'Ernakulam',
//     followers: [],
//     following: [],
//     _id: "5e832307971dfd47d03a499e",
//     name: 'Sarath C Ani',
//     username: 'Sarathcani999',
//     password:
//     '$2a$10$0V3x/JcX7hZ2wntuqDE7kuE0Ozps11HFnP1DfMbxLveHx7GBjpReK',    
//     bio: 'Hi I\'m Sarath',
//     __v: 0 
// }

// deletePassword(obj)

module.exports = deletePassword
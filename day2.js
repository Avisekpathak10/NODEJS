
//truthy and falsy values is js
//false , 0, '', undefined , null,
//-1,NaN,'abc',true,

//Asynchonus javascript;


setTimeout(() => {
    console.log("Set timeout")
}, 0);
console.log("Log execution");

const sumArray = (arr)=>{

}

//callback hell 
// pyramid of doom 

const getData = (cb) => {
    setTimeout(() => {
        cb({ id: 1, name: "Texas", semester: 5 });
    }, 30000);
}

const getClassInformation = (cb) => {
    setTimeout(() => {
        cb({ students: [] });
    }, 2000); // Assuming a shorter timeout for class information
}

// Function to handle data and class information
const processData = () => {
    getData((data) => {
        console.log("Data received:", data);
    });

    getClassInformation((classInfo) => {
        console.log("Class information received:", classInfo);
    });
}

// Invoke processData
processData();

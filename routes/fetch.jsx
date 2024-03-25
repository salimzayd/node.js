// async function fetchapi() {
//     // const url ="https://api.postalpincode.in/pincode/110001"
//     const response = await fetch("https://api.postalpincode.in/pincode/110001")
//     const data = await response.json()


//     const postOffice = data[0].postOffice
//     const resul2 =postOffice.map(postOfficeData =>(
//         {name: postOfficeData.Name, branchtype: postOfficeData.BranchType}
//     ))
    
//     console.log(resul2,"retdryu");
// }

// fetchapi();


async function fetchData() {
    try {
        const response = await fetch("https://api.postalpincode.in/pincode/110001");
        const data = await response.json();
        
        const postOffice = data[0].PostOffice;
        const result = postOffice.map(postOfficeData => ({
            name: postOfficeData.Name,
            BranchType: postOfficeData.BranchType
        }));
        
        console.log(result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();


// fetch("https://api.postalpincode.in/pincode/110001")
// .then((res)=>res.json())
// .then(data=> data.map(()=>{
//         const postOffice= data[0].PostOffice
//         const result= postOffice.map(postOfficeData=>(
//             {name: postOfficeData.Name,BranchType: postOfficeData.BranchType }
//         ))
//         console.log(result);
//     }))




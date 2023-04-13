export const sendMail=data=>{
    return fetch('http://localhost:5000/api/sendmail',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(resp=>{
        console.log("response", resp)
        return resp.json();
    }).catch(err=>console.log(err))
}
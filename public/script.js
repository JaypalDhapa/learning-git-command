const dummyData = {
    name:"jaypal dhapa",
    email:"jaypaldhapa112345@gmail.com",
    phone:12346,
    company:"hacker",
    flag:"http:hacker is attaking on your backend",
    messag:"Hey jaypal please add cors origin in your server now hacker is attaking on your backend from diffrent origin"
}

async function setCookie() {
    try{
        const res =  await fetch("https://backend-production-b013.up.railway.app/formdata",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(dummyData)
        });

        const data = res.json();
        console.log(data.msg);
    }catch(err){
        console.log("something went wrong",err);
    }
}

setCookie();
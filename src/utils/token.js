
 const send_token = () =>{
    const token = localStorage.getItem('token');
    return  {
        "content-type":"application/json",
        authorization: `bearer ${token}`
    }
}

export default send_token



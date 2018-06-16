export  class UserServiceClient{

   createUser(username,password){

     const user = {
       username:username,
       password:password
     }

     return fetch("http://localhost:4000/api/user",{
       method:'post',
       headers:{
         'content-type':'application/json'
       },
       credentials: 'include',
       body:JSON.stringify(user)
     })

  }

  logout(){
     return fetch("http://localhost:4000/api/logout",{
       method:'post',
       credentials: 'include'
     })
  }

  profile(){
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

}

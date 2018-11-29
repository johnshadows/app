UserRegistrationFunction = () =>{
 
 
    const { UserName }  = this.state ;
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    
    
    
   fetch('https://reactnativecode.000webhostapp.com/user_registration.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: UserName,
    
       email: UserEmail,
    
       password: UserPassword
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }
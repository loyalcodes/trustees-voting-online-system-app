import { API_BASE_URL } from "../constants/Config";
import { readLocalStorageObject } from "../helper/LocalStorage";

const userData = async (id: any) =>{
    const user = await readLocalStorageObject("userData")
    const { userProfile } = user
    const userId = userProfile[0].EMPLOYEE_ID
    return await fetch(API_BASE_URL+"/users/data/"+id)
    .then(async response => {
      const { data } = JSON.parse(await response.text());
      return data;
    })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });

}


const getEligibleMembers = async () => {
  return await fetch(API_BASE_URL+"/vote/all")
  .then(async response => {
    const { data } = JSON.parse(await response.text());
    return data;
  })
  .then(result => {
    return result;
  })
  .catch(error => {
    return error;
  });

}


const getDepartments = async () => {
  return await fetch(API_BASE_URL+"/department/list")
  .then(async response => {
    const { data } = JSON.parse(await response.text());
    return data;
  })
  .then(result => {
    return result;
  })
  .catch(error => {
    return error;
  });

}

const getCandidates = async () =>{
  return await fetch(API_BASE_URL+"/users")
  .then(async response => {
    const { data } = JSON.parse(await response.text());
    return data;
  })
  .then(result => {
    return result;
  })
  .catch(error => {
    return error;
  });

}

const getCandidatesByDepartment = async (departmentId: any) =>{
  return await fetch(API_BASE_URL+"/users/list/by-department/"+departmentId)
  .then(async response => {
    const { data } = JSON.parse(await response.text());
    return data;
  })
  .then(result => {
    return result;
  })
  .catch(error => {
    return error;
  });

}


const userAuth = async (email: String, password: String) =>{

  const temp = {
      email: email,
      password: password
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(temp);

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return await fetch(API_BASE_URL+"/auth/login", requestOptions)
    .then(async response => {
      const { data } = JSON.parse(await response.text());
      return data;
    })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });

}

const userNominate = async (id: any) =>{
const user = await readLocalStorageObject("userData")
const { userProfile } = user
const userId = userProfile[0].EMPLOYEE_ID

    const temp = {
        nominee_id: id,
        elected_by: userId,
        election_id : 1
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(temp);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      return await fetch(API_BASE_URL+"/nominee/new", requestOptions)
      .then(async response => {
        const { data } = JSON.parse(await response.text());
        
        return data;
      })
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('ERROR:======', error)
        return error;
      });

}

const userRemoveNomination = async () =>{
  const user = await readLocalStorageObject("userData")
  const { userProfile } = user
  const userId = userProfile[0].EMPLOYEE_ID
  
      const temp = {
          userId: userId
      }
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify(temp);
  
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
        return await fetch(API_BASE_URL+"/nominee/remove/by-user", requestOptions)
        .then(async response => {
          const { data } = JSON.parse(await response.text());
          
          return data;
        })
        .then(result => {
          return result;
        })
        .catch(error => {
          console.log('ERROR:======', error)
          return error;
        });
  
  }




  const userRemoveVote = async () =>{
    const user = await readLocalStorageObject("userData")
    const { userProfile } = user
    const userId = userProfile[0].EMPLOYEE_ID
    
        const temp = {
            userId: userId
        }
    
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(temp);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
    
          return await fetch(API_BASE_URL+"/vote/remove/by-user", requestOptions)
          .then(async response => {
            const { data } = JSON.parse(await response.text());
            
            return data;
          })
          .then(result => {
            return result;
          })
          .catch(error => {
            console.log('ERROR:======', error)
            return error;
          });
    
    }


const userVote = async (id: any) =>{
  const user = await readLocalStorageObject("userData")
  const { userProfile } = user
  const userId = userProfile[0].EMPLOYEE_ID
  
      const temp = {
          nominee_id: id,
          elected_by: userId,
          election_id : 1
      }
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify(temp);
  
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
        return await fetch(API_BASE_URL+"/vote/new", requestOptions)
        .then(async response => {
          const { data } = JSON.parse(await response.text());
          
          return data;
        })
        .then(result => {
          return result;
        })
        .catch(error => {
          console.log('ERROR:======', error)
          return error;
        });
  
  }

export {
    userNominate,
    userAuth,
    userData,
    getCandidates,
    userVote,
    userRemoveVote,
    userRemoveNomination,
    getEligibleMembers,
    getDepartments,
    getCandidatesByDepartment
}
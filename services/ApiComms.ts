import { API_BASE_URL } from "../constants/Config";

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

const userNominate = async () =>{

    const temp = {
        nominee_id: 145,
        elected_by: 147,
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

export {
    userNominate,
    userAuth
}
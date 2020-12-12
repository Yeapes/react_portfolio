import axios from "axios";

class RestClient{

    static getRequest = (getUrl) => {
       return axios.get(getUrl).then(response => {
            return response.data;
        }).catch(error => {
            return null;
        })
    }

    
    static postRequest = (postUrl,postData) => {

        let config = {
            headers: { 
                'content-type': 'application/x-www-form-urlencoded'
              }
        }

       return axios.post(postUrl,postData,config).then(response => {
            return response.data;
        }).catch(error => {
            return null;
        })
    }

}

export default RestClient;
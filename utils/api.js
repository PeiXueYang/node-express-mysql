
import * as apis from './index'
export default {
    register(params) {
        return fetch(apis.regUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    },
    Login(params){
        return fetch(apis.loginUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    }


}
import axios from 'axios';
import * as config from './Config';

export default function Callapi(enpont, method = "GET", body) {
    return axios({
        method: method,
        url: `${config.CALL_API}/${enpont}`,
        data: body
    })
        .catch((error) => {
            console.log(error);
        })
}
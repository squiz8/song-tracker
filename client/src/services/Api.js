import axios from 'axios';

// Why must it be export default
export default ()=>{
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}
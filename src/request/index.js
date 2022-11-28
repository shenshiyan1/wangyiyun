import axios  from "axios";


let service=axios.create({
    baseURL:"http://120.79.6.252:3000",
    timeout:3000
})
export default service
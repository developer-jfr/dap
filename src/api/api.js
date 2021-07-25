import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dapplets-hiring-api.herokuapp.com/api/v1/',
    headers: {
        "Accept": "application/octet-stream"
    }
})

export const dappletsAPI = {

    getDapplets(currentPage = 0, title = JSON.stringify("one"), type = JSON.stringify("ASK")) {
       
        console.log(currentPage)
        return instance.get(`dapplets?limit=20&start=${currentPage}&filter=[{"property":"title","value": ${title}}]&sort?=[{"property":"title","direction": ${type}}]`).then(res => res.data);
       
    },
    getTags() {
        return instance.get(`tags`).then(res => res.data)
    },
    getFiles(filename) {
       
        return instance.get(`files/${filename}`).then(res => res.data)
    }
}
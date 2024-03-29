import { axios_instance } from "..";
export function getMusicListDetail(id){
    return axios_instance({
        method:'get',
        url:`/playlist/detail?id=${id}`
    })
}
export function getMusicList(id){
    return axios_instance({
        method:'get',
        url:`/playlist/track/all?id=${id}&limit=30&offset=0`
    })
}
export function getMusicSquare(){
    return axios_instance({
        method:'get',
        url:`/top/playlist/highquality`
    })
}
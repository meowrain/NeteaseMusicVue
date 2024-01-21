import { axios_instance } from "..";
//获取音乐推荐
export function getMusicList(){
    return axios_instance({
        method: "get",
        url:"/personalized?limit=10"
    })
}
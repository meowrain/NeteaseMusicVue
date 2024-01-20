import {axios_instance} from "..";

export function getBannerImage(){
    return axios_instance({
        method:"get",
        url:"/banner?type=2"
    })
}
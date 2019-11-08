import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "8ceafa63-102b-45e6-ad4f-1dd6495177f3"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    getUsers(currentPage=2, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)}
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)}
}
export const loginAPI = {
    getAuthMe () {
        return instance.get(`auth/me`)}
}
export const followingAPI = {
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)},
    getFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)}
}

import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "81b8995d-7bd7-4cb2-82ba-f720a9fb0e23"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    getUsers(currentPage=2, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)}
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)},

    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data)},

    updateStatus(status) {
    return instance.put(`profile/status`, {status: status}).then(response => response.data)}
}

export const loginAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const followingAPI = {
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)},
    getFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)}
}

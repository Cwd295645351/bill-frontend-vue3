import axios from "axios"
import { getConfig } from "@/utils/config"

const REFRESHING_TOKEN = "/api/common/refreshToken" // 刷新token
const LOGOUT = "/api/common/logout" // 退出登录

const config = getConfig()

const instance = axios.create({
	baseURL: config.baseURL
})

// 刷新token
export const refreshToken = (refreshToken: string) => {
	return instance.post(REFRESHING_TOKEN, { refreshToken })
}

// 退出登录
export const logout = () => {
	return instance.post(LOGOUT)
}

import axios from 'axios'

import Cookies from 'js-cookie';
const AUTH_API_BASE_URL = "http://localhost:8099";

class AuthenticationService {
    executeJwtAuthenticationService(userId, userPwd) {
        return axios.post(AUTH_API_BASE_URL + "/login",
            {
                userId,
                userPwd
            },
            {
                withCredentials: true,
                headers: { "Content-Type": `application/json` }
            })
            .then((res) => {
                if (res.status === 200) {
                    alert('로그인 스엉고엉!');
                    console.log("===================================================================================");
                    
                    this.registerSuccessfulLoginForJwt(userId)
                }
            })
            .catch((error) => {
                alert('로그인 실패!');
                console.log(error);
            });

    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.post(AUTH_API_BASE_URL + "/hello");
    }

    registerSuccessfulLoginForJwt(userId) {
        localStorage.setItem('authenticatedUser', userId);
    }
    
    logout() {
        return axios.get(AUTH_API_BASE_URL + "/logout")
            .then((res => {
                if (res.status === 200) {
                    localStorage.removeItem('authenticatedUser');
                    Cookies.remove('accessToken')
                }
            }))
            .catch((error) => {
                alert('이미 로그아웃한 유저입니다.');
                console.log(error);
            });;

    }

    isUserLoggedIn() {
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken);
        if (accessToken != null) {
            return true;
        }
        return false;
    }

    getLoggedInUserName() {
        const user = localStorage.getItem('authenticatedUser');
        if (user === null) return "";
        return user;
    }
}

export default new AuthenticationService()
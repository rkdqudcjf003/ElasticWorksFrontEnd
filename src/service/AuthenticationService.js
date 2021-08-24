import axios from 'axios'

import Cookies from 'js-cookie';
const AUTH_API_BASE_URL = "http://localhost:8222";

class AuthenticationService {
    // send username, password to the SERVER
    executeJwtAuthenticationService(userId, userPwd) {
        
        // let data = {
        //     userId: loginDTO.userId,
        //     userPwd: loginDTO.userPwd
        // }
        // const loginRequestDto = JSON.stringify(data);
        
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
                }
            })
            .catch((error) => {
                alert('로그인 실패!');
                console.log(error);
                // console.warn(error);
                // console.error(error);
            });
            
    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.post(AUTH_API_BASE_URL + "/hello");
    }

    registerSuccessfulLoginForJwt(userId, accessToken, refreshToken) {
        // console.log("===registerSuccessfulLoginForJwt===")
        // Cookies.set("authenticatedUser", userId);
        // console.log("userId: " + Cookies.get('userId'))
        // Cookies.set("accessToken", accessToken, { path: '/'});
        // Cookies.set("refreshToken", refreshToken, { path: '/'});
        this.setupAxiosInterceptors();
    }

    // createJWTToken(token) {
    //     return token
    // }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const accessToken = Cookies.get("accessToken");
                const refreshToken = Cookies.get("refreshToken");
                if (accessToken) {
                    config.headers['Cookie'] = accessToken
                }

                if (refreshToken) {
                    config.headers['Cookie'] = refreshToken;
                }

                
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        // const cookies = new Cookies();
        Cookies.remove('accessToken', { path: '/'})
        Cookies.remove('refreshToken', { path: '/'})
        Cookies.remove('authenticatedUser')
        console.log("로그아웃 요청 전 Access_Token 확인: " + Cookies.get("accessToken"));
        console.log("로그아웃 요청 전 Refresh_Token 확인: " + Cookies.get("refreshToken"));
        return axios.get(AUTH_API_BASE_URL + "/logout");

    }


    isUserLoggedIn() { 
        // const cookies = new C ookies();
        let accessToken = Cookies.get('accessToken');
        let username = Cookies.get('authenticatedUser');
        console.log("===UserloggedInCheck===");
        console.log(accessToken);
        console.log(username);
 
        if (username) {
            return true;
        }

        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        const user = Cookies.get("accessToken");
        if (user === null) return "";
        return user;
    }
}

export default new AuthenticationService()
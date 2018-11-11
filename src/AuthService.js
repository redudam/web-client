export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://95.213.28.116:3000' // API server domain
        this.fetchWithHeaders = this.fetchWithHeaders.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getUser = this.getUser.bind(this)
        this.loggedIn = this.isLoggedIn.bind(this);
    }

    login(email, password) {
        // Get a token from api server using the fetch api
        return this.fetchWithHeaders(`${this.domain}/v1/auth/login`, {
            method: 'POST',
            body: JSON.stringify({email,password})
        }).then(res => {
            this.setToken(JSON.stringify(res.token)); // Setting the token in localStorage
            this.setUser(JSON.stringify(res.user));
            return Promise.resolve(res);
        }).catch(err => {
            console.log('login failed');
            throw Error(err);
        });
    }

    registerUser(email, password, inviteToken = false) {
        const body = {email, password};
        if (inviteToken) {
            body.inviteToken = inviteToken;
        }
        return this.fetchWithHeaders(`${this.domain}/v1/auth/register`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(res => {
            this.setToken(JSON.stringify(res.token));
            this.setUser(JSON.stringify(res.user));
            return Promise.resolve(res);
        }).catch(err => {
            throw Error(err);
        });
    }

    isLoggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token;
    }

    isAdmin() {
        return this.isLoggedIn() && this.getUser().role === 'admin';
    }

    isTokenExpired(token) {
        return (new Date(token.expiresIn) < new Date());
    }

    setToken(stringifiedToken) {
        localStorage.setItem('token', stringifiedToken);
    }

    setUser(stringifiedUser) {
        localStorage.setItem('user_data', stringifiedUser);
    }

    getToken() {
        const token = localStorage.getItem('token');
        return token && JSON.parse(token);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_data');
    }

    getUser() {
        const user = localStorage.getItem('user_data'); 
        return user && JSON.parse(user);
    }

    refreshToken() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const email = this.getUser().email;
        const refreshToken = this.getToken().refreshToken;

        return fetch(`${this.domain}/v1/auth/refresh-token`, headers, {
            method: 'POST',
            body: JSON.stringify({
                email,
                refreshToken
            })
        })
        .then(this._checkStatus)
        .then((res) => res.json())
        .then((token) => {
            this.setToken(JSON.stringify(token))
        })
        .catch(() => {
            this.logout();
        });
    }

    fetchWithHeaders(url, options) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        
        if (this.isLoggedIn()) {
            const token = this.getToken();
            
             if (this.isTokenExpired(token)) {
                return this.refreshToken()
                    .then(() => this.fetchWithHeaders(url, options));
            }
            headers['Authorization'] = 'Bearer ' + this.getToken().accessToken
        } 

        return fetch(url, {
            headers,
            ...options
            })
            .then(this._checkStatus)
            .then(response => response.json())
            .catch((err) => {
                throw new Error(err);
            });
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}

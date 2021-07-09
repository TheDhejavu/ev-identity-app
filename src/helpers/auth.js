
export const authHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return { 
            headers:{ 
                Authorization: `Bearer ${token ? `${token}` : ""}` 
            }
        }
    }
    return {};
};

export const setAuthToken = (token) => {
    window.localStorage.setItem('token', token);
};

export const removeAuthToken = () => {
    window.localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    try {
        const token = window.localStorage.token;
        
        if (token) {
            return token;
        }
        
        return false;
    } catch (error) {
        return false;
    }
};

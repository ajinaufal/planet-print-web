import Cookies from 'js-cookie';

export const setCookie = (name: string, value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(name, value, { /* secure: true,*/ signed: true, expires: 7, sameSite: 'lax' });
};

export const getCookie = (name: string, options?: Cookies.CookieAttributes) => {
    return Cookies.get(name);
};

export const removeCookie = (name: string, options?: Cookies.CookieAttributes) => {
    Cookies.remove(name, options);
};

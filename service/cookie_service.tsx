import Cookies from 'js-cookie';

export const setCookie = (name: string, value: string) => {
    Cookies.set(name, value, { /* secure: true,*/ signed: true, expires: 7 });
};

export const getCookie = (name: string) => {
    return Cookies.get(name);
};

export const removeCookie = (name: string, options?: Cookies.CookieAttributes) => {
    Cookies.remove(name, options);
};

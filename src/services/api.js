let domain = process.env.REACT_APP_DOMAIN;
// domain = 'http://192.168.1.14:3333/'

export const REGISTER_API = `${domain}api/new-member`;
export const LOGIN_API = `${domain}api/to-play`;
export const USER_INFO_API = `${domain}api/profile`;
export const SEND_OTP_API = `${domain}api/send-otp`;
export const CONTACT_API = `${domain}api/contact`;
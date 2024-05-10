import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
   baseUrl: process.env.BASE_URL
}

export const CREDENTIALS = {
    user: process.env.SAUCE_USER,
    pass: process.env.SAUCE_PASSWORD
}

export const testData = {
    errorMsg: "lo que sea",
    

}

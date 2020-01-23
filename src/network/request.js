import axios from 'axios'
export function request(config) {
  const intance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000,
  })
  intance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })
  intance.interceptors.response.use(res => {
    // console.log(res)
    return res
  }, err => {
    // console.log(err)
    return err
  })
  return intance(config)
}

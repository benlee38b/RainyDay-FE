import axios from 'axios'


const request = axios.create({
    baseURL: 'https://43ji52vekk.execute-api.eu-west-2.amazonaws.com/prod',
})


export const postDetails = async (city, email) => {
  console.log(city, email)
  return await request.post('/subscribe', {
    city, email
  })
}
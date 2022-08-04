


// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/andrew',
  timeout: 8000
})


// @ts-ignore
export const pokeApi = new axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 8000
})
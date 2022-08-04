import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { MyPokemon } from "../Models/MyPokemon.js"
import { sandboxApi } from "./AxiosService.js"








class MyPokemonsService {

  async releasePokemon(id) {
    await sandboxApi.delete(`/pokemon/${id}`)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(p => p.id != id)
  }



  async getPokemons() {
    let res = await sandboxApi.get('/pokemon')
    ProxyState.myPokemons = res.data.map(p => new MyPokemon(p))

  }
  constructor() {
  // ProxyState.on('myPokemons', _draw)
}


  async catchPokemon() {
    let res = await sandboxApi.post('/pokemon', ProxyState.activePokemon)
    console.log('[catch pokemon res]', res);
    let newPokemon = new MyPokemon(res.data)
    ProxyState.myPokemons = [...ProxyState.myPokemons, newPokemon]
  }
}


export const myPokemonsService = new MyPokemonsService()

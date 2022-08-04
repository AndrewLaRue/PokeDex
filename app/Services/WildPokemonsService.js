import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js";
import { WildPokemon } from "../Models/WildPokemon.js"
import { pokeApi } from "./AxiosService.js"




class WildPokemonsService {


  async setActivePokemon(url) {
    let res = await pokeApi.get(url)
    console.log(url,'url active pokemon');
    ProxyState.activePokemon = new ActivePokemon(res.data)
    console.log(new ActivePokemon(res.data));

 }
 async  getPokemon() {
   let res = await pokeApi.get('pokemon?limit=1500&offset=0')
// console.log('[get all pokemon res]', res);
   ProxyState.wildPokemons =res.data.results.map(p => new WildPokemon(p))
  }
}





export const wildPokemonsService = new WildPokemonsService()

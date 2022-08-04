import { ProxyState } from "../AppState.js";
import { myPokemonsService } from "../Services/MyPokemonsService.js";
import { Pop } from "../Utils/Pop.js";


function _draw() {
  let template = ''
  ProxyState.myPokemons.forEach(p => template += p.ListTemplate)

// @ts-ignore
document.getElementById('my-pokemon').innerHTML = template
}



export class MyPokemonsController {

  constructor() {
    ProxyState.on('myPokemons', _draw)
    this.getPokemons()
  }

  async getPokemons() {
    try {
      await myPokemonsService.getPokemons()
    } catch (error) {
      console.error('[Getting Pokemon]', error);
      Pop.error(error)
      
    }
  }

  async catchPokemon() {
    try {
      let party = ProxyState.myPokemons
      if (party.length >= 6) {
        Pop.toast('You Already have 6 pokemon in your Party!  Release one to catch another.')
      } else {
        await myPokemonsService.catchPokemon()
      }
    } catch (error) {
      console.error('[catch pokemon error]', error);
      Pop.error(error)
    }
  }

  async releasePokemon(id) {
    try {
            const yes = await Pop.confirm('Release Pokemon')
      if (!yes) { return }

      await myPokemonsService.releasePokemon(id)
    } catch (error) {
      console.error('[Releasing Pokemon]', error);
      Pop.error(error)
    }
  }

}

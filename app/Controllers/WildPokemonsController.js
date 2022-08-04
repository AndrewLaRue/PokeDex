import { ProxyState } from "../AppState.js";
import { wildPokemonsService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPokemon() {
  let template = ''

  ProxyState.wildPokemons.forEach(p => template += p.Template)

  // @ts-ignore
  document.getElementById('wild-pokemon').innerHTML = template
}




export class WildPokemonsController {
  constructor() {
    ProxyState.on('wildPokemons', _drawPokemon)
    this.getPokemon()
}
  async getPokemon() {
  try {
    await wildPokemonsService.getPokemon()
  } catch (error) {
    console.error('[Getting Pokemon]', error);
    Pop.error(error)
  }
  }

  async setActivePokemon(url) {
    try {
      await wildPokemonsService.setActivePokemon(url)
    } catch (error) {
      console.error('[Setting active pokemon]', error);
      Pop.error(error)
    }
  }

}




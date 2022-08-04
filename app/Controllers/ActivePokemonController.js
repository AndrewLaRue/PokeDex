import { ProxyState } from "../AppState.js";


function _draw() {
  // console.log('getting here?');
    if (!ProxyState.activePokemon) {
    return // full stop you cant draw what you don't have
  }
  // @ts-ignore
document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.activePokemonTemplate

}

export class ActivePokemonController {
  constructor() {
    ProxyState.on('activePokemon', _draw)
  }
}

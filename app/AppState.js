import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  
  /** @type {import('./Models/WildPokemon.js').WildPokemon[]} */
  wildPokemons = []

  
  /** @type {import('./Models/MyPokemon.js').MyPokemon[]} */
  myPokemons = []

  
  /** @type {import('./Models/ActivePokemon.js').ActivePokemon} */
  // @ts-ignore
  activePokemon = null


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

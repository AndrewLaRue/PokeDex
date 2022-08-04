import { ProxyState } from "../AppState.js"


export class ActivePokemon {

  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
        try {
      this.type0 = data.types[0].type.name
      this.type1 = data.types[1].type.name
    } catch (error) {
      this.types = 'Pokedex data corrupted...'
    }
    // this.types = data.types || data.types.type.name
    this.img = data.img || data.sprites.other.home.front_default
  }


  get activePokemonTemplate() {
    return `
            <h1 class="col-12 text-center "><b>${this.name}</b></h1>
            <div class=" text-center">
            <i class="mdi mdi-pokeball fs-1 text-danger selectable no-select" title="Throw Pokeball" onclick="app.myPokemonsController.catchPokemon()"></i>
            </div>
                
            <div class="text-center mb-0 pb-0">
              <img class="img-fluid shake" src="${this.img}" alt="">
              <p class="mb-0 pb-0"><b>Height:</b> <span> ${this.height} <small> Decimetres</small></span></p>
              <p class="mb-0 pb-0"><b>Weight:</b><span></span> ${this.weight} <small> Hectograms</small></p>
              <p class="mb-0 pb-0"><b>Type(s):</b> <span> ${this.type0} | ${this.type1 ? this.type1 : ''}</span></p>
              </div>
    
    `

  }
}

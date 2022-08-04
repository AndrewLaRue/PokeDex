export class WildPokemon{

  constructor({ name, url}) {
    this.name = name
    this.url = url
}

  
  get Template() {
    return `
    <p class="selectable no-select text-center" onclick="app.wildPokemonsController.setActivePokemon('${this.url}')" data-bs-dismiss="offcanvas">${this.name}</p>
    `
  }
  
  
}



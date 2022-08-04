import { ActivePokemon } from "./ActivePokemon.js";


export class MyPokemon extends ActivePokemon {

  constructor(data) {
    super(data)
    this.id = data.id
  }

  get ListTemplate() {
    return `

            <div class="col-4 ball-img elevation-1">
                            <div>
                  <img class="img-fluid shake" src="${this.img}" alt="">
                </div>
                <span class="d-flex justify-content-between">
                  <h3 class="ms-3 text-light"><b>${this.name}</b></h3>
                  <i onclick="app.myPokemonsController.releasePokemon('${this.id}')" class="mdi mdi-earth text-success fs-3 selectable no-select me-3"></i>
                </span>

            </div>

    `
  }

}

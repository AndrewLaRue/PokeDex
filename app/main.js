// import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";
import { MyPokemonsController } from "./Controllers/MyPokemonsController.js";
import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";

class App {
  // valuesController = new ValuesController();
  

  wildPokemonsController = new WildPokemonsController()
  
  myPokemonsController = new MyPokemonsController()

  activePokemonController = new ActivePokemonController()

}

window["app"] = new App();

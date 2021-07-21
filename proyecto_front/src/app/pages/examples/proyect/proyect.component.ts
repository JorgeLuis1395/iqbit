import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";
import {GithubService} from "../../../servicio/github.service";

@Component({
  selector: "app-landingpage",
  templateUrl: "proyect.component.html"
})
export class ProyectComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  /*Variables del sistema*/
  response
  proyect

  constructor(
      private _service: GithubService
  ) {}

  ngOnInit() {

    this.sendRequestName()
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");


  }

  /* sendRequestName sirve  Consultar el primer servicio enviando dato del usuario, datos generales del usuario*/

  sendRequestName () {
    this._service.findUser('JorgeLuis1395').subscribe( async result => {
      this.response = result;
      await this.sendRequestProyectList(this.response.repos_url)
      console.log(result)
    })
  }

  /*fin  funcion*/

  /* sendRequestProyectList sirve  Consultar el la lista de proyectos del usuario*/

  sendRequestProyectList (url) {
    this._service.findProyect(url).subscribe( result => {
      this.proyect = result;
      console.log(result.length)
    })
  }

  /*fin  funcion*/




  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}

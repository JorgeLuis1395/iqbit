import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class GithubService {

    private urlModelo = 'https://api.github.com/users/';

    constructor(
        private readonly httpClientService: HttpClient,
    ) {
    }

    /*Función findUser sirve para realizar la petición get al api de usuario de github se en
    * recibe como parametro el nombre del usuario a consultar*/

    findUser(user: string): Observable<any> {
        const url = this.urlModelo + user;
        return this.httpClientService
            .get(url);
    }
/* fin*/

    /*Función findProyect sirve para realizar la petición get al api de usuario y consultar los proyectos de usuario,
    * se recibe como parametro la url del servicio anterior*/

    findProyect(userUrlProyect: string): Observable<any> {
        const url = userUrlProyect;
        return this.httpClientService
            .get(url);
    }
/*fin*/

}

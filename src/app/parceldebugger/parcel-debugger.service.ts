import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ParcelDebuggerService {
nodeServer = environment.nserver;
  constructor(private http: Http) { }

  getDebugData(value: string) {    
    return this.http.get(`${this.nodeServer}/utilities/debugger/${value}`)
                    .map((r: Response) => r.json())
                    .map(body => body[0][0][0])
  }

  getDeliveryViewData(delivery: string) {
    return this.http.get(`${this.nodeServer}/utilities/debugger/delivery/${delivery}`)
                    .map((r: Response) => r.json())
                    .map(body => body[0][0])
  }

}

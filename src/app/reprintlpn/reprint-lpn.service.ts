import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ReprintLpnService {

  constructor(private http: Http) { }

reprint(value): any {
  const opt = new RequestOptions()
  opt.body = value
  console.log(opt.body);
  return this.http.post(`${environment.nserver}/utilities/reprintLpn`, opt)
          .map((r: Response) => r.json());
          
}
 

}

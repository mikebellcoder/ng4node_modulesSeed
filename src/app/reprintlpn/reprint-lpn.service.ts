import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ReprintLpnService {

  constructor(private http: Http) { }

reprint(option: string, lpn?:any): any {
  const opt = new RequestOptions()
  opt.body = {
    by: option,
    lpn: lpn
  }
  console.log(opt.body);
  return this.http.post(`${environment.nserver}/utilities/reprintLpn`, opt)
          .map((r: Response) => r.json());
          
}
 

}

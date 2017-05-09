import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from "environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MarklpnpickedService {
  constructor(private http: Http) {}

markLpnPicked(lpn?:number): Observable<any> {
  return this.http.post(`${environment.nserver}/picking/markLpnPicked/${lpn}`, {})
          .map((r: Response) => r.json());
          
}

}

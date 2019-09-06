import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PackageModel} from '../packages/package.model';
import {DestinatarModel} from '../models/destinatar.model';


@Injectable()
export class PackageService {

  packagesURL: string = "https://localhost:44391/api/packages";

  constructor(private http: HttpClient) {
  }

  getAllPackages(filter: string): Observable<PackageModel[]> {
    return this.http.get<PackageModel[]>(this.packagesURL + '?filter='+filter);
  }

  savePackage(user: PackageModel): Observable<PackageModel>{
    return this.http.post<PackageModel>(this.packagesURL, user);
  }
  deletePackage(id: number) {
    return this.http.delete(this.packagesURL + "/"+ id);
  }
  updatePackage(packageUpdate: PackageModel) {
    const url = `${this.packagesURL }/${packageUpdate.id}`;

    return this.http.put<PackageModel>(url, packageUpdate);

  }

  getPackage(id: number):Observable<PackageModel> {
    return this.http.get<PackageModel>(this.packagesURL + "/"+ id);
  }


  getDestinatari(): Observable<DestinatarModel[]> {
    return this.http.get<DestinatarModel[]>(this.packagesURL + '/destinatari');
  }

  grupPackagesByExpeditor(expeditor: string):Observable<PackageModel[]>{
    return this.http.get<PackageModel[]>(this.packagesURL + '?grupExpeditor='+expeditor);
  }

}

import { Component, OnInit } from '@angular/core';
import {PackageModel} from '../../../shared/packages/package.model';
import {PackageService} from '../../../shared/services/package.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  packagesData: PackageModel[] = [];
  packagesGrupedByExpeditorData: PackageModel[] = [];
  filter = '';
  expeditor = '';

  constructor(private packageService: PackageService,
              private router: Router) {
  }

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getAllPackages(this.filter).subscribe(
      packageCmp => this.packagesData = packageCmp
    )
  }

  removePackage(id: number){
    this.packageService.deletePackage(id).toPromise().then(()=>{
      this.getPackages();
    },
      error1 => {
        alert("You do not have the permission to delete the package!")
      })
  }

  updatePackage(id: number) {
    this.router.navigate(['/package/update/'+id])
  }

  grupByExpeditor(expeditor: string) {
    this.packageService.grupPackagesByExpeditor(expeditor).subscribe(
      packageCmp => this.packagesGrupedByExpeditorData = packageCmp
    )
  }
}

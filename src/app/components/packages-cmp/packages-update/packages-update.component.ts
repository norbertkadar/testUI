import {Component, Input, OnInit} from '@angular/core';
import {PackageModel} from '../../../shared/packages/package.model';
import {PackageService} from '../../../shared/services/package.service';
import {ActivatedRoute, Params} from '@angular/router';
import {map} from 'rxjs/operators';
import {Location} from "@angular/common";

@Component({
  selector: 'app-packages-update',
  templateUrl: './packages-update.component.html',
  styleUrls: ['./packages-update.component.css']
})
export class PackagesUpdateComponent implements OnInit {

  @Input() myPackage: PackageModel = new PackageModel();

  constructor(private packageService: PackageService,
              private route: ActivatedRoute,
              private location: Location) {
  }


  ngOnInit() {
    this.getPackage();
  }

  getPackage(){
    this.route.params.pipe(map(
      (params: Params) => this.packageService.getPackage(+params['id'])
      .subscribe(pac => this.myPackage = pac)));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.packageService.updatePackage(this.myPackage).subscribe( ()=>{
        this.goBack();
      },
      error1 => {
        alert("You do not have the permission to update the package!")
      }
    );
  }

}

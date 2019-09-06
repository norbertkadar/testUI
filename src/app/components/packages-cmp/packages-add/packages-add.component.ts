import { Component, OnInit } from '@angular/core';
import {PackageService} from '../../../shared/services/package.service';
import {Router} from '@angular/router';
import {PackageModel} from '../../../shared/packages/package.model';
import {Location} from "@angular/common";

@Component({
  selector: 'app-packages-add',
  templateUrl: './packages-add.component.html',
  styleUrls: ['./packages-add.component.css']
})
export class PackagesAddComponent implements OnInit {

  myPackage = new PackageModel();

  constructor(private packageService: PackageService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  savePackage(){
    this.packageService.savePackage(this.myPackage).subscribe(
      res => {
        this.myPackage = res;
        this.location.back();
      },
      error1 => {
        alert("You do not have the permission to add the package!")
      }
    );
  }

  goBack(){
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import {PackageModel} from '../../../shared/packages/package.model';
import {PackageService} from '../../../shared/services/package.service';
import {Router} from '@angular/router';
import {DestinatarModel} from '../../../shared/models/destinatar.model';

@Component({
  selector: 'app-destinatari-list',
  templateUrl: './destinatari-list.component.html',
  styleUrls: ['./destinatari-list.component.css']
})
export class DestinatariListComponent implements OnInit {

  destinatariData: DestinatarModel[] = [];

  constructor(private packageService: PackageService,
              private router: Router) {
  }

  ngOnInit() {
    this.getDestinatari();
  }

  getDestinatari() {
    this.packageService.getDestinatari().subscribe(
      packageCmp => this.destinatariData = packageCmp
    )
  }
}

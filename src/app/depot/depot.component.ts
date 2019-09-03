import { Component, OnInit } from '@angular/core';
import { DepotService } from '../services/depot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
depotData = {};
  constructor(private depotService: DepotService,
              private router: Router) { }

  ngOnInit() {
  }
  depot() {
    this.depotService.depot(this.depotData)
    .subscribe(
         res => {
    console.log(res);
    this.router.navigate(['/depot']);
      },
      err => console.log(err)
    );

}

}

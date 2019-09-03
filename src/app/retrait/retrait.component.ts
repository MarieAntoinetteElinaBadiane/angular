import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetraitService } from '../services/retrait.service';


@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
  retraitData = {};

  constructor(private retraitService: RetraitService,
              private router: Router) { }

  ngOnInit() {
  }

  retrait() {
    this.retraitService.retrait(this.retraitData)
  .subscribe(
       res => {
  console.log(res);
  this.router.navigate(['/retrait']);
    },
    err => console.log(err)
  );

}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

envoiData = {};

  constructor(private transactionService: TransactionService,
              private router: Router) { }

  ngOnInit() {
  }

  envoi() {
  this.transactionService.envoi(this.envoiData)
  .subscribe(
       res => {
  console.log(res);
  this.router.navigate(['/transaction']);
    },
    err => console.log(err)
  );

}
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CustomerHttpService } from '../customer-http-service';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer implements OnInit {

  customerGroups: any[] = [];
  errMessage: string = '';

  constructor(
    private customerService: CustomerHttpService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errMessage = err.message;
      }
    });
  }
}
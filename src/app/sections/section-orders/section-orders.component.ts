import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: {id: 1, name: 'Main St Bakery', email: 'Bakery@Bakery.com', state:'US' }, total:336 , placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 1)},
    {id: 2, customer: {id: 2, name: 'XYZ', email: 'XYZ@XYZ.com', state:'US' }, total:458, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 1)},
    {id: 3, customer: {id: 3, name: 'ITgma', email: 'ITgma@ITgma.com', state:'MK' }, total:55, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 1)},
    {id: 4, customer: {id: 4, name: 'GOWI', email: 'GOWI@GOWI.com', state: 'SRB'}, total:125, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 1)},
    {id: 5, customer: {id: 5, name: 'EMC', email: 'EMC@EMC.com', state: 'UK'}, total:783, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 1)},
  ];

  ngOnInit() {
  }

}

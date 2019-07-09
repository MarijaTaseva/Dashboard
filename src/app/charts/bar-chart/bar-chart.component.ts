import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../../services/sales-data.service';
import * as moment from 'moment';

//const SAMPLE_BARCHART_DATA: any[] = [
//  {data: [1, 58, 84, 78, 5, 56, 45], label:'Q3 Sales'},
//  {data: [77, 58, 43, 55, 52, 12, 89], label:'Q4 Sales'},
//]

//const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _salesDataService: SalesDataService) { }

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any ={
    scaleShowVericalLines: false,
    responsive: true
  };

  ngOnInit() {
    this._salesDataService.getOrders(1, 100)
    .subscribe(res => {
      //console.log(res['page']['data']);
      const localChartData = this.getChartData(res);
      console.log(localChartData);
      this.barChartLabels = localChartData.map(x => x[0]).reverse();
      this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Sales'}];
    });
  }

  getChartData(res: Response) {
    this.orders = res['page']['data'];
    const data = this.orders.map(o => o.total);
    const labels = this.orders.map(o => moment(new Date(o.placed)).format('YY-MM-DD'));

    const formatedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    const p = [];

    console.log('formatedOrders: ', formatedOrders);

    const chartData = formatedOrders.reduce((r, e) => {
      const key = e[0];
      if(!r[key]){
        p[key] = e;
        r.push(p[key]);
      }
      else{
        p[key][1] += e[1];
      }
      return r;
    }, []);
    
    console.log('chartData: ', chartData);
    return chartData;

    //const myData = [3, 4, 5].reduce((sum, value) => { 
    //  console.log('sum: ', sum, 'value: ', value);
    //  return  sum + value ;
    //}, 0);
    //
    //console.log('myData: ', myData);
    //console.log(labels);
  }

}

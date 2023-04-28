import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dht11',
  templateUrl: './dht11.component.html',
  styleUrls: ['./dht11.component.css']
})
export class Dht11Component {
  chart = new Chart ({
    chart : {
      type : 'line' ,
      height: 225
    } ,
    title : {
      text : 'Daily Sensors Data '
    },
    xAxis: {
      categories: ['Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      title : {
        text : 'days'
      }

    },
    yAxis : {
      title: {
        text: 'DHT11'
    }
    },
    plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  series: [{
    name: 'Temperature',
    type :'line',
    color: '#ff6666',

    data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
        22.0, 17.8]
}, {
    name: 'Humidity',
    type : 'line' , 
    data: [17, 20, 22., 35, 17, 30, 25, 16.5, 12.0, 26.5,
        30, 25]
}], 
credits : {
  enabled : false
}
  } )

}

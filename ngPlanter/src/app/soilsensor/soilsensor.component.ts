import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-soilsensor',
  templateUrl: './soilsensor.component.html',
  styleUrls: ['./soilsensor.component.css']
})
export class SoilsensorComponent {
  chart =  new Chart ({
    chart : {
      type : 'line' ,
      height : 225
    } ,
    title : {
      text : 'Weekly SoilMoisture Data '
    },
    xAxis: {
      categories: ['1', '2','3', '4', '5', '6', '7'],
      title : {
        text : 'Weeks'
      }
  
    },
    yAxis : {
      title: {
        text: 'SoilMoisture'
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
    name: 'Moisture',
    type :'line',
    color: '#540000',
    data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
        22.0, 17.8]
  }],
  credits : {
    enabled : false
  }
  } )
  
}

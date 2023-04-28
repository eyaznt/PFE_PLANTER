import { Chart } from 'angular-highcharts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lightsensor',
  templateUrl: './lightsensor.component.html',
  styleUrls: ['./lightsensor.component.css']
})
export class LightsensorComponent {
  areachart= new Chart (
    {
      chart: {
        type: 'area' ,
        height : 225
      },
      title: {
        text: 'Daily Light Intensity'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        name: 'Light Intensity',
        type : 'area' , 
        data: [5, 15, 17, 20, 23, 27, 18, 14, 12, 8, 5],
        color: '#ffff66'
      }], credits : {
        enabled : false
      }
    }
  )
}

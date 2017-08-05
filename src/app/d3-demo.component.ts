import {Component} from '@angular/core';
import { BarGraph             } from './bar-graph';


@Component({
  selector:'d3-demo',
  templateUrl:'templates/d3-demo.component.html',
  //directives: [BarGraph],
})
export class D3DemoComponent {
    graphData: Array<Number>;  // bar graph data (bound to from template)

    /**
     * Create a bar chart demo component
     *
     * @return nothing This is the root component of the demo.
     */
     constructor()
     {
       // assign the chart data and away we go ...
       this.graphData = [10, 20, 30, 40, 60];
     }
}

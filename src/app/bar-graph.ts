import { Directive, ElementRef, Attribute, SimpleChange,Input } from '@angular/core';
import * as d3 from 'd3';
import {Selection} from  '@types/d3-selection';



@Directive({
  selector: 'bar-graph',
  //properties: ['data']
})
export class BarGraph {
  @Input() data: Array<number>;  // raw chart data
  private divs: any;            // DIV collection

  /**
   * Construct a new BarGraph
   *
   * @param elementRef: ElementRef (Injected) Reference to the DOM element associated with this Directive (see selector)
   *
   * @param width: string Width attribute from the containing template
   *
   * @param height: string Height attribute from the containing template
   *
   * @return Nothing
   */
  constructor(elementRef: ElementRef, @Attribute('width') width: string, @Attribute('height') height: string) {
    let el: any = elementRef.nativeElement;  // reference to <bar-graph> element from the main template
    let graph: any = d3.select(el);             // D3 chart container

    this.divs=graph
      .append('div')
      .attr('class','chart')
      .style('width',width+'px')
      .style('height',height+'px')
      .selectAll('div');
  }

  // Render the D3 Bar Chart
  private __render(newValue: any): void {
    if (!newValue)
      return;

    // join the data and chain styles and bar text ... all the usual suspects
    this.divs.data(newValue).enter().append('div')
      .transition().ease(d3.easeElasticInOut)
      .style('width', (d: any) => d + '%')
      .text((d: any) => d + '%');
  }

  // update render on change
  private ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    this.__render(this.data);
  }
}

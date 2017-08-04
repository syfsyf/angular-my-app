import {Component, Input,Output,EventEmitter } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['app.component.css'],
})
export class HeroListComponent {

  @Input() selectedHero:Hero;
  @Input() heroes: Hero[];
  @Output() onSelect=new EventEmitter<Hero>();

  
}

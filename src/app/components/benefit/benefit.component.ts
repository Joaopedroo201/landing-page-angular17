import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'benefit',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.scss'
})
export class BenefitComponent {

  @Input("img-path") imgPath: string = '';
  @Input("card-title") CardTitle: string = '';
  @Input("card-description") CardDescription = '';

}

import { Component } from '@angular/core';
import { TabView } from '../../../shared/tab-view/tab-view';
import { RouterOutlet } from '@angular/router';
import { Slider } from '../../../shared/slider/slider';

@Component({
  selector: 'app-auth-layout-container',
  imports: [Slider,RouterOutlet,TabView,RouterOutlet],
  templateUrl: './auth-layout-container.html',
  styleUrl: './auth-layout-container.scss',
})
export class AuthLayoutContainer {

}

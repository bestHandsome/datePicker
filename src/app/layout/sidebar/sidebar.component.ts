import {Component, OnInit, Injector, ViewChild} from '@angular/core'
import {Router} from '@angular/router';
import { menu } from '../../routes/menu';

const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare const $: any;
declare var require: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  router: Router;
  menuItems: Array<any>;

  @ViewChild('fsbutton') fsbutton;

  constructor(private injector: Injector) {
    this.menuItems = menu();
  }

  ngOnInit() {
    if (browser.msie) { // Not supported under IE
      this.fsbutton.nativeElement.style.display = 'none';
    }
    this.router = this.injector.get(Router);
    this.menuItems.splice(1, 1);
  }

  FullScreen(event) {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
    // Switch icon indicator
    const el = $(this.fsbutton.nativeElement);
    if (screenfull.isFullscreen) {
      el.children('em').removeClass('fa-expand').addClass('fa-compress');
    }
    else {
      el.children('em').removeClass('fa-compress').addClass('fa-expand');
    }
  }
}

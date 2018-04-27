import {AfterViewInit, Component, OnInit} from '@angular/core';
import { UiToolbarService} from 'app/smn-ui/smn-ui.module';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private toolbarService: UiToolbarService,
              private titleService: Title) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.toolbarService.set('Home');
    this.titleService.setTitle('Home');
  }

}

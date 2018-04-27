import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from 'app/smn-ui/smn-ui.module';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private toolbarService: UiToolbarService,
              private titleService: Title) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(960);
    this.titleService.setTitle('Sobre');
    this.toolbarService.set('Sobre');
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

}

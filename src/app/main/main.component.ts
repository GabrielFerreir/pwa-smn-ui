import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UiToolbarService} from '../smn-ui/smn-ui.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  title: String;
  menuOpen: boolean;
  readyToGo: boolean;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService,
              private changeDetectorRef: ChangeDetectorRef) {
    toolbarService.change.subscribe(title => {
      this.title = title;
    });
  }

  ngOnInit() {
    this.menuOpen = false;
  }

  ngAfterViewInit() {
    this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    this.readyToGo = true;
    this.changeDetectorRef.detectChanges();
  }
}

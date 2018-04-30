import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {UiToolbarService} from '../smn-ui/smn-ui.module';
import {trigger, state, style, animate, transition, query} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            opacity: 0,
            'z-index': 8
          }),
          {optional: true}),

        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              opacity: 0,
              'z-index': 8
            })
          ),
          {optional: true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              'z-index': 8
            })
          ),
          {optional: true}),
      ])
    ])
  ]
})
export class MainComponent implements OnInit, AfterViewInit {
  title: String;
  menuOpen: boolean;
  readyToGo: boolean;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService,
              private changeDetectorRef: ChangeDetectorRef,
              private meta: Meta) {
    toolbarService.change.subscribe(title => {
      this.title = title;
    });

    meta.addTags([
      {name: 'author', content: 'Gabriel Ferreira'},
      {name: 'description', content: 'Esse é um pequeno projeto em PWA utilizando Angular 5 e SMN-UI inserido diretamente no projeto.'}
    ]);
  }

  ngOnInit() {
    this.menuOpen = false;
  }

  ngAfterViewInit() {
    this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    this.readyToGo = true;
    this.changeDetectorRef.detectChanges();
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}

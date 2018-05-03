import {Component, OnInit, ElementRef} from '@angular/core';
import {Location} from '@angular/common';

import {UiElement} from 'app/smn-ui/smn-ui.module';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  searchText: string;
  searchOpen: boolean;

  constructor(public _location: Location,
              private element: ElementRef) {
  }

  ngOnInit() {
  }

  toggleSearch() {
    const inputSearch = this.element.nativeElement.querySelector('input[name="searchText"]');

    if (this.searchOpen) {
      this.searchOpen = false;
      UiElement.closest(inputSearch, 'form').style.right = '';
    } else {
      this.searchOpen = true;
      UiElement.closest(inputSearch, 'form').style.right = UiElement.closest(inputSearch, '.align-right').clientWidth + 'px';

      setTimeout(() => {
        inputSearch.focus();
      }, 280);
    }
  }

  share() {
    const nav = <any>navigator;
    if (nav.share) {
      nav.share({
        title: 'Web Fundamentals',
        text: 'Check out Web Fundamentals — it rocks!',
        url: 'https://developers.google.com/web',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Navegador não tem suporte');
    }
  }
}

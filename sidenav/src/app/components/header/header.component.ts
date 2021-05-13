import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SidenavService } from 'src/app/services/sidenav.service';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderEvent } from './header-event';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  collapsedNav: boolean | undefined;

  private _mobileQueryListener: () => void;

  constructor(
    private dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sideNavService: SidenavService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openDialog() {
    this.dialog.open(ForgetPasswordComponent, { disableClose: true });
  }
  // @Output() nav: EventEmitter<boolean>();
  clickMenu() {
    // this.sideNavService.sidenav1.toggle();
    // console.log(this.sideNavService.number);
    // this.open.emit(true);
    this.sideNavService.toggle();
  }

  // toggleTitle() {
  //   $('.title').slideToggle(); //
  // }
  // this.sum = Demo.SumValue();
}

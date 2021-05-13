import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') public sidenav?: MatSidenav;

  mobileQuery: MediaQueryList;

  collapsedNav: boolean | undefined;

  private _mobileQueryListener: () => void;
  constructor(
    private dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sideNavService: SidenavService
  ) {
    // this.sideNavService.sidenav1 = this.sidenav;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav?.toggle();
    });
    // let num = true;
    // this.sideNavService.number = num;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

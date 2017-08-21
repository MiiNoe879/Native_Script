import { Component } from "@angular/core";
import { BaseComponent } from "./base.component";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { DataService } from "../shared";

@Component({
    selector: "webpage",
    moduleId: module.id,
    templateUrl: "./webpage.component.html"
})
export class WebPageComponent extends BaseComponent {
  public title = "TEST";
  public link = 'https://www.google.com';

  constructor(
    private router: RouterExtensions,
    private pageRoute: PageRoute,
    dataService: DataService
  ) {
    super(dataService);
    this.pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.params)
    .forEach(params => {
      this.title = params.title;
      this.link = params.link;
    });
  }

  onNavBtnTap() {
    this.router.backToPreviousPage();
  }

  onLoadStarted(args) {
    BaseComponent.showWaiter();
  }
  
  onLoadFinished(args) {
    BaseComponent.hideWaiter();
  }
}
import { Component } from "@angular/core";
import { RestService, DataService } from "../shared";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BaseComponent } from "./base.component";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "feed",
    moduleId: module.id,
    templateUrl: "./feed.component.html"
})
export class FeedComponent extends BaseComponent {
  public feed:any = {};
  public feedDetails:Array<any> = [];

  constructor(
    private restService: RestService,
    private router: RouterExtensions,
    private pageRoute: PageRoute,
    dataService: DataService,
  ) {
    super(dataService);
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach(params => this.feed = JSON.parse(params.feed));
  }

  ngOnInit() {
    super.ngOnInit();

    BaseComponent.showWaiter();
    this.restService.loadFeeds(this.feed.url).then(
      resp => {
        this.feedDetails = resp["items"];
        BaseComponent.hideWaiter();
      },
      err => BaseComponent.hideWaiter()
    );
  }

  onNavBtnTap() {
    this.router.back();
  }
}
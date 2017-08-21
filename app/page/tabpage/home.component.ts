import { Component, ChangeDetectionStrategy } from "@angular/core";
import {
  RestService,
  DataService
} from "../../shared";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "../base.component";

@Component({
    selector: "tab-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends BaseComponent {
  constructor(
    private restService: RestService,
    private router: RouterExtensions,
    dataService: DataService
  ) { super(dataService); }

  onItemTap(args) {
    let feeds = this.appData["feeds"];
    if (args.index == feeds.length - 1) {
      this.router.navigate(["/nexgolf"]);
      return;
    }
    let feed = feeds[args.index];
    this.router.navigate(["/feed", { feed: JSON.stringify(feed) }]);
  }
}
import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular";
import {
  BottomBar,
  BottomBarItem
} from "nativescript-bottombar";
import { BaseComponent } from "./base.component";
import {
  RestService,
  DataService
} from "../shared";

registerElement('BottomBar', () => BottomBar);

@Component({
  selector: "tab",
  moduleId: module.id,
  templateUrl: "./tab.component.html",
})
export class TabComponent extends BaseComponent {
  tabItems: Array<BottomBarItem> = [
    new BottomBarItem(0, BaseComponent.L('Home'), "ic_home", "white"),
    new BottomBarItem(1, BaseComponent.L('Tee Times'), "ic_teetimes", "white"),
    new BottomBarItem(2, BaseComponent.L('Latest News'), "ic_lastnews", "white"),
    new BottomBarItem(3, BaseComponent.L('Partners'), "ic_partners", "white"),
    new BottomBarItem(4, BaseComponent.L('Contact'), "ic_contact", "white"),
  ];

  
  ////////////////////////////  
  constructor(
    private router: RouterExtensions,
    private restService: RestService,
    dataService: DataService
  ) { super(dataService); }

  ngOnInit() {
    super.ngOnInit();

    BaseComponent.showWaiter();
    this.restService.loadAppData().then(
      resp => {
        BaseComponent.hideWaiter();
        let appData = resp.content.toJSON();
        appData.feeds.push({
          logo: "http://is4.mzstatic.com/image/thumb/Purple5/v4/80/ee/b4/80eeb417-9d17-4413-17b7-eca19906f250/source/512x512bb.jpg",
          name: "NexGolf"
        });
        this.appData = appData;
        this.onTabSelected({newIndex: 0});
      },
      err => BaseComponent.hideWaiter()
    );
  }

  onTabSelected(args) {
    var path:string;
    switch (args.newIndex) {
      case 0:
        path = "tab/home";
        break;
      case 1:
        path = "tab/teetimes";
        break;
      case 2:
        path = "tab/lastnews"; 
        break;
      case 3:
        path = "tab/partners";
        break;
      case 4:
        path = "tab/contact";
        break;
      default:
        return;
    }
    this.router.navigate([path], { clearHistory: true });
  }
}


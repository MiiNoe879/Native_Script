import { Component } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "./base.component";
import { DataService } from "../shared";
import { Router } from "@angular/router";

@Component({
    selector: "nexgolf",
    moduleId: module.id,
    templateUrl: "./nexgolf.component.html"
})
export class NexGolfComponent extends BaseComponent {
  items:Array<any> = [
    {text: BaseComponent.L('Tee Times'), image: "~/resource/tee-time.png", link: "http://tarina.nexgolf.fi/tarina/member/index.html"},
    {text: BaseComponent.L('Competitions'), image: "~/resource/competitions.png", link: "http://tarina.nexgolf.fi/tarina/member/index.html"},
    {text: BaseComponent.L('Results'), image: "~/resource/results.png", link: "http://tarina.nexgolf.fi/tarina/livescoring.nxg"},
  ];

  constructor(
    private router: RouterExtensions,
    dataService: DataService
  ) {
    super(dataService);
  }

  onNavBtnTap() {
    this.router.back();
  }
}
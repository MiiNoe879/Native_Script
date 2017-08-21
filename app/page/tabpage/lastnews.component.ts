import { Component } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "../base.component";
import { DataService } from "../../shared";

@Component({
    selector: "tab-lastnews",
    moduleId: module.id,
    templateUrl: "./lastnews.component.html"
})
export class LastNewsComponent extends BaseComponent {
  constructor( dataService: DataService) {
    super(dataService);
  }
}
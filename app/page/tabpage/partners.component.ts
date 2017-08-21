import { Component } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "../base.component";
import { DataService } from "../../shared";

@Component({
    selector: "tab-partners",
    moduleId: module.id,
    templateUrl: "./partners.component.html"
})
export class PartnersComponent extends BaseComponent {
  constructor( dataService: DataService) {
    super(dataService);
  }
}
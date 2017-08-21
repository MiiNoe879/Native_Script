import { Component } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "../base.component";
import { DataService } from "../../shared";

@Component({
    selector: "tab-contact",
    moduleId: module.id,
    templateUrl: "./contact.component.html"
})
export class ContactComponent extends BaseComponent {
  constructor( dataService: DataService) {
    super(dataService);
  }
}
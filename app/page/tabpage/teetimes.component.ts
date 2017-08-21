import { Component } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { RouterExtensions } from "nativescript-angular/router";
import { BaseComponent } from "../base.component";
import { DataService } from "../../shared";

@Component({
  selector: "tab-teetimes",
  moduleId: module.id,
  templateUrl: "./teetimes.component.html"
})
export class TeeTimesComponent extends BaseComponent {
  constructor( dataService: DataService) {
    super(dataService);
  }
}
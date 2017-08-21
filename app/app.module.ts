import {
  NgModule,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { GridViewModule } from "nativescript-grid-view/angular";
///////////////////////////////
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

/////////////////////////////
import {
  RestService,
  DataService,
  SettingService
} from "./shared";

import {
  TabComponent,
  HomeComponent,
  TeeTimesComponent,
  LastNewsComponent,
  PartnersComponent,
  ContactComponent,

  FeedComponent,
  WebPageComponent,
  NexGolfComponent
} from "./page";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptLocalizeModule,
    AppRoutingModule,
    GridViewModule
  ],
  declarations: [
    AppComponent,

    TabComponent,
    HomeComponent,
    TeeTimesComponent,
    LastNewsComponent,
    PartnersComponent,
    ContactComponent,

    FeedComponent,
    WebPageComponent,
    NexGolfComponent,
  ],
  providers: [
    RestService,
    DataService,
    SettingService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
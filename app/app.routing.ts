import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

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

const routes: Routes = [
  { path: "", redirectTo: "/tab", pathMatch: "full" },
  { 
    path: "tab",
    component: TabComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "teetimes", component: TeeTimesComponent },
      { path: "lastnews", component: LastNewsComponent },
      { path: "partners", component: PartnersComponent },
      { path: "contact", component: ContactComponent },
    ]
  },
  { path: "feed", component: FeedComponent },
  { path: "webpage", component: WebPageComponent },
  { path: "nexgolf", component: NexGolfComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
import {
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { localize } from "nativescript-localize";
import * as Toast from "nativescript-toast";
import { DataService } from "../shared";

export abstract class BaseComponent implements OnInit, AfterViewInit {
  protected dataService: DataService;
  constructor(dataService) {
    this.dataService = dataService;
  }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
  }

  private static waiter: LoadingIndicator = null;
  public static showWaiter() {
    if (this.waiter)
      return false;

    BaseComponent.waiter = new LoadingIndicator();
    BaseComponent.waiter.show();
    return true;
  }

  public static hideWaiter() {
    if (!this.waiter)
      return false;
    
    this.waiter.hide();
    this.waiter = null;
    return true;
  }

  public static showToast(msg: string, isLong = false) {
    Toast.makeText(msg, isLong ? "short" : "long").show();
  }

  public static L(key: string, ...args: string[]) {
    return localize(key, ...args);
  }

  ////////////////////////////
  get appData() {
    return this.dataService.appData;
  }
  set appData(value) {
    this.dataService.appData = value;
  }
}
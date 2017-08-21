import { Injectable } from "@angular/core";
import { getAppIdSync } from "nativescript-appversion";
import { Couchbase } from "nativescript-couchbase";
import { SettingService } from "./setting.service";

@Injectable()
export class DataService {
  private db: Couchbase;
  constructor(public setting: SettingService) {
    this.db = new Couchbase("clubdb");
  }

  get appData() {
    var docID = this.setting.appDataDocID;
    if (!docID) return null;
    return this.db.getDocument(docID);
  }

  set appData(val) {
    var docID = this.setting.appDataDocID;
    if (docID) {
      this.db.updateDocument(docID, val);
      return;
    }
    this.setting.appDataDocID = this.db.createDocument(val);
  }
}

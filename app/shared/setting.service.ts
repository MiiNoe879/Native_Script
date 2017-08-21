import * as appSetting from "application-settings";
import { Injectable } from "@angular/core";

@Injectable()
export class SettingService {
  get appDataDocID(): string {
    return appSetting.getString("appDataDocID");
  }
  set appDataDocID(val:string) {
    appSetting.setString("appDataDocID", val);
  }
}

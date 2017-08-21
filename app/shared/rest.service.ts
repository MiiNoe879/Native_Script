import * as http from "http";
import { device, isAndroid } from "platform";
import { getAppIdSync } from "nativescript-appversion";
import { Injectable } from "@angular/core";

let serverAddr:string = "http://192.168.1.101/";
@Injectable()
export class RestService {
  public loadFeeds(url: string) {
    return http.getJSON(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
  }

  public loadAppData() {
    let bundle_id = getAppIdSync();
    return http.request({
      url: `${serverAddr}/api/get`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ bundle_id })
    });
  }
  
  public registerDevice(token: string) {
    let bundle_id = getAppIdSync();
    let device_id = device.uuid;
    let device_token = token;
  
    return http.request({
      url: `${serverAddr}/api/store`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        bundle_id, device_id, device_token
      })
    });
  }

  public settingDevice(setting) {
    let bundle_id = getAppIdSync();
    let device_id = device.uuid;
  
    return http.request({
      url: `${serverAddr}/api/store`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        bundle_id, device_id, setting
      })
    });
  }
}

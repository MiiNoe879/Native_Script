// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { isIOS } from "platform";
import * as dialogs from "ui/dialogs";
import * as fontModule from "ui/styling/font";
import * as firebase from "nativescript-plugin-firebase";

import { RestService } from "./shared";
import { AppModule } from "./app.module";

////////////////////////////////////////////////////////////////
// For Firebase
firebase.init({
  iOSEmulatorFlush: true,
  onPushTokenReceivedCallback(token) {
    console.log(`CLUB App -> Get FCM token ${token}`);
    // this.restService.registerDevice(token).then(
    //   resp => console.log('FCM token registering success'),
    //   error => console.log('FCM token registering failed')
    // );
  },

  onMessageReceivedCallback(message) {
    if (message.foreground) {
      dialogs.alert({
        title: message.title,
        message: message.body,
        okButtonText: "OK"
      });
    }
  }
});

// For Custom Font
if (isIOS) {
  fontModule.ios.registerFont("CalvertMTStd-Light.otf");
}

////////////////////////////////////////////////////////////////
platformNativeScriptDynamic().bootstrapModule(AppModule);

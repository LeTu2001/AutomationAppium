
require("dotenv").config();

var appiumPort: number = 4723;
switch (process.env.PLATFORM) {
  case "Android":
    switch (process.env.PLATFORM_VERSION) {
      case "11":
        appiumPort = 4011;
        break;
      case "12":
        appiumPort = 4012;
        break;
      case "13":
        if (process.env.DEVICE_NAME == "R5CT72LT1FA") {
          appiumPort = 4014;
        } else {
          appiumPort = 4013;
        }
        break;
      default:
        break;
    }
    break;
  case "iOS":
    switch (process.env.PLATFORM_VERSION) {
      case "14.4":
        appiumPort = 4114;
        break;
      case "15.6.1":
        appiumPort = 4115;
        break;
      case "16.0.3":
        appiumPort = 4116;
        break;
      case "17.1":
        appiumPort = 4117;
        break;
      default:
        break;
    }
    break;
  default:
    break;
}

var appiumDesiredCapabilities = {
  "appium:deviceName": process.env.DEVICE_NAME,
  "appium:platformVersion": process.env.PLATFORM_VERSION,
  "appium:platformName": process.env.PLATFORM,
  "appium:udid": process.env.UDID,
  "appium:newCommandTimeout": 350000,
  // "appium:appWaitDuration": 350000,
  // "appium:waitForIdleTimeout": 350000,
  // "appium:wdaLocalPort": appiumPort + 200,
  // "appium:wdaConnectionTimeout": 350000,
  // "appium:wdaLaunchTimeout": 30000,
  // "appium:usePrebuiltWDA": true,
  // "appium:clearSystemFiles": true,
};

if (process.env.PLATFORM == "Android") {
  appiumDesiredCapabilities["appium:autoGrantPermissions"] = true;
  appiumDesiredCapabilities["appium:automationName"] = "UiAutomator2";
  appiumDesiredCapabilities["appium:appPackage"] = process.env.APP_PACKAGE;
  appiumDesiredCapabilities["appium:appActivity"] = process.env.APP_ACTIVITY;
} else {
  appiumDesiredCapabilities["appium:autoAcceptAlerts"] = true;
  appiumDesiredCapabilities["appium:automationName"] = "XCUITest";
  appiumDesiredCapabilities["appium:bundleId"] = process.env.BUNDLE_ID;
}

export const appiumRootConfig = {
  port: appiumPort,
  host: process.env.APPIUM_HOST ? process.env.APPIUM_HOST : "127.0.0.1",
  platform: process.env.PLATFORM,
  desiredCapabilities: appiumDesiredCapabilities,
};

export var appiumOverrideConfig: object;
if (process.env.PLATFORM == "Android") {
  appiumOverrideConfig = {
    /* Custom config for device android emulator 13 */
    port: appiumPort,
    platform: process.env.PLATFORM,
    desiredCapabilities: {
      "appium:deviceName": process.env.SECOND_DEVICE_ANDROID_UDID,
      "appium:platformVersion": process.env.SECOND_DEVICE_ANDROID_VERSION,
      "appium:udid": process.env.SECOND_DEVICE_ANDROID_UDID,
      "appium:autoGrantPermissions": true,
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": process.env.APP_PACKAGE,
      "appium:appActivity": process.env.APP_ACTIVITY,
      "appium:newCommandTimeout": 350000,
      // "appium:appWaitDuration": 350000,
      // "appium:waitForIdleTimeout": 350000,
      // "appium:wdaLocalPort": appiumPort + 200,
      // "appium:clearSystemFiles": true,
    },
  };
} else {
  if (process.env.UDID == process.env.SECOND_DEVICE_16_IOS_UDID) {
    appiumOverrideConfig = {
      /* Custom config for device ios if current device is device 17 */
      port: appiumPort,
      host: process.env.APPIUM_HOST ? process.env.APPIUM_HOST : "127.0.0.1",
      platform: process.env.PLATFORM,
      desiredCapabilities: {
        "appium:deviceName": process.env.SECOND_DEVICE_35_IOS_UDID,
        "appium:platformVersion": process.env.SECOND_DEVICE_35_IOS_VERSION,
        "appium:udid": process.env.SECOND_DEVICE_35_IOS_UDID,
        "appium:autoAcceptAlerts": true,
        "appium:automationName": "XCUITest",
        "appium:bundleId": process.env.BUNDLE_ID,
        "appium:newCommandTimeout": 350000,
        // "appium:appWaitDuration": 350000,
        // "appium:waitForIdleTimeout": 350000,
        // "appium:wdaLocalPort": appiumPort + 200,
        // "appium:clearSystemFiles": true,
      },
    };
  } else {
    appiumOverrideConfig = {
      /* Custom config for others device ios */
      port: appiumPort,
      host: process.env.APPIUM_HOST ? process.env.APPIUM_HOST : "127.0.0.1",
      platform: process.env.PLATFORM,
      desiredCapabilities: {
        "appium:deviceName": process.env.SECOND_DEVICE_16_IOS_UDID,
        "appium:platformVersion": process.env.SECOND_DEVICE_16_IOS_VERSION,
        "appium:udid": process.env.SECOND_DEVICE_16_IOS_UDID,
        "appium:autoAcceptAlerts": true,
        "appium:automationName": "XCUITest",
        "appium:bundleId": process.env.BUNDLE_ID,
        "appium:newCommandTimeout": 350000,
        // "appium:appWaitDuration": 350000,
        // "appium:waitForIdleTimeout": 350000,
        // "appium:wdaLocalPort": appiumPort + 200,
        // "appium:clearSystemFiles": true,
      },
    };
  }
}

var appiumAgencyDesiredCapabilities: object;
switch (process.env.PLATFORM) {
  case "Android":
    appiumAgencyDesiredCapabilities = {
      "appium:deviceName": process.env.UDID,
      "appium:platformVersion": process.env.PLATFORM_VERSION,
      "appium:udid": process.env.UDID,
      "appium:autoGrantPermissions": true,
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": process.env.APP_AGENCY_APP_PACKAGE,
      "appium:appActivity": process.env.APP_AGENCY_APP_ACTIVITY,
      "appium:newCommandTimeout": 350000,
      // "appium:appWaitDuration": 350000,
      // "appium:waitForIdleTimeout": 350000,
      // "appium:wdaLocalPort": appiumPort + 200,
      // "appium:clearSystemFiles": true,
    };
    break;

  case "iOS":
    appiumAgencyDesiredCapabilities = {
      "appium:deviceName": process.env.UDID,
      "appium:platformVersion": process.env.PLATFORM_VERSION,
      "appium:udid": process.env.UDID,
      "appium:autoAcceptAlerts": true,
      "appium:automationName": "XCUITest",
      "appium:bundleId": process.env.APP_AGENCY_BUNDLE_ID,
      "appium:newCommandTimeout": 350000,
      // "appium:appWaitDuration": 350000,
      // "appium:waitForIdleTimeout": 350000,
      // "appium:wdaLocalPort": appiumPort + 200,
      // "appium:clearSystemFiles": true,
    };
    break;

  default:
    break;
}

appiumAgencyConfig = {
  port: appiumPort,
  host: process.env.APPIUM_HOST ? process.env.APPIUM_HOST : "127.0.0.1",
  platform: process.env.PLATFORM,
  desiredCapabilities: appiumAgencyDesiredCapabilities,
};

export var appiumAgencyConfig: object;

## Appium
Appium là một khung phần mềm mã nguồn mở để tự động hóa kiểm thử các ứng dụng gốc, ứng dụng lai, và ứng dụng web trên di động, triển khai theo giao thức WebDriver. Nó cho phép bạn chạy các bài kiểm thử Selenium trên thiết bị di động và cũng có thể kiểm thử các ứng dụng gốc, lai, và ứng dụng web trên nền tảng di động.

MacOS: 
```
brew install appium
```
Windows:
```
npm install -g appium
```
Xem thêm: [Appium_Android](./ReadMe/README_ANROID.md), [Appium_Android](./ReadMe/README_IOS.md)

## Appium doctor
Appium-doctor là một công cụ dòng lệnh hữu ích trong hệ sinh thái Appium, được thiết kế để giúp người dùng kiểm tra và chuẩn bị môi trường cho việc chạy Appium.

```
npm install -g appium-doctor
```
--------------------
## Appium Inspector 
Appium Inspector là một ứng dụng đồ họa (GUI) được sử dụng để kiểm tra và phân tích cấu trúc giao diện người dùng của ứng dụng di động (iOS và Android) trong quá trình phát triển và kiểm thử tự động.

## Cài đặt và sử dụng
Chúng ta có thể truy cập vào linkGithub để có thể tải các bản mới nhất của AppiumInspector:

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/appium/appium-inspector)

MacOS
```
brew install --cask appium-inspector
```
Windows
```
npm install -g appium-inspector
```
Sau khi đã cài đặt xong chúng ta sẽ có AppiumInspector:

![](./step_definitions/assets/appiumInspector.png)

Cấu hình kết nối Appium Server:
- Remote Host: Nhập địa chỉ IP của Appium Server (mặc định là 127.0.0.1 cho localhost).
- Remote Port: Nhập cổng Appium Server đang lắng nghe (mặc định là 4723).
- Remote Path: Thường để là "/".
- SSL: Đánh dấu nếu sử dụng kết nối bảo mật.
Advanced Settings:
- Nhấp vào mũi tên để mở rộng cài đặt nâng cao nếu cần.
Capability Builder:
- Name: Nhập tên của capability (ví dụ: platformName, deviceName).
- Chọn kiểu dữ liệu từ dropdown (text, boolean, number).
Value: Nhập giá trị tương ứng.
- Nhấn "+" để thêm capability.
- Đánh dấu "Automatically add necessary Appium vendor prefixes on start" để tự động thêm tiền tố cần thiết.
JSON Representation:
- Hiển thị các capability đã thêm dưới dạng JSON.
- Có thể chỉnh sửa trực tiếp trong khung này.
Attach to Session:
- Sử dụng tab này nếu muốn kết nối với một phiên Appium đang chạy.
Saved Capability Sets:
- Lưu và tải lại các bộ capability đã cấu hình trước đó.
Capabilities Documentation:
- Liên kết đến tài liệu về các capability có sẵn.
Các nút chức năng:
Save As: Lưu cấu hình hiện tại.
Start Session: Bắt đầu một phiên Appium mới với các capability đã cấu hình.

# dotenv
require("dotenv").config() là một dòng mã trong Node.js dùng để tải các biến môi trường từ một tệp *.env* vào *process.env.* 

Thư viện dotenv giúp bạn quản lý các biến môi trường một cách dễ dàng và bảo mật hơn, đặc biệt là khi bạn không muốn lưu trữ các thông tin nhạy cảm như mật khẩu, khóa API, hoặc các cấu hình khác trực tiếp trong mã nguồn

Cài đặt thư viện dotenv:
1. Bạn cần cài đặt thư viện dotenv bằng npm hoặc yarn:

   ``` 
   npm install dotenv
   ```
  
   hoặc

   ``` 
   yarn add dotenv 
   ```
2. Tạo tệp .env:
Tạo một tệp có tên .env trong thư mục gốc của dự án của bạn. Trong tệp này, bạn có thể định nghĩa các biến môi trường của mình. Ví dụ:

```
  PLATFORM= Android
   PLATFORM_VERSION= (your_version)
   DEVICE_NAME= (your_device_name)
   UDID= (your_device_udid)
   APPIUM_HOST=127.0.0.1
   APP_PACKAGE=com.example
   APP_ACTIVITY=com.example.MainActivity
```
## AppiumMultiConfig.ts

Tệp AppiumMultiConfig.ts được sử dụng để cấu hình Appium cho các bài kiểm tra tự động hóa. Tệp này sử dụng các biến môi trường để thiết lập các thông số cấu hình khác nhau dựa trên nền tảng và phiên bản nền tảng của thiết bị di động.
``` typescript
require("dotenv").config();

var appiumPort: number = 4723;

```
- require("dotenv").config();: Tải các biến môi trường từ tệp .env.
- var appiumPort: number = 4723;: Đặt giá trị mặc định cho cổng Appium là 4723.

Đây là một ví dụ về AppiumMultiConfig

``` typescript 

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
        if (process.env.DEVICE_NAME == "{your devices}") {
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
      },
    };
  }
}

var appium(your App)Capabilities: object;
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
```
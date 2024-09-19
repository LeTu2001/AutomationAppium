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

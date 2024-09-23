import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
import { appiumRootConfig } from "./AppiumMultiConfig"; 
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./*_test.ts",
  output: "./output",   
  helpers: {
    Appium: appiumRootConfig,
    REST: {},
    MobileEvent: {
      require: "./helper/Mobile_Event_Helper.ts",
    },
    Initial: {
      require: "./helper/Initial_Helper.ts",
    },
    ScreenShoot: {
      require: "./helper/Screen_Shoot_Helper.ts",
    },
    GenerateString: {
      require: "./helper/Generate_String_Helper.ts",
    },
    NumberHelper: {
      require: "./helper/Number_Helper.ts",
    },
    MobileCoordinates: {
      require: "./helper/Mobile_Coordinates_Helper.ts",
    },
  },
  include: {
    I: "./steps_file",
  },
  name: "AutomationAppium",
  gherkin: {
    features: "./features/**/*.feature",
    steps: "./step_definitions/**/*.ts",
  },
};

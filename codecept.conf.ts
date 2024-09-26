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

import { RegisterApplicationConfig, LifeCycles } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";

const config: RegisterApplicationConfig = {
  name: "@madie/madie-layout",
  app: () =>
    import("@madie/madie-layout") as Promise<{
      default: LifeCycles<ApplicationProps>;
    }>,
  activeWhen: ["/"],
  customProps: {
    domElementGetter: () => document.getElementById("main"),
  },
};
export default config;

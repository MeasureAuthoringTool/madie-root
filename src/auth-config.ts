import { RegisterApplicationConfig, LifeCycles } from "single-spa";

const config: RegisterApplicationConfig = {
  name: "@madie/madie-auth",
  app: () =>
    import("@madie/madie-auth") as Promise<{
      default: LifeCycles;
    }>,
  activeWhen: ["/"],
  customProps: {
    domElementGetter: () => document.getElementById("madie-auth"),
  },
};

export default config;

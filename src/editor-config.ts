import { RegisterApplicationConfig, LifeCycles } from "single-spa";

const config: RegisterApplicationConfig = {
  name: "@madie/madie-editor",
  app: () =>
    import("@madie/madie-editor") as Promise<{
      default: LifeCycles;
    }>,
  activeWhen: ["/"],
  customProps: {
    domElementGetter: () => document.getElementById("madie-editor"),
  },
};

export default config;

import { RegisterApplicationConfig, LifeCycles } from "single-spa";

const config: RegisterApplicationConfig = {
  name: "@madie/madie-measure",
  app: () =>
    import("@madie/madie-measure") as Promise<{
      default: LifeCycles;
    }>,
  activeWhen: ["/"],
  customProps: {
    domElementGetter: (): HTMLElement | null =>
      document.getElementById("madie-measure"),
  },
};

export default config;

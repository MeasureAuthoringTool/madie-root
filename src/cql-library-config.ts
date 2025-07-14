import { RegisterApplicationConfig, LifeCycles } from "single-spa";

const config: RegisterApplicationConfig = {
  name: "@madie/madie-cql-library",
  app: () =>
    import("@madie/madie-cql-library") as Promise<{
      default: LifeCycles;
    }>,
  activeWhen: ["/"],
  customProps: {
    domElementGetter: () => document.getElementById("madie-cql-library"),
  },
};

export default config;

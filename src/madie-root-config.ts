import { registerApplication, start } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";
import layoutConfig from "./layout-config";

registerApplication<ApplicationProps>(layoutConfig);

start({
  urlRerouteOnly: true,
});

import { registerApplication, start } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";
import layoutConfig from "./layout-config";
import editorConfig from "./editor-config";
import authConfig from "./auth-config";
import publicConfig from "./public-config";
import componentsConfig from "./components-config";
import measureConfig from "./measure-config";

registerApplication<ApplicationProps>(layoutConfig);
registerApplication<ApplicationProps>(editorConfig);
registerApplication<ApplicationProps>(authConfig);
registerApplication<ApplicationProps>(publicConfig);
registerApplication<ApplicationProps>(componentsConfig);
registerApplication<ApplicationProps>(measureConfig);

start({
  urlRerouteOnly: true,
});

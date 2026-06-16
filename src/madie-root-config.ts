import { registerApplication, start } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";
import layoutConfig from "./layout-config";
import authConfig from "./auth-config";
import measureConfig from "./measure-config";
import cqllibraryConfig from "./cql-library-config";

registerApplication<ApplicationProps>(layoutConfig);
registerApplication<ApplicationProps>(authConfig);
registerApplication<ApplicationProps>(measureConfig);
registerApplication<ApplicationProps>(cqllibraryConfig);

start({
  urlRerouteOnly: true,
});

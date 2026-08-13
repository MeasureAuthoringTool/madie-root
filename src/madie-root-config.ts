import { registerApplication, start } from "single-spa";
import { ApplicationProps } from "./ApplicationConfig";
import layoutConfig from "./layout-config";

// Only the layout shell is orchestrated by single-spa. It mounts into #main and
// owns all feature-app routing internally (React Router in madie-layout renders
// <MadieMeasure/>, <MadieCqlLibrary/>, <MadieAdmin/> as import-map modules).
// The feature apps therefore do NOT need their own single-spa registrations.
registerApplication<ApplicationProps>(layoutConfig);

start({
  urlRerouteOnly: true,
});

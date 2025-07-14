declare module "@madie/madie-layout" {
  import { FC } from "react";
  import { LifeCycleFn } from "single-spa";

  export const MadieLayout: FC;
  export const bootstrap: LifeCycleFn<void>;
  export const mount: LifeCycleFn<void>;
  export const unmount: LifeCycleFn<void>;
}

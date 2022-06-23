import { JSX } from "typedoc";
import { AudiusThemeRenderContext as Context } from "../index";

export { layout } from "./layout";

export function bindContext<M>(
  template: Template<JSX.Element, M>,
  context: Context
) {
  return (model: M) => template(context, model);
}

import {
  Application,
  DefaultTheme,
  PageEvent,
  JSX,
  DefaultThemeRenderContext,
  Renderer,
  Options,
  RendererEvent,
  EventCallback,
  ReflectionKind,
  DeclarationReflection,
  Reflection,
} from "typedoc";
import * as templates from "./templates";

export class AudiusThemeRenderContext extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options);
  }

  // Layouts
  defaultLayout = templates.bindContext(templates.layout, this);

  // Pages
  // indexTemplate = templates.bindContext(templates.project, this);
  // reflectionTemplate = templates.bindContext(templates.container, this);

  // // Partials
  // navigation = templates.bindContext(templates.navigation, this);
  // members = templates.bindContext(templates.members, this);
  // comment = templates.bindContext(templates.comment, this);
  // subitems = templates.bindContext(templates.subitems, this);
}

export class AudiusTheme extends DefaultTheme {
  private context: AudiusThemeRenderContext;

  constructor(renderer: Renderer) {
    super(renderer);
    this.context = new AudiusThemeRenderContext(this, this.application.options);
  }

  getRenderContext(_pageEvent: PageEvent<any>) {
    return this.context;
  }
}

export function load(app: Application) {
  const onRenderBegin: EventCallback = (event: RendererEvent) => {
    const reflections = event.project.getReflectionsByKind(
      ReflectionKind.Class
    ) as DeclarationReflection[];
    reflections.forEach((r: DeclarationReflection) => {
      delete r.typeHierarchy;
      r.name = r.name.replace("Api", "");
      r.kindString = "";
      r.groups = r.groups?.filter((g) => {
        const kindsToDelete = [
          ReflectionKind.Property,
          ReflectionKind.Constructor,
        ];
        const result = !kindsToDelete.includes(g.kind);
        return result;
      });

      // TODO: Delete "inherited from" on TracksApi and ResolveApi
      r.children?.forEach((c) => {
        if (c.kind === ReflectionKind.Method) {
          delete c.parent;
        }
      });

      // TODO: Finish up sidebar structure
      // TODO: add examples
    });
  };

  app.renderer.on(RendererEvent.BEGIN, onRenderBegin);
}

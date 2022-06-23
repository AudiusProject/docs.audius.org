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
import * as examples from "./examples";

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

    // For each of the classes
    reflections.forEach((r: DeclarationReflection) => {
      // Remove the Hierarchy display
      delete r.typeHierarchy;

      // Map the names
      r.name = r.name.replace("Api", "");

      // Hide the Kind display
      r.kindString = "";

      // Delete everything but methods
      r.groups = r.groups?.filter((g) => {
        const kindsToDelete = [
          ReflectionKind.Property,
          ReflectionKind.Constructor,
        ];
        const result = !kindsToDelete.includes(g.kind);
        return result;
      });

      //   TODO: Delete "inherited from" on TracksApi and ResolveApi
      r.children?.forEach((c) => {
        if (c.kind === ReflectionKind.Method) {
          // Find the corresponding example in the `examples` directory
          const example = (examples as any)[r.name.toLowerCase()]?.[c.name];

          // Add the example to the comment
          if (c.signatures?.[0].comment && example) {
            c.signatures[0].comment.text = `Example:\n\n\`\`\`typescript\n${example}\n\`\`\``;
          }
        }
      });

      // TODO: fix escaping of single quotes (user methods)
      // TODO: Expand parameters
    });
  };

  app.renderer.on(RendererEvent.BEGIN, onRenderBegin);
}

import {
  Application,
  RendererEvent,
  EventCallback,
  ReflectionKind,
  DeclarationReflection,
} from "typedoc";
import * as examples from "./examples";

export function load(app: Application) {
  const onRenderBegin: EventCallback = (event: RendererEvent) => {
    const reflections = event.project.getReflectionsByKind(
      ReflectionKind.Class
    ) as DeclarationReflection[];

    // For each of the classes
    reflections.forEach((r: DeclarationReflection) => {
      // Remove the Hierarchy display
      delete r.typeHierarchy;

      if (r.name === "TracksApi") {
        console.log(r.inheritedFrom);
      }

      // Update the name
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

      r.children?.forEach((c) => {
        delete r.parent;
        if (c.kind === ReflectionKind.Method) {
          // Find the corresponding example in the `examples` directory
          const example = (examples as any)[r.name.toLowerCase()]?.[c.name];

          // Add the example to the comment
          if (c.signatures?.[0].comment && example) {
            c.signatures[0].comment.text = `Example:\n\n\`\`\`typescript\n${example}\n\`\`\``;
          }

          // Fix escaping of single quotes in short text description
          if (c.signatures?.[0].comment?.shortText) {
            c.signatures[0].comment.shortText =
              c.signatures?.[0].comment?.shortText.replace("\\'", "'");
          }
        }
      });
    });
  };

  app.renderer.on(RendererEvent.BEGIN, onRenderBegin);
}

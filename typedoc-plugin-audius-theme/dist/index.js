'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var typedoc = require('typedoc');

const layout = (context, page) => {
    var _a;
    const model = page.model;
    const project = page.project;
    const title = model.name === project.name
        ? project.name
        : `${model.name} | ${project.name}`;
    (_a = context.relativeURL("assets/oxide/logo.svg")) !== null && _a !== void 0 ? _a : "";
    return (typedoc.JSX.createElement("html", { class: "default" },
        typedoc.JSX.createElement("head", null,
            typedoc.JSX.createElement("meta", { charSet: "utf-8" }),
            context.hook("head.begin"),
            typedoc.JSX.createElement("meta", { "http-equiv": "x-ua-compatible", content: "IE=edge" }),
            typedoc.JSX.createElement("title", null, title),
            typedoc.JSX.createElement("meta", { name: "description", content: "Documentation for " + project.name }),
            typedoc.JSX.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })),
        typedoc.JSX.createElement("body", null,
            typedoc.JSX.createElement("main", null,
                "HELLO",
                typedoc.JSX.createElement("section", { id: "main-content", class: "content" },
                    context.hook("content.begin"),
                    page.template(page),
                    context.hook("content.end")),
                typedoc.JSX.createElement("section", { id: "search", class: "content hidden" })),
            context.analytics(),
            context.hook("body.end"))));
};

function bindContext(template, context) {
    return (model) => template(context, model);
}

class AudiusThemeRenderContext extends typedoc.DefaultThemeRenderContext {
    constructor(theme, options) {
        super(theme, options);
        // Layouts
        this.defaultLayout = bindContext(layout, this);
    }
}
class AudiusTheme extends typedoc.DefaultTheme {
    constructor(renderer) {
        super(renderer);
        this.context = new AudiusThemeRenderContext(this, this.application.options);
    }
    getRenderContext(_pageEvent) {
        return this.context;
    }
}
function load(app) {
    const onRenderBegin = (event) => {
        const reflections = event.project.getReflectionsByKind(typedoc.ReflectionKind.Class);
        reflections.forEach((r) => {
            var _a, _b;
            delete r.typeHierarchy;
            r.name = r.name.replace("Api", "");
            r.kindString = "";
            r.groups = (_a = r.groups) === null || _a === void 0 ? void 0 : _a.filter((g) => {
                const kindsToDelete = [
                    typedoc.ReflectionKind.Property,
                    typedoc.ReflectionKind.Constructor,
                ];
                const result = !kindsToDelete.includes(g.kind);
                return result;
            });
            // TODO: Delete "inherited from" on TracksApi and ResolveApi
            (_b = r.children) === null || _b === void 0 ? void 0 : _b.forEach((c) => {
                if (c.kind === typedoc.ReflectionKind.Method) {
                    delete c.parent;
                }
            });
            // TODO: Finish up sidebar structure
            // TODO: add examples
        });
    };
    app.renderer.on(typedoc.RendererEvent.BEGIN, onRenderBegin);
}

exports.AudiusTheme = AudiusTheme;
exports.AudiusThemeRenderContext = AudiusThemeRenderContext;
exports.load = load;
//# sourceMappingURL=index.js.map

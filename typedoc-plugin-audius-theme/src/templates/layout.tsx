import { JSX } from "typedoc";

export const layout: Template<JSX.Element> = (context, page) => {
  const model = page.model;
  const project = page.project;
  const title =
    model.name === project.name
      ? project.name
      : `${model.name} | ${project.name}`;

  const logoUrl = context.relativeURL("assets/oxide/logo.svg") ?? "";

  return (
    <html class="default">
      <head>
        <meta charSet="utf-8" />
        {context.hook("head.begin")}
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>{title}</title>
        <meta
          name="description"
          content={"Documentation for " + project.name}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>
          HELLO
          <section id="main-content" class="content">
            {context.hook("content.begin")}
            {page.template(page)}
            {context.hook("content.end")}
          </section>
          <section id="search" class="content hidden"></section>
        </main>

        {context.analytics()}
        {context.hook("body.end")}
      </body>
    </html>
  );
};

import { FreshContext, type PageProps } from "$fresh/server.ts";
import { accepts } from "oak_commons/negotiation.ts";

export const handler = async (
    req: Request,
    ctx: FreshContext,
): Promise<Response> => {
    if (accepts(req, "application/*", "text/html") === "text/html") {
        return ctx.render();
    }

    const request = await fetch(
        `https://raw.githubusercontent.com/iconify/icon-sets/master/json/${ctx.params.pack}.json`,
    );
    if (!request.ok) {
        return new Response("Not found", { status: 404 });
    }
    const data = await req.json();
    const icon = data.icons[ctx.params.icon];
    const width = icon.width || data.info.width || data.info.height || 16;
    const height = icon.height || data.info.height || data.info.width || 16;
    return new Response(
        `
/** @jsxImportSource npm:@builder.io/qwik */
import { component$ } from "npm:@builder.io/qwik";

/**
 * ${data.info.name} - ${ctx.params.icon}
 * Version: ${data.info.version}
 * License: [${data.info.license.title}](${data.info.license.url})
 * 
 */ 
export default component$(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      ${icon.body}
    </svg>
  );
}`,
        {
            headers: {
                "Content-Type": "text/tsx",
            },
        },
    );
};
export default function ModulePage(ctx: PageProps) {
    return (
        <div class="container mx-auto p-4">
            <h1 class="text-4xl text-center text-[#4868a6] py-5 mb-5">
                <a href={`/${ctx.params.pack}`}>{ctx.params.pack}</a>/<a
                    href={`https://icon-sets.iconify.design/${ctx.params.pack}/${ctx.params.icon}`}
                >
                    {ctx.params.icon}
                </a>
            </h1>
            <div class="mockup-code">
                <pre data-prefix="1"><code>import GeneratedIcon from "https://icons.church/{ctx.params
          .pack}/{ctx.params.icon}/qwik";</code></pre>
                <pre data-prefix="2"><code></code></pre>
            </div>
        </div>
    );
}

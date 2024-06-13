import { FreshContext, type PageProps } from "$fresh/server.ts";
import { accepts } from "oak_commons/negotiation.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  if (accepts(req, "application/*", "text/html") === "text/html") {
    return ctx.render();
  }
  const data = await (await fetch(
    `https://raw.githubusercontent.com/iconify/icon-sets/master/json/${ctx.params.pack}.json`,
  )).json();

  const icon = data.icons[ctx.params.icon];
  const width = icon.width || data.info.width || data.info.height || 16;
  const height = icon.height || data.info.height || data.info.width || 16;
  return new Response(
    `
/**
 * ${data.info.name} - ${ctx.params.icon}
 * Version: ${data.info.version}
 * License: [${data.info.license.title}](${data.info.license.url})
 * ![](data:image/svg+xml,"https://api.iconify.design/${ctx.params.pack}/${ctx.params.icon}.svg")
 * 
 */ 
export default function GeneratedIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" {...props}>
      ${icon.body}
    </svg>
  );
}`,
    {
      headers: {
        "Content-Type": "text/jsx",
      },
    },
  );
};
export default function ModulePage(ctx: PageProps) {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-4xl text-center text-[#1a202c]">
        {ctx.params.pack}/{ctx.params.icon}
      </h1>
      <div class="mt-4 text-center text-gray-500 bg-slate-800 rounded-sm p-2">
        import GeneratedIcon from "https://iconify.deno.dev/{ctx.params
          .pack}/{ctx.params.icon}";
      </div>
    </div>
  );
}

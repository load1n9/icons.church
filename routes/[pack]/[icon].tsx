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
 * 
 */ 
export default function GeneratedIcon(props: any): any {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" {...props}>
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
        {ctx.params.pack}/{ctx.params.icon}
      </h1>
      <div class="mockup-code">
        <pre data-prefix="1"><code>import GeneratedIcon from "https://icons.church/{ctx.params
          .pack}/{ctx.params.icon}";</code></pre>
        <pre data-prefix="2"><code></code></pre>
      </div>
    </div>
  );
}

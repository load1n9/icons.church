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

  return new Response(
    `export default function GeneratedIcon({ width=16, height=16, color="currentColor", ...props }) {
  return (
    <svg width={width} height={height} fill={color} viewBox="0 0 24 24" {...props} >
      ${data.icons[ctx.params.icon].body}
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

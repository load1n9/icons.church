import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _: Request,
  ctx: FreshContext,
): Promise<Response> => {
  const req = await fetch(
    `https://raw.githubusercontent.com/iconify/icon-sets/master/json/${ctx.params.pack}.json`,
  );
  if (!req.ok) {
    return new Response("Not found", { status: 404 });
  }
  const data = await req.json();
  const icon = data.icons[ctx.params.icon];
  if (!icon) {
    return new Response("Not found", { status: 404 });
  }
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

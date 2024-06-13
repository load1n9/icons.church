import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  const width = ctx.url.searchParams.get("width") || "16";
  const height = ctx.url.searchParams.get("height") || "16";
  const color = ctx.url.searchParams.get("color") || "currentColor";
  const box = ctx.url.searchParams.get("box") || "false";
  const url =
    `https://api.iconify.design/${ctx.params.pack}/${ctx.params.icon}.svg?width=${width}&height=${height}&color=${color}&box=${box}`;
  try {
    const response = await fetch(url);
    const body = await response.text();

    return new Response(
      `export default function GeneratedIcon(props) {
    return <svg dangerouslySetInnerHTML={{ __html: \`${body}\` }} {...props}></svg>;
}`,
      {
        headers: {
          "Content-Type": "application/javascript",
        },
      },
    );
  } catch {
    return new Response("Icon not found", { status: 404 });
  }
};

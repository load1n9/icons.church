import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  { params: { pack, icon } }: FreshContext,
): Promise<Response> => {
  const url = `https://api.iconify.design/${pack}/${icon}.svg`;
  try {
    const response = await fetch(url);
    const body = await response.text();

    return new Response(
      `export default function GeneratedIcon({
    width=16,
    height=16, 
    color = "currentColor",
    box = false,
}) {
    return (
    ${body}
    )
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

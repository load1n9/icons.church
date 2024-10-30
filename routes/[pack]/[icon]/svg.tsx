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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      ${icon.body}
    </svg>
  );
}`,
        {
            headers: {
                "Content-Type": "image/svg+xml",
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
                <pre data-prefix="1">
            <code>
            {`async function getIcon() {`}
            </code></pre>
                <pre data-prefix="2"><code>
                {`  const res = await fetch(\`https://icons.church/${ctx.params.pack}/${ctx.params.icon}/svg\`);`}
                    </code></pre>
                <pre data-prefix="3"><code>
                {`  const svg = await res.text();`}
                    </code></pre>
                <pre data-prefix="4"><code>
                {`  return svg;`}
                    </code></pre>
                <pre data-prefix="5"><code>
                {`}`}
                    </code></pre>
                <pre data-prefix="6"><code>
                {``}
                    </code></pre>
                <pre data-prefix="7"><code>
                {`function Icon() {`}
                    </code></pre>
                <pre data-prefix="8"><code>
                {`  const [svg, setSvg] = useState("");`}
                    </code></pre>
                <pre data-prefix="9"><code>
                {`  useEffect(() => {`}
                    </code></pre>
                <pre data-prefix="10"><code>
                {`    getIcon().then(setSvg);`}
                    </code></pre>
                <pre data-prefix="11"><code>
                {`  }, []);`}
                    </code></pre>
                <pre data-prefix="12"><code>
                {`  return <div dangerouslySetInnerHTML={{ __html: svg }} />;`}
                    </code></pre>
                <pre data-prefix="13"><code>
                {`}`}
                    </code></pre>
                <pre data-prefix="14"><code>
                {``}
                    </code></pre>
                <pre data-prefix="15"><code>
                {`export default Icon;`}
                    </code></pre>
            </div>
        </div>
    );
}

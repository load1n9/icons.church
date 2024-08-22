import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import TypingAnimation from "../islands/Typing.tsx";
import { NeonGradientCard } from "../islands/Neon.tsx";

export default function Home() {
  const example: [string, string, string, string] = [
    "import GeneratedIcon from 'https://icons.church/ICON_FAMILY/ICON_NAME';",
    "export default function MyComponent() {",
    "   return <GeneratedIcon />;",
    "}",
  ];

  const example2: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ] = [
    "async function getIcon() {",
    "  const res = await fetch(`https://icons.church/ICON_FAMILY/ICON_NAME/svg`);",
    "  const svg = await res.text();",
    "  return svg;",
    "}",
    "function Icon() {",
    '  const [svg, setSvg] = useState("");',
    "  useEffect(() => {",
    "    getIcon().then(setSvg);",
    "  }, []);",
    "  return <div dangerouslySetInnerHTML={{ __html: svg }} />;",
    "}",
  ];

  return (
    <div class="container mx-auto p-4">
      <section class="w-full h-auto flex relative justify-center items-center flex-col pt-16 gap-16">
        <div class="pb-12">
          <TypingAnimation
            text="Icons.church"
            className={`pt-10 max-w-screen-sm mt-4 font-bold ${"font-holy"} text-center text-4xl`}
          />
        </div>
        <h2 class="text-3xl text-center text-gray-400">
          Use over{" "}
          <div class="stat-value text-transparent bg-clip-text bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1]">
            200k
          </div>{" "}
          icons from{" "}
          <a href="https://iconify.design/" class="text-blue-300">Iconify</a>
          {" "}
          in your <a href="https://deno.com" class="text-green-300">Deno</a>
          {" "}
          projects with ease.
        </h2>
      </section>
      <section class="w-full h-full flex relative justify-center items-center flex-col pt-16 gap-16">
        <h1 class="text-4xl font-bold mt-8">Getting Started</h1>
        <p class=" text-xl text-gray-400">
          Step 1: Find an icon you like from
        </p>
        <NeonGradientCard>
          <div className="mockup-browser bg-base-200 w-full border">
            <div className="mockup-browser-toolbar">
              <div className="input bg-base-200 border">
                <a class="underline" href="https://icon-sets.iconify.design/">
                  https://icon-sets.iconify.design/
                </a>.
              </div>
            </div>
            <div className="bg-base-200 h-80 flex justify-center border-t">
              <iframe
                src="https://icon-sets.iconify.design/"
                class="w-full h-full border-none"
              />
            </div>
          </div>
        </NeonGradientCard>

        <p class=" text-xl text-gray-400">
          Step 2: Copy the import statement.
        </p>
        <NeonGradientCard>
          <div class="mockup-code">
            <pre data-prefix="1"><code>{example[0]}</code></pre>
          </div>
        </NeonGradientCard>

        <p class=" text-xl text-gray-400">
          Step 3: Use the icon in your component.
        </p>

        <NeonGradientCard>
          <div class="mockup-code">
            <pre data-prefix="2"><code>{example[1]}</code></pre>
            <pre data-prefix="3"><code>{example[2]}</code></pre>
            <pre data-prefix="4"><code>{example[3]}</code></pre>
          </div>
        </NeonGradientCard>
      </section>

      <section class="w-full h-auto flex relative justify-center items-center flex-col pt-16 gap-16">
        <h1 class="text-4xl font-bold mt-8">Using SVG</h1>
        <p class=" text-xl text-gray-400">
          If you would like to use the SVG directly, you can fetch the SVG from
          our API.
        </p>
        <NeonGradientCard>
          <div class="mockup-code">
            <pre data-prefix="1"><code>{example2[0]}</code></pre>
            <pre data-prefix="2"><code>{example2[1]}</code></pre>
            <pre data-prefix="3"><code>{example2[2]}</code></pre>
            <pre data-prefix="4"><code>{example2[3]}</code></pre>
            <pre data-prefix="5"><code>{example2[4]}</code></pre>
            <pre data-prefix="6"><code></code></pre>
            <pre data-prefix="7"><code>{example2[5]}</code></pre>
            <pre data-prefix="8"><code>{example2[6]}</code></pre>
            <pre data-prefix="9"><code>{example2[7]}</code></pre>
            <pre data-prefix="10"><code>{example2[8]}</code></pre>
            <pre data-prefix="11"><code>{example2[9]}</code></pre>
            <pre data-prefix="12"><code>{example2[10]}</code></pre>
            <pre data-prefix="13"><code>{example2[11]}</code></pre>
          </div>
        </NeonGradientCard>
      </section>
      <section class="w-full h-auto flex relative justify-center items-center flex-col pt-16 gap-16">
        <h1 class="text-4xl font-bold mt-8">Contribute</h1>
        <p class=" text-xl text-gray-400">
          If you would like to contribute to this project, please visit our{" "}
          <a href="https://github.com/load1n9/iconify" class="hover:underline">
            GitHub repository
          </a>
        </p>
        <div class="flex gap-4">
          <a
            href="https://github.com/load1n9/iconify"
            class="btn"
          >
            Learn More <IconBrandGithub class="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}

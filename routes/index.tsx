import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
export default function Home() {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-4xl text-center text-[#1a202c]">
        Iconify Deno
      </h1>
      <p class="mt-4 text-center text-[#1a202c]">
        This is a demo of Iconify Deno, a server-side rendering service for
        Iconify icons.
      </p>
      <p class="mt-4 text-center text-[#1a202c]">
        To get started, visit the github repository{" "}
        <a href="https://github.com/load1n9/iconify" class="text-[#1a202c]">
          here <IconBrandGithub width={24} height={24} />
        </a>.
      </p>
    </div>
  );
}

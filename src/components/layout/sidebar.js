import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-full lg:w-20 xl:w-20 min-h-full bg-transparent lg:bg-white xl:bg-white absolute lg:fixed xl:fixed left-0 top-0 bottom-0 flex flex-col justify-between">
      <Link href="https://skins.digitalax.xyz">
        <a className="block espa-icon">
          <img src="/ESPA.png" className="w-20 mx-auto" />
        </a>
      </Link>
      <img src="/espa_text.png" className="mx-auto mobile-invert" />
      <Link href="https://digitalax.xyz">
        <a className="lg:block xl:block hidden">
          <img src="/pattern.png" className="w-16 mx-auto mb-1" />
          <img
            src="/rect.png"
            className="object-scale-down h-12 w-12 mx-auto mb-4 mt-2"
          />
        </a>
      </Link>
    </div>
  );
};

export default SideBar;

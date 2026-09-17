import { wrap } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="pt-14 pb-12">
      <div className={`${wrap} max-w-[1024px]`}>
        <div className="w-full">
          <h3 className="mb-3.5 font-heading uppercase text-[1.3rem] font-bold tracking-[0.02em] text-accent">
          Contact
        </h3>
        <p className="mb-2.5 text-[1.1rem] text-ink">
            Feel free to reach out to me!
        </p>
        <p className="mb-2.5 text-[1.1rem]">
          <a
            href="mailto:michaelhfblevins@gmail.com"
            className="border-b border-rule text-accent transition duration-200 ease-out hover:text-[#00732c]"
          >
            michaelhfblevins@gmail.com
          </a>
        </p>
        <p className="mt-12 text-md font-heading tracking-wide text-[#727573] text-center">
          © {new Date().getFullYear()} Michael Blevins. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import { wrap, section, heading2, text_p } from "@/lib/data";

/* Define About classes */
const about_figure = "mb-7 overflow-hidden max-w-[420px] bg-canvas px-4"

export default function About() {
  return (
    <section
      id="about"
      className={`${section} bg-canvas`}
    >
      <div className={`${wrap} max-w-[1024px]`}>
        <div className="min-w-0 flex-1">
          <h2 className={heading2}>
            About
          </h2>
          <Image
          src="/images/osu-web-header-horiz-rev.png"
          alt="The Ohio State University"
          width={368}
          height={100}
          className={about_figure}
          />
          <p className={text_p}>
            I am a passionate and determined aspiring scientist eager to apply
            my computational skill set and analytical thinking to cutting-edge research.
            During my time as a student at The Ohio State University, I developed
            excellent capability in astronomical data analysis as well as a deep
            understanding of the underlying statistics, providing me with the framework
            to succeed in my future endeavors as I work towards becoming an astronomer.
          </p>
        </div>
      </div>
    </section>
  );
}
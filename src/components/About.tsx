"use client";

import Image from "next/image";
import { wrap, section, heading2, text_p } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* Define About classes */
const about_figure = "mb-8 mx-auto overflow-hidden max-w-[344px] bg-transparent"
const RKS_Album = "https://embed.music.apple.com/us/album/rks/1726995226?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1726995226&amp;theme=dark"
const Cringe_URL = "https://embed.music.apple.com/us/album/cringe/1457314241?i=1457314244&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1457314244&amp;theme=dark"
const Tusk_URL = "https://embed.music.apple.com/us/album/tusk/1055803853?i=1055804196&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1055804196&amp;theme=dark"
const BreatheDeeper_URL = "https://embed.music.apple.com/us/album/breathe-deeper/1497230760?i=1497231158&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1497231158&amp;theme=dark"
const Unknown_URL = "https://embed.music.apple.com/us/album/unknown-nth/1687585357?i=1687585677&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1687585677&amp;theme=dark"
const SexDrugsEtc_URL = "https://embed.music.apple.com/us/album/sex-drugs-etc/1627054290?i=1627054792&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1627054792&amp;theme=dark"
const ImYourWreck_URL = "https://embed.music.apple.com/us/album/im-your-wreck/1746524780?i=1746524783&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1746524783&amp;theme=dark"
const Capsize_URL = "https://embed.music.apple.com/us/album/capsize/1147798339?i=1147798358&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1147798358&amp;theme=dark"
const HotKnifer_URL = "https://embed.music.apple.com/us/album/hot-knifer/1404025195?i=1404025544&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1404025544&amp;theme=dark"
const Metamorphosis_URL = "https://embed.music.apple.com/us/album/metamorphosis/1610017668?i=1610017784&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1610017784&amp;theme=dark"
const NeverTooLate_URL = "https://embed.music.apple.com/us/album/never-too-late/266221870?i=266221984&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=266221984&amp;theme=dark"

const SONGS = [
  { id: 1, title: "Cringe", embedURL: Cringe_URL },
  { id: 2, title: "Tusk", embedURL: Tusk_URL },
  { id: 3, title: "Breathe Deeper", embedURL: BreatheDeeper_URL },
  { id: 4, title: "Unknown", embedURL: Unknown_URL },
  { id: 5, title: "SexDrugsEtc", embedURL: SexDrugsEtc_URL },
  { id: 6, title: "ImYourWreck", embedURL: ImYourWreck_URL },
  { id: 7, title: "Capsize", embedURL: Capsize_URL },
  { id: 8, title: "HotKnifer", embedURL: HotKnifer_URL },
  { id: 9, title: "Metamorphosis", embedURL: Metamorphosis_URL },
  { id: 10, title: "NeverTooLate", embedURL: NeverTooLate_URL },
];

function AppleMusicSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent>
        {SONGS.map((song) => (
          <CarouselItem key={song.id}>
            <div className="w-full max-w-[660px] mx-auto">
              <iframe
                title={`Apple Music Player - ${song.title}`}
                src={song.embedURL}
                id="embedPlayer"
                width="100%"
                height="175"
                style={{
                  border: '0px',
                  borderRadius: '12px',
                  width: '100%',
                  height: '175px',
                  maxWidth: '660px',
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

/* Define Applue Music Widget function */
function AppleMusicPlayer({ src }: { src: string }) {
  // Determine height based on Album or Song embed
  let calculatedHeight = "450"; // Default height fallback

  if (src.toLowerCase().includes("i=")) {
    calculatedHeight = "175";
  // Check for the track/song ID parameter "i="
  } else if (src.toLowerCase().includes("album")) {
    calculatedHeight = "450";
  }
  return (
    <div className="w-full max-w-[660px] mx-auto">
      <iframe
        title="Media player"
        src={src}
        id="embedPlayer"
        width="100%"
        height={calculatedHeight}
        style={{
          border: '0px',
          borderRadius: '12px',
          width: '100%',
          height: `${calculatedHeight}px`,
          maxWidth: '660px',
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allow="autoplay *; encrypted-media *; clipboard-write"
      />
    </div>
  );
}

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
          <h1 className="mb-8 font-heading text-[1.2rem] sm:text-[1.5rem] font-bold leading-[1.1] tracking-[1px] text-center">
            EDUCATION
          </h1>
          <Image
          src="/images/osu-web-header-horiz-rev.png"
          alt="The Ohio State University"
          width={368}
          height={100}
          className={about_figure}
          />
          <p className={text_p}>
            I graduated from The Ohio State University with a degree in Astronomy & Astrophysics.
            During my time as a student at The Ohio State University, I developed
            excellent capability in astronomical data analysis as well as a deep
            understanding of the underlying statistics, providing me with the framework
            to succeed in my future endeavors as I work towards becoming an astronomer.
          </p>
          <div className="mt-16 mb-8 flex flex-col items-center">
            <h1 className="mb-8 font-heading text-[1.2rem] sm:text-[1.5rem] font-bold leading-[1.1] tracking-[1px] text-center">
              HOBBIES & INTERESTS
            </h1>
            <h1 className="font-heading text-[1.8rem] sm:text-[2.2rem] font-bold leading-[1.1] tracking-[1px] text-center bg-gradient-to-r from-pink-500 via-orange-500 to-[#ffff00] bg-clip-text text-transparent">
              MUSIC
            </h1>
          </div>
          <p className={text_p}>
            Music is deeply special to me; it is so beautifully human. There is no other thing in life 
            that can evoke such raw, vigorous emotions and feelings of passion, sorrow, heartache, joy, 
            ecstasy—the way music does. No matter what you're feeling or where you're at in life, there 
            is a song—a heavenly collaboration of musical instruments and human voices that can ease your 
            suffering, or amplify your happiness, and fill you with life.
          </p>
          <p className={text_p}>
            I like all music, and I think there is something to appreciate about every song. Below you can find 
            some of my favorite songs and albums.
          </p>
          <Image
          src="/images/audio-waves.png"
          alt="Colorful Audio Waves"
          width={2800}
          height={280}
          className="overflow-hidden w-full"
          />
          <h1 className="mt-6 mb-10 text-accent text-[1.3rem] sm:text-[1.8rem] leading-[1.1] tracking-[1px] text-center">
            Favorite Album
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-[560px_1fr] w-full">
            <AppleMusicPlayer src={RKS_Album} />
            <div className="mt-4 flex flex-col content-start justify-between pl-4">
              <p className={text_p}>
                This is one of my favorite albums of all time, from my favorite band of all time:<br/>
                Rainbow Kitten Surprise.
              </p>
              <p className={text_p}>
                Give it a listen.
              </p>
              <p className={text_p}>
                Some of my favorite songs from it are<br/>
                <span className="text-[#0864AD]">Cold Love</span>,<br/>
                <span className="text-[#0864AD]">Bare Bones</span>,<br/>
                <span className="text-[#0864AD]">Goodnight Chicago</span>, and<br/>
                <span className="text-[#0864AD]">All's Well That Ends</span>.
              </p>
            </div>
          </div>
          <h1 className="mt-16 mb-10 text-accent text-[1.3rem] sm:text-[1.8rem] leading-[1.1] tracking-[1px] text-center">
            Favorite Songs
          </h1>
          <AppleMusicSlider />
          <p className={`${text_p} mt-12`}>
            I love sharing music and talking about music with people, and finding new music! Please feel free 
            to <a href="#links" className="underline">send me</a> some of your favorite songs or recommend me
            an artist I should listen to, I would genuinely love to listen to them.
          </p>
        </div>
      </div>
    </section>
  );
}
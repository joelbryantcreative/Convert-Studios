import Image from "next/image";

// Client logos. Files live in /public/logos (processed for the dark bar:
// white backgrounds removed, pure-black marks rendered white so they read).
type Client = { name: string; file: string; w: number; h: number };

const clients: Client[] = [
  { name: "Bed Threads", file: "bed-threads.png", w: 256, h: 256 },
  { name: "beforeyouspeak Coffee", file: "before-you-speak.png", w: 448, h: 443 },
  { name: "Belvedere Vodka", file: "belvedere-vodka.png", w: 3840, h: 1221 },
  { name: "Bytropic", file: "bytropic.png", w: 3137, h: 1270 },
  { name: "Cenovis", file: "cenovis.png", w: 975, h: 186 },
  { name: "Craved This", file: "craved-this.png", w: 963, h: 224 },
  { name: "Dometic", file: "dometic.png", w: 662, h: 87 },
  { name: "Fat Fish Bikes", file: "fat-fish-bikes.png", w: 1000, h: 266 },
  { name: "Huckberry", file: "huckberry.png", w: 982, h: 161 },
  { name: "Kenzo", file: "kenzo.png", w: 863, h: 171 },
  { name: "Koud", file: "koud.png", w: 1967, h: 477 },
  { name: "Kyveli", file: "kyveli.png", w: 712, h: 238 },
  { name: "Life Cykel", file: "life-cykel.png", w: 1042, h: 1043 },
  { name: "Mr Travel", file: "mttravel.png", w: 1500, h: 264 },
  { name: "My Muscle Chef", file: "my-muscle-chef.png", w: 1024, h: 517 },
  { name: "Nivea", file: "nivea.png", w: 492, h: 492 },
  { name: "OGX Beauty", file: "ogx.png", w: 750, h: 400 },
  { name: "Optimum Nutrition", file: "optimum-nutrition.png", w: 3778, h: 810 },
  { name: "Part Time Rangers", file: "part-time-rangers.png", w: 233, h: 101 },
  { name: "Rebel Sport", file: "rebel.png", w: 790, h: 256 },
  { name: "Reeftip Drinks Co", file: "reeftip-drinks-co.png", w: 744, h: 400 },
  { name: "Revel Saunas", file: "revel-saunas.png", w: 3202, h: 747 },
  { name: "Rogue", file: "rogue.png", w: 641, h: 718 },
  { name: "Sailing Whitsundays", file: "sailing-whitsundays.png", w: 1500, h: 189 },
  { name: "Salty Cabins", file: "salty-cabins.png", w: 611, h: 508 },
  { name: "Skydive Australia", file: "skydive-australia.png", w: 1251, h: 323 },
  { name: "Therabody", file: "therabody.png", w: 1770, h: 342 },
  { name: "Ultimate Ears", file: "ultimate-ears.png", w: 839, h: 375 },
  { name: "Youfoodz", file: "youfoodz.png", w: 972, h: 137 },
];

export function LogoBar() {
  return (
    <section className="border-y border-white/10 bg-noir py-12">
      {/* Edge-to-edge scrolling marquee */}
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 px-6 group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <Image
              key={`${client.file}-${i}`}
              src={`/logos/${client.file}`}
              alt={client.name}
              width={client.w}
              height={client.h}
              sizes="180px"
              aria-hidden={i >= clients.length}
              className="h-8 w-auto shrink-0 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

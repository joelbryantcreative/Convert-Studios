import Image from "next/image";

// Client list. To use a real logo, drop a file in /public/logos and set `logo`
// to its filename — the marquee shows the image instead of the text. Use white
// or light versions so they read on the dark bar. Without a file, the styled
// brand name is shown as a placeholder.
type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "Lifecycle Mushrooms" },
  { name: "Revel Saunas" },
  { name: "Building Personal Brands" },
  { name: "Adrian Portelli" },
  { name: "Kyvelli" },
  { name: "Dometic" },
  { name: "Cenovis" },
  { name: "Part Time Rangers" },
  { name: "Sailing Whitsundays" },
  { name: "Mr Travel" },
  { name: "Reeftip" },
  { name: "OGX Beauty" },
  { name: "beforeyouspeak Coffee" },
  { name: "Bed Threads" },
  { name: "Belvedere Vodka" },
  { name: "Under Armour" },
  { name: "Therabody" },
  { name: "Skydive Australia" },
  { name: "Kenzo" },
  { name: "Rebel Sport" },
  { name: "Nivea Men" },
  { name: "My Muscle Chef" },
  { name: "Youfoodz" },
  { name: "BSN Australia" },
  { name: "Optimum Nutrition" },
  { name: "Craved This" },
  { name: "Bytropic" },
  { name: "Huckberry" },
  { name: "Ben Handler" },
  { name: "Koud" },
];

export function LogoBar() {
  return (
    <section className="border-y border-white/10 bg-noir py-10">
      {/* Edge-to-edge scrolling marquee */}
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 px-7 group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex shrink-0 items-center"
              aria-hidden={i >= clients.length}
            >
              {client.logo ? (
                <Image
                  src={`/logos/${client.logo}`}
                  alt={client.name}
                  width={140}
                  height={36}
                  className="h-7 w-auto object-contain opacity-80 transition hover:opacity-100"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-lg text-white/40 transition-colors duration-300 hover:text-white/75">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

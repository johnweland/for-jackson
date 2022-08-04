import Image from "next/image";
import {
  BriefcaseIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const valuesList = [
  {
    name: "Responsible",
    href: "#",
    description: ``,
    icon: HeartIcon,
  },
  {
    name: "Community",
    href: "#",
    description: `The role of government whether local or at the highest levels is to serve the people, to listen to those it represents and behave in such away so as to reflect their will. \n "The government which governs least, governs best." ~ Henry David Thoreau`,
    icon: UserGroupIcon,
  },
  {
    name: "Issues",
    href: "#",
    description: `Historically I am usually just right of center but I don't carry the monicer of Republican or Democrat. \n I believe things need to be evaluated on an issue by issue bases and not which club I should to be in.`,
    icon: BriefcaseIcon,
  },
];

const ValuesPartial = () => {
  return (
    <>
      {/* Header */}
      <div id="values" className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://imgs.search.brave.com/uzj72ahXSmZQSpjCdoWDnUzwVw5mfLLJg2MgnkbgZeA/rs:fit:778:584:1/g:ce/aHR0cDovL3BpY3M0/LmNpdHktZGF0YS5j/b20vY3BpY3YvdmZp/bGVzMjIwMjIuanBn"
            alt=""
            loading="lazy"
            layout="fill"
          />
          <div
            className="absolute inset-0 bg-emerald-100 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Core Values
          </h2>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Values
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {valuesList.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-emerald-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                {link.description.split("\n").map((str) => (
                  <p key={str} className="mt-4 text-base text-gray-500">
                    {str}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ValuesPartial;

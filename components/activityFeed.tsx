import Image from "next/image";
import {
  UserGroupIcon,
  LocationMarkerIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/solid";

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const activity = [
  {
    id: 1,
    type: "moved",
    person: { name: "Weland Family", href: "#" },
    comment: `Moved to Jackson`,
    date: "July 2016",
  },
  {
    id: 2,
    type: "community",
    person: { name: "Jackson in Action", href: "#" },
    comment: `Joined the Jackson in Action community, a town hall format discussion group put together by community leader Jeff Gay. \n Jackson in Action was held semi-regularly to foster the discussion of issues and ideas about the Jackson area in hopes to facilitate growth in our community.`,
    date: "2017",
  },
  {
    id: 3,
    type: "community",
    person: { name: "Animal Committee", href: "#" },
    comment: `Mayor Wayne Walters tasked Alderman Jeff Gay with the formation of an Animal Committee to address and resolve the community concerns regarding the stray cat situation in the downtown area. \n The committee was led by Alderman Jeff Gay, and as a committee member I helped to found the Jackson County Animal Protection Society (JCAPS) as a legally registered 501(c)3 organization.`,
    date: "January 2020",
  },
  {
    id: 4,
    type: "assignment",
    person: {
      name: "Jackson County Animal Protection Society (JCAPS)",
      href: "#",
    },
    imageURL:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/240651267_116271594097649_8581966275091961355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8XM6DLAgo4EAX_RcOlh&_nc_ht=scontent-msp1-1.xx&oh=00_AT-yD6bJJNulsr8TtzqI9shy_8FzC5bNf7I2jWobmJsUwQ&oe=62EFF8F9",
    comment: `I currently serve as the appointed President of JCAPS to execute the day-to-day operations of the organization, with guidance from the Board of Directors. \n Since its inception in 2020, JCAPS has taken in, provided medical care for, and rehomed 40 animals (and counting) in Jackson County.`,
    date: "2020 - Current",
  },
  {
    id: 5,
    type: "community",
    person: { name: "Community Gardens", href: "#" },
    comment: `I have helped to establish the first community garden at Zimmerli Park. The community garden support S.T.E.A.M education programs, with the hopes to provide the excess fresh produce for community programs such as Senior Dining and the Food Shelf. \n As a volunteer for the "Green Thumbs" Garden Comittee, I participate in the upkeep and expansion of the Zimmerli community garden and in the planning for future community gardens.`,
    date: "March 2021 - Current",
  },
  {
    id: 6,
    type: "assignment",
    person: { name: "A Pet's Tale", href: "#" },
    imageURL:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/209202562_122432050044822_5113489918730997331_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WVNwuoMVqScAX-V-swF&_nc_ht=scontent-msp1-1.xx&oh=00_AT9nfThLZIM-6QMlIEvTOTSaBOG-4jOtD2DTL0nqEjXL6A&oe=62F17F73",
    comment: `With the oversight of the Board of Directors, A Pet's Tale (a pet supply store) was conceived in order to provide a necessary service for the community, and to provide financial resources for JCAPS, thus allowing the non-profit to continue to cover spay/neuter surgeries, vaccinations, and other needs for the animals that JCAPS takes in.`,
    date: "August 2021",
  },
  {
    id: 7,
    type: "speaker",
    person: { name: "Jackson in Action: Podcast", href: "#" },
    comment: `I am in the process of creating a podcast called "Jackson in Action" (a personal passion project). I developed this idea with input from Jeff Gay as a partner and mentor on the project. Now, I want to bring those ideas and concepts to fruition. The goal is to talk about the Jackson area and the community. \n The podcast will cover topics such as community issues and think-tank ideas, with the hope of sparking discussion and action, and to help facilitate growth in the community.`,
    date: "July 2022",
  },
];

const ActivityFeed = () => {
  return (
    <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Community Involvment
      </h2>
      <div className="flow-root prose-li:list-none prose">
        <ul role="list" className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {activityItem.type === "moved" ? (
                    <>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          <LocationMarkerIcon
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.person.name}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          {activityItem.comment.split("\n").map((str) => (
                            <p key={str}>{str}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : activityItem.type === "assignment" ? (
                    <>
                      <div className="relative">
                        {activityItem.imageURL ? (
                          <Image
                            className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                            src={activityItem.imageURL}
                            alt="Logo of the organization"
                            loading="lazy"
                            width={40}
                            height={40}
                            layout="fixed"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                              shimmer(700, 475)
                            )}`}
                          />
                        ) : null}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.person.name}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          {activityItem.comment.split("\n").map((str) => (
                            <p key={str}>{str}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : activityItem.type === "community" ? (
                    <>
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                            <UserGroupIcon
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.person.name}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          {activityItem.comment.split("\n").map((str) => (
                            <p key={str}>{str}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : activityItem.type === "speaker" ? (
                    <>
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                            <SpeakerphoneIcon
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.person.name}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          {activityItem.comment.split("\n").map((str) => (
                            <p key={str}>{str}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivityFeed;

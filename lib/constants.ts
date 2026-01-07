export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Summit US",
    image: "/images/event1.png",
    slug: "react-summit-us",
    location: "New York City, NY",
    date: "Apr 10-12, 2025",
    time: "9:00 AM - 5:30 PM",
  },
  {
    title: "Google I/O",
    image: "/images/event2.png",
    slug: "google-io",
    location: "Mountain View, CA",
    date: "May 14-15, 2025",
    time: "10:00 AM - 6:00 PM",
  },
  {
    title: "WWDC",
    image: "/images/event3.png",
    slug: "wwdc",
    location: "Cupertino, CA",
    date: "Jun 2-6, 2025",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "Hack the North",
    image: "/images/event4.png",
    slug: "hack-the-north",
    location: "Waterloo, ON",
    date: "Sep 13-15, 2025",
    time: "Friday 6:00 PM - Sunday 4:00 PM",
  },
  {
    title: "KubeCon + CloudNativeCon NA",
    image: "/images/event5.png",
    slug: "kubecon-na",
    location: "Chicago, IL",
    date: "Nov 10-13, 2025",
    time: "8:30 AM - 6:00 PM",
  },
  {
    title: "JSConf EU",
    image: "/images/event6.png",
    slug: "jsconf-eu",
    location: "Berlin, DE",
    date: "Jul 19-20, 2025",
    time: "9:30 AM - 5:00 PM",
  },
]

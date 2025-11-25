import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackatons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map(({ slug, image, title, location, date, time }) => (
            <li key={slug}>
              <EventCard
                slug={slug}
                title={title}
                image={image}
                location={location}
                date={date}
                time={time}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;

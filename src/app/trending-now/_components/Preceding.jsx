import HeadingAnimation from "@/components/HeadingAnimation";
import EventCard from "./EventCard";

const Preceding = ({events}) => {
    return (
        <section className='space-y-8'>
                        <HeadingAnimation>
                           {events.length > 0 && <h2 className='text-4xl font-semibold text-green-700 text-center'>Preceding</h2>}
                            </HeadingAnimation>
                <section className={`grid ${events.length < 3 ? "md:flex flex-row grid justify-center" : "md:grid-cols-3 place-items-center"} gap-4`}>
                {
                    events.map((event,i) => <EventCard key={i} event={event} soon={false} end={true}/>)
                }
                        </section>
                </section>
    );
};





export default Preceding;
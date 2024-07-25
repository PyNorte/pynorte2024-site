"use client"

import { Session } from "./typeSession";
import Activity from "../../components/activity";
import { useEffect, useRef, useState } from "react";


interface ActivitySession {
  daySession: Session[];
}


const ActivityPerDay: React.FC<ActivitySession> = ({ daySession }) => {
  const [scrollX, setScrollX] = useState<{ side: string }>({ side: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (data: { side: 'right' | 'left' }) => {
    setScrollX({ side: data.side });
  };

  useEffect(() => {
    if (scrollRef.current) {
      if (scrollX.side === "right") {
        scrollRef.current.scrollLeft += 200;
      } else if (scrollX.side === "left") {
        scrollRef.current.scrollLeft -= 200;
      }
      console.log('scrollLeft:', scrollRef.current.scrollLeft);
    }
  }, [scrollX]);

  const sessionsByTime = daySession.reduce((acc, session) => {
    if (session.start_time) {
      if (!acc.has(session.start_time)) {
        acc.set(session.start_time, []);
      }
      acc.get(session.start_time)?.push(session);
    }
    return acc;
  }, new Map<string, Session[]>());

  const groupedSessions = Array.from(sessionsByTime.entries());

  return (
    <section className="overflow-hidden">
      {groupedSessions.map(([startTime, sessions], index) => (
        <div key={index} className="relative mb-4">
          <div className="horas-layout">{startTime}</div>
          <div className="flex"
              >
            <div
              onClick={() => handleScroll({ side: 'left' })}
              className="absolute left-0 mt-2 flex h-full cursor-pointer items-center justify-center bg-sunset-950 p-1 opacity-75"
            >
              <span className="text-3xl text-white">&lt;</span>
            </div>
            <div
              ref={scrollRef}
              className="ml-6 flex flex-wrap gap-4 scroll-smooth "
            >
              {sessions.map((session) => (
                <div key={session.id_session}>
                  <Activity activitys={session} />
                </div>
              ))}
            </div>
            <div
              onClick={() => handleScroll({ side: 'right' })}
              className="absolute right-0 mt-2 flex h-full cursor-pointer items-center bg-sunset-950 p-1 opacity-75"
            >
              <span className="text-3xl text-white">&gt;</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActivityPerDay;
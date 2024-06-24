import { Session } from "./typeSession";
import Activity from "../../components/activity";
import { useEffect, useRef, useState } from "react";

interface ActivitySession {
  daySession: Session[];
}

const ActivityPerDay: React.FC<ActivitySession> = ({ daySession }) => {
 

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
        <div  key={index} className="relative mb-4">
          <div className="horas-layout">{startTime}</div>
          <div className="flex gap-4" >
            {sessions.map((session, sessionIndex) => (
              <div key={sessionIndex}  className="overflow-visible" >
                <Activity activitys={session} />
              </div>

            ))}
            {/* <><div className="cursor-pointer absolute left-0 bg-sunset-950 h-full flex items-center mt-2 p-4 opacity-75">
              <span className="text-white text-3xl">&lt;</span>
            </div> 
            <div className="cursor-pointer absolute right-0 bg-sunset-950 h-full flex items-center mt-2 p-4 opacity-75">
              <span className="text-white text-3xl">&gt;</span>
            </div>
            </> */}
            
          </div>         
        </div>
      ))}
    </section>
  );
};

export default ActivityPerDay;

import { even3api } from "."; // Replace with your actual import path and method

interface Speaker {
  id_speaker: number;
  name: string;
  photo: string;
  resume: string;
  facebook: string;
  linkedin: string;
  email: string;
  lattes: string;
  twitter: string;
  site: string;
}

interface Session {
  id_session: number;
  title: string;
  title_schedule: string;
  venue: string | null;
  description: string;
  tags: string | null;
  date: string;
  start_time: string;
  end_time: string;
  speakers: Speaker[];
}

interface Schedule {
  id_schedule: string;
  date: string;
  day: string;
  sessions: Session[];
}

interface Data {
  data: Schedule[];
}

export async function getSession(): Promise<Data> {
  try {
    const response = await even3api("/session/getschedule");
    const data = await response.json() as Data;
        
    return data;
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return { data: [] };
  }
}

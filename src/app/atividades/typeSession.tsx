export interface Speaker {
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

export interface Session {
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

export interface Schedule {
  id_schedule: string;
  date: string;
  day: string;
  sessions: Session[];
}


export interface PhoneApp {
  id: string;
  title: string;
  thaiTitle: string;
  engTitle?: string;
  subtitle: string;
  stage: string;
  icon: string;
  headerColor: string;
  glowColor: string;
  targetName?: string;
  actionButtons?: string[];
  lastEntry?: { in: string; out: string };
  schedule?: string;
  progressPercent?: string;
  stops?: PatrolStop[];
  isCommandCenter?: boolean;
  data?: VisitorLogEntry[];
}

export interface PatrolStop {
  id: number;
  name: string;
  time: string;
  status: "completed" | "current" | "pending";
}

export interface VisitorLogEntry {
  plate: string;
  name: string;
  type: string;
  time: string;
  status: "in" | "out";
}

export interface PhoneMockupProps {
  app: PhoneApp;
  colors: { badge: string; title: string };
}

export interface CommandCenterProps {
  data: VisitorLogEntry[];
}

export interface TechShowcaseCardProps {
  app: PhoneApp;
  index: number;
  colors: { badge: string; title: string };
}

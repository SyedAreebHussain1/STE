export interface Lead {
  email: string;
  firstName: string | null;
  lastName: string | null;
  message: string | null;
  leadSource: "Website" | "CommingSoon" | null;
}

export type Leads = Lead[];

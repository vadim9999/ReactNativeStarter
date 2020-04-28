interface Missions {
  name: string;
  flight: number;
}

export interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string | null;
  original_launch_unix: number | null;
  missions: Missions[];
  landings: number;
  type: string;
  details: string | null;
  reuse_count: number;
}

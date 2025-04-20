import type { Setting } from '$lib/models/setting';
import axios from 'axios';

export async function fetchSettings(platform: string, target: string): Promise<Setting[]> {
  const res = await axios.get<Setting[]>(`/api/settings?platform=${platform}&target=${target}`);
  return res.data;
}

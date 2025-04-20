import { Setting, SettingScope, SettingValue } from "../api/setting";
import { UserInstance } from "../api/user";

export class SettingsInstance {
  scope!: SettingScope;
  user?: UserInstance;
  version?: string;
}

export class SelectedSetting {
  setting!: Setting;
  value!: SettingValue;
  settings?: SelectedSetting[];
}

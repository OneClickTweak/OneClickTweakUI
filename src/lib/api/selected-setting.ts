import { Setting, SettingScope, SettingValue } from "./setting";
import { UserInstance } from "./user";

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

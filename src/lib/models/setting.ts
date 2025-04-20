export enum SettingScope {
  Machine = 1,
  User = 2,
}

export enum SupportedPlatform {
  Any = 0,
  Windows = 1 << 0,
  Linux = 1 << 1,
  Mac = 1 << 2,
}

export enum SettingType
{
    String,
    ExpandString,
    MultiString,
    Boolean,
    Bytes,
    Byte,
    Word,
    Int32,
    Int64,
    Single,
    Double
}

export interface Setting {
  /**
   * Platforms the setting version applies to
   */
  platform?: SupportedPlatform;

  /**
   * Setting name and also a translation key
   */
  name: string[]; // Required field

  /**
   * Tags used to describe the setting
   */
  tags?: Set<string>;

  /**
   * Handler
   */
  handler?: string;

  /**
   * Scope the setting applies to
   */
  scope?: SettingScope;

  /**
   * Path within the handler context
   */
  path?: string[];

  /**
   * Value key
   */
  key?: string;

  /**
   * Value data type
   */
  type?: SettingType;

  /**
   * Minimum platform version the setting is available for, inclusive (greater or equal than)
   */
  minVersion?: string;

  /**
   * Maximum platform version the setting is available for, exclusive (less than)
   */
  maxVersion?: string;

  /**
   * Nested merged specific values
   */
  settings?: Setting[];

  /**
   * Predefined possible value choices, if applicable
   */
  values?: SettingValue[];

  /**
   * Custom options used by a respective handler
   */
  options: Record<string, string>;
}

export interface SettingValue {
  /**
   * Translation key relative to definition key
   */
  name?: string[] | string;

  /**
   * Serialized value
   */
  value?: string;

  /**
   * If true, value is default
   */
  isDefault: boolean;
}

import * as migration_20260921_172836_memberships_schema from './20260921_172836_memberships_schema';

export const migrations = [
  {
    up: migration_20260921_172836_memberships_schema.up,
    down: migration_20260921_172836_memberships_schema.down,
    name: '20260921_172836_memberships_schema'
  },
];

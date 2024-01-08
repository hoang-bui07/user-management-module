import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'user-management',
  exposes: {
    './Module':
      'apps/user-management-module/user-management/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

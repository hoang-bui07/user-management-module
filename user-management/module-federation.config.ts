import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'user-management',
  exposes: {
    './Routes': 'apps/user-management-module/user-management/src/app/remote-entry/entry.routes.ts',
    './Signin': 'apps/user-management-module/user-management/src/app/sign-in/sign-in.routes.ts',
  },
};

export default config;

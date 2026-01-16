import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4llw5v3d',
    dataset: 'production'
  },
  deployment: {
    appId: 'gp53glz4feprmxfjj12pn4q0',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: false,
  }
})

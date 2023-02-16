import { defineConfig } from '@checkly/cli'

const config = defineConfig({
  projectName: 'Advanced Example Project',
  logicalId: 'advanced-example-project',
  repoUrl: 'https://github.com/matsmart/checkly-vercel-multi-project-repro',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['mac'],
    runtimeId: '2022.10',
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/tests/*.spec.ts', // this matches any Playwright spec-files and automagically creates a Browser check
    },
  },
  cli: {
    runLocation: 'eu-west-1',
  },
})

export default config
import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: [
      '**/1-getting-started/*.ts',
      '**/2-advance-examples/*.ts'
    ],
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: { 
      ...process.env,
    },
    experimentalMemoryManagement: true,
    video: false,
  },
})
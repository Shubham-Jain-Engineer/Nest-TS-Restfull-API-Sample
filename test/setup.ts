import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeEach(async (params: any) => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) {
    // no need to handel
  }
});
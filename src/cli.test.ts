import checkPackageUpdates from './updateVersionBanner';
import { run } from './main'
import './cli'
import { describe, expect, it, vi } from 'vitest';

vi.mock('./updateVersionBanner', () => ({
  default: vi.fn(),
  __esModule: true
}));
vi.mock('./main', () => ({
  run: vi.fn(),
}));

describe('cli', () => {
  it('should checkForUpdates and invoke main entrypoint', () => {
    expect(checkPackageUpdates).toHaveBeenCalled();
    expect(run).toHaveBeenCalled();
  });
});
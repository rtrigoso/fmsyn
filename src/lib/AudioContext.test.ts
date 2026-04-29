import { describe, it, expect, beforeEach } from "bun:test";

class MockAudioContext {}

(globalThis as unknown as { AudioContext: typeof MockAudioContext }).AudioContext = MockAudioContext;

describe("getAudioContext", () => {
  beforeEach(async () => {
    const freshModule = await import(`./AudioContext.ts?t=${Date.now()}`);
    (globalThis as any).__getAudioContext = freshModule.getAudioContext;
  });

  it("returns an AudioContext instance", () => {
    const ctx = (globalThis as any).__getAudioContext();
    expect(ctx).toBeInstanceOf(MockAudioContext);
  });

  it("returns the same instance on subsequent calls (singleton)", () => {
    const firstCall = (globalThis as any).__getAudioContext();
    const secondCall = (globalThis as any).__getAudioContext();
    expect(firstCall).toBe(secondCall);
  });
});

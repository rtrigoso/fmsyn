let instance: AudioContext | null = null;

export function getAudioContext(): AudioContext {
  if (!instance) {
    instance = new AudioContext();
  }
  return instance;
}

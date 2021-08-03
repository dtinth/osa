function osa<T, P extends any[]>(fn: (...args: P) => T, ...args: P): Promise<T>
export = osa

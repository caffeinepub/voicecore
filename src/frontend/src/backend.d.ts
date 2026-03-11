import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Stats {
    songsPlayed: bigint;
    activeUsers: bigint;
    serverCount: bigint;
}
export interface backendInterface {
    getStats(): Promise<Stats>;
    updateStats(newServerCount: bigint, newSongsPlayed: bigint, newActiveUsers: bigint): Promise<void>;
}

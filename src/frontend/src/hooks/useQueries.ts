import { useQuery } from "@tanstack/react-query";
import type { Stats } from "../backend.d";
import { useActor } from "./useActor";

export function useGetStats() {
  const { actor, isFetching } = useActor();
  return useQuery<Stats>({
    queryKey: ["stats"],
    queryFn: async () => {
      if (!actor) return { songsPlayed: 0n, activeUsers: 0n, serverCount: 0n };
      return actor.getStats();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 60000,
  });
}

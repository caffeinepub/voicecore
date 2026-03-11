import Nat "mo:core/Nat";

actor {
  type Stats = {
    serverCount : Nat;
    songsPlayed : Nat;
    activeUsers : Nat;
  };

  var serverCount = 0;
  var songsPlayed = 0;
  var activeUsers = 0;

  public query ({ caller }) func getStats() : async Stats {
    {
      serverCount;
      songsPlayed;
      activeUsers;
    };
  };

  public shared ({ caller }) func updateStats(newServerCount : Nat, newSongsPlayed : Nat, newActiveUsers : Nat) : async () {
    serverCount := newServerCount;
    songsPlayed := newSongsPlayed;
    activeUsers := newActiveUsers;
  };
};

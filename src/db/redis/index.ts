import redis from "redis";
import makeClient from "./redis";
import makeHRedis from "./hredis";

const initRedis = () => {
  const client = makeClient(redis);

  const user_hash = "REDIS_HASH";
  const repos_hash = "REDIS_HASH";
  const medium_hash = "REDIS_HASH";

  const user = makeHRedis(client, "User", user_hash);
  const repos = makeHRedis(client, "Repos", repos_hash);
  const medium = makeHRedis(client, "Medium", medium_hash);

  return Object.freeze({ user, repos, medium });
};

export default initRedis;

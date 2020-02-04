const makeRedisDb = (client: any, dynamic_name: any, REDIS_HASH: any) => {
  const redis: any = {};
  const dynamicSetName: string = `set${dynamic_name}`;
  const dynamicGetName: string = `get${dynamic_name}`;
  const dynamicGetAllName: string = `getAll${dynamic_name}`;
  const dynamicPutName: string = `put${dynamic_name}`;
  const dynamicDelName: string = `del${dynamic_name}`;

  const set = (REDIS_FIELD: string, data: any) => {
    return client.hset(REDIS_FIELD, REDIS_HASH, data);
  };
  const get = (REDIS_FIELD: string, data: any) => {
    return client.hget(REDIS_FIELD, REDIS_HASH, data);
  };
  const getAll = (REDIS_FIELD: string, data: any) => {
    return client.hget(REDIS_FIELD, REDIS_HASH, data);
  };
  const put = (REDIS_FIELD: string, data: any) => {
    return client.hset(REDIS_FIELD, REDIS_HASH, data);
  };
  const del = (REDIS_FIELD: string, data: any) => {
    return client.hdel(REDIS_FIELD, REDIS_HASH, data);
  };

  redis[dynamicSetName] = set;
  redis[dynamicGetName] = get;
  redis[dynamicGetAllName] = getAll;
  redis[dynamicPutName] = put;
  redis[dynamicDelName] = del;

  return Object.freeze({
    ...redis
  });
};

export default makeRedisDb;

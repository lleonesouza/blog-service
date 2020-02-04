const makeClient = (redis:any):any => {
  const client = redis.createClient();
  client.on("error", (err: any) => {
    console.log("Error " + err);
  });

  client.on("connect", () => {
    console.log("connected");
  });

  client.on("reconnecting", () => {
    console.log("reconnecting");
  });

  client.on("end", () => {
    console.log("end");
  });

  client.on("warning", (res: any) => {
    console.log("warning" + res);
  });
  return client;
};

export default makeClient;

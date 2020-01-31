const makeQueries = (Model: any) => {
  return {
    findAll: () => {},
    findOrCreate: async (auth: any) => {
      const res = await Model.findOrCreate(auth);
      return res
    },
    findById: async (id: string) => {
     const res = await Model.findOrCreate({ where: { id: id } });
     return res
    },
    updateById: async (id: string, data: string) => {
      const res = await Model.update({ where: { id: id } });
      return res
    },
    destroyById: async (id: string) => {
      const res = await Model.destroy({ where: { id: id } });
      return res
    },
  };
};

export default makeQueries;

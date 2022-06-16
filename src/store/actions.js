export const actions = {
  async getAllNodes({ commit }, nodeList) {
    for(const el of nodeList) {
      await commit('checkNodeStatusStart', el);
      
      try {
        const res = await fetch(`${el.url}/api/v1/status`);
        const response = await res.json();
        const params = {
          el,
          name: response.node_name
        };
        await commit('checkNodeStatusSuccess', params);
      }
      catch (e) {
        await commit('checkNodeStatusFailure', el);
      }
    }
  },

  async loadBlocks({ commit }, node) {    
    await commit('loadBlocksStart', node);

    try {
      const res = await fetch(`${node.url}/api/v1/blocks`);
      const response = await res.json();
      const params = {
        el: node,
        array: response.data
      };
      await commit('loadBlocksSuccess', params);
    }
    catch (e) {
      await commit('loadBlocksFailure', node);
    }
  },

  async resetBlocks({ commit }, node) {
    await commit('loadBlocksFailure', node);
  }
    
}
import { mutations } from '../../src/store/mutations'
import initialState from '../../src/store/initialState';

describe('Store Mutations', () => {
  const { 
    checkNodeStatusStart, 
    checkNodeStatusSuccess, 
    checkNodeStatusFailure,
    loadBlocksStart,
    loadBlocksSuccess,
    loadBlocksFailure
    } = mutations; 

  const initState = initialState();

  it('checkNodeStatusStart', () => {
      checkNodeStatusStart(initState, { url: initState.nodes.list[0].url });
      expect(initState.nodes.list[0].loading).toEqual(true);
  });

  it('checkNodeStatusSuccess', () => {
    const params = {
      el: {
        url: initState.nodes.list[0].url 
      },
      name: 'Thawing Springs'
    };

    checkNodeStatusSuccess(initState, params);
    expect(initState.nodes.list[0].name).toEqual(params.name);
  });

  it('checkNodeStatusFailure', () => {
    checkNodeStatusFailure(initState, { url: initState.nodes.list[0].url });
    expect(initState.nodes.list[0].loading).toEqual(false);
    expect(initState.nodes.list[0].online).toEqual(false);
  });

  // Blocks
  it('loadBlocksStart', () => {
    loadBlocksStart(initState, { url: initState.nodes.list[0].url });
      expect(initState.nodes.list[0].blocks.loading).toEqual(true);
  });

  it('checkNodeStatusSuccess', () => {
    const params = {
      el: {
        url: initState.nodes.list[0].url 
      },
      array: [
        {id: 1, attributes: {data: "Some information"}},
        {id: 2, attributes: {data: "Some information"}},
        {id: 3, attributes: {data: "Some information"}}
      ]
    };

    loadBlocksSuccess(initState, params);
    expect(initState.nodes.list[0].blocks.loading).toEqual(false);
    expect(initState.nodes.list[0].blocks.list).toEqual(params.array);
  });

  it('checkNodeStatusFailure', () => {
    loadBlocksFailure(initState, { url: initState.nodes.list[0].url });
    expect(initState.nodes.list[0].blocks.loading).toEqual(false);
    expect(initState.nodes.list[0].blocks.list).toEqual([]);
  });
});
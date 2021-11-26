export const ADD_ROOT_CHANNEL = "ADD_ROOT_CHANNEL";
export const RESET_ROOT_CHANNELS = "RESET_ROOT_CHANNELS";
export const ADD_CHANNEL = "ADD_CHANNEL";
export const ADD_BREADCRUMB = "ADD_BREADCRUMB";
export const REMOVE_BREADCRUMB = "REMOVE_BREADCRUMB";
export const TOGGLE_BREADCRUMB = "TOGGLE_BREADCRUMB";

export const addRootChannel = (channel) => ({
  type: ADD_ROOT_CHANNEL,
  channel,
});
export const addChannel = (channel) => ({ type: ADD_CHANNEL, channel });
export const toggleBreadcrumb = (rootChannelId, channel) => ({
  type: TOGGLE_BREADCRUMB,
  rootChannelId,
  channel,
});
export const addBreadcrumb = (rootChannelId, channel) => ({
  type: ADD_BREADCRUMB,
  rootChannelId,
  channel,
});
export const removeBreadcrumb = (rootChannelId, channel) => ({
  type: REMOVE_BREADCRUMB,
  rootChannelId,
  channel,
});

const defaultRootChannelState = [];
const defaultChannelState = {};
const defaultBreadcrumbState = {};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export const rootChannels = createReducer(defaultRootChannelState, {
  [ADD_ROOT_CHANNEL]: (state, { channel: { id } }) => [...state, id],
  [RESET_ROOT_CHANNELS]: () => [],
});

export const channels = createReducer(defaultChannelState, {
  [ADD_CHANNEL]: (state, { channel }) => ({
    ...state,
    ...{ [channel.id]: channel },
  }),
});

export const breadcrumbs = createReducer(defaultBreadcrumbState, {
  [ADD_BREADCRUMB](state, { rootChannelId, channel: { id } }) {
    const activeChildren = state[rootChannelId] || [];

    if (activeChildren.includes(id)) {
      return state;
    }

    return {
      ...state,
      [rootChannelId]: [...activeChildren, id],
    };
  },
  [REMOVE_BREADCRUMB](state, { rootChannelId, channel: { id } }) {
    const activeChildren = state[rootChannelId] || [];

    if (id === rootChannelId) {
      const { [id]: omit, ...rest } = state;
      return rest;
    }

    return {
      ...state,
      [rootChannelId]: activeChildren.filter((activeId) => activeId !== id),
    };
  },
  [TOGGLE_BREADCRUMB](state, { rootChannelId, channel: { id } }) {
    console.log(state, rootChannelId, id);
    if (state.hasOwnProperty(id)) {
      return breadcrumbs(state, removeBreadcrumb(rootChannelId, { id }));
    }
    return breadcrumbs(state, addBreadcrumb(rootChannelId, { id }));
  },
});

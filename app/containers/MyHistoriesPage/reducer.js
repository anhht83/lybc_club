/*
 *
 * MyHistoriesPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_HISTORIES_ACTION,
  LOAD_HISTORIES_ERROR_ACTION,
  LOAD_HISTORIES_SUCCESS_ACTION,
  QUERY_HISTORIES_ACTION,
} from './constants';
import { filterHistories } from './helper';

export const initialState = {
  loading: false,
  error: false,
  origin_histories: false,
  histories: false,
  query: {
    name: '',
    startDateInvoice: null,
    endDateInvoice: null,
    limit: 5,
    showRecords: 0,
    hasRecords: false,
  },
};
/* eslint-disable default-case, no-param-reassign */
const myHistoriesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    let filterResult;
    switch (action.type) {
      case QUERY_HISTORIES_ACTION:
        filterResult = filterHistories(state.origin_histories, {
          ...state.query,
          ...action.query,
        });
        draft.histories = filterResult.histories;
        draft.query = filterResult.query;
        break;
      case LOAD_HISTORIES_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.histories = false;
        draft.origin_histories = false;
        draft.query = initialState.query;
        break;
      case LOAD_HISTORIES_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.histories = action.response;
        draft.origin_histories = action.response;
        filterResult = filterHistories(action.response, {
          ...state.query,
          showRecords:
            initialState.query.showRecords + initialState.query.limit,
        });
        draft.histories = filterResult.histories;
        draft.query = filterResult.query;
        break;
      case LOAD_HISTORIES_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        draft.histories = false;
        draft.origin_histories = false;
        break;
    }
  });

export default myHistoriesPageReducer;

export const SET_DATA = 'SET_TITLE';
export const SET_LOADING = 'SET_LOADING';

export interface FetchTitle {
  type: string;
  titleId: string;
  title: object;
  cast: object;
  videos: object;
  loading: boolean;
}

interface FetchTitleAction {
  type: typeof SET_DATA;
  title: object;
  cast: object;
  videos: object;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  loading: boolean;
}

export type titleActionTypes = FetchTitleAction | SetLoadingAction;
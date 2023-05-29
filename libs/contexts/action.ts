import { fetchAPI } from "@/libs/util/fetcher";
import { useAppContext } from "@/libs/contexts/store";
import { useMutation } from "react-query";
import {
  baseURL,
  listingItem,
  searchItem,
  detailItem,
} from "../constant/apiURL";

interface PropsMutations {
  type: string;
  method: string;
  payload: object | any;
}
export enum TypesActions {
  all = "movies/all",
  detail = "movies/detail",
  search = "movies/search",
}
interface MoviesState {
  all: unknown[];
  totalResults: object;
  detail: object;
  search: unknown[];
}

const getAPIFetch = async ({
  payload,
  type,
  method = "GET",
}: PropsMutations) => {
  let url = baseURL;
  if (type === TypesActions.all) url = listingItem;
  if (type === TypesActions.detail) url = detailItem(payload.id);
  if (type === TypesActions.search) url = searchItem;

  return await fetchAPI(method, url, payload).then((e) => {
    return { payload: e.data, type };
  });
};

export const InitialState = {
  all: [],
  totalResults: {},
  detail: {},
  search: [],
} as MoviesState;

export const queryErrorHandler = (error: any) => {
  const message = error?.data?.message || "Network failed";
  console.error(message);
};
export const useDispatch = () => {
  const { globalState, setState } = useAppContext();

  const mutations = useMutation({
    mutationFn: (res: PropsMutations) => getAPIFetch(res),
    onError: queryErrorHandler,
    onSuccess: (action: any) => {
      // success response

      if (action) {
        switch (action.type) {
          case TypesActions.search:
            console.log(action.payload);
            setState({ search: action.payload.results });
            break;
          case TypesActions.all:
            setState({ all: action.payload.results });
            break;
          case TypesActions.detail:
            setState({
              detail: action.payload,
            });
            break;

          default:
            break;
        }
      }
    },
  });

  return {
    mutations,
  };
};

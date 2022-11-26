import { FechtUser } from "../utils/FetchLocalStorageData";

const userInfo = FechtUser()

export const initialState = {
    user: userInfo,
};
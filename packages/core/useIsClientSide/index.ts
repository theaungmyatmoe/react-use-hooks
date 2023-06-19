import {isClientSide} from "../helpers/isClientSide";

export const useIsClientSide = () => {
    return {
        isClientSide: isClientSide()
    }
}

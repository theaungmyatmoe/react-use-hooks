import {isClientSide} from "../helpers/isClientSide";


/**
 * @name useClientSide
 * @description Returns true if the code is running on the client side, false otherwise.
 * @returns {boolean}
 * @constructor
 * @example
 * const isClientSide = useClientSide();
 * if (isClientSide) {
 * // do something
 * }
 */
export const useClientSide = () => {
    return isClientSide();
}

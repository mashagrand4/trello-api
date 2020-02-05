import BoardSchema from "./BoardSchema";
import CardSchema from "./CardSchema";
import {BOARD_TYPE, CARD_TYPE} from '../../constants/PARAM_TYPES';

export default {
    [BOARD_TYPE]: BoardSchema,
    [CARD_TYPE]: CardSchema
};
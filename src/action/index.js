import { ADD_DATE, ADD_TEAM } from "../constants/action-types";

export const addDate = state => ({
        type: ADD_DATE,
        payload: state
})

export const addTeam = state => ({
        type: ADD_TEAM,
        payload: state
})
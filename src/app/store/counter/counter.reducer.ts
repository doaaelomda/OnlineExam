import { counterStateInitial } from "./counter.state";
import {createReducer} from '@ngrx/store'

export const counterReducer=createReducer(counterStateInitial)
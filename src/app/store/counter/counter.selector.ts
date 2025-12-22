import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './counter.state';


export const selectFeatureCount = createFeatureSelector<counterState>("elevateCounter");

export const selectCount = createSelector(selectFeatureCount,(state)=>{
    state.count
})
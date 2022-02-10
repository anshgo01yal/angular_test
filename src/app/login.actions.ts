import { createAction, props } from '@ngrx/store';
import { Auth } from 'src/models/auth.model';
export const login = createAction('[LogIn Component] Set Login', props<Auth>());
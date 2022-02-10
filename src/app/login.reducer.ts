import { Action, createReducer, on } from '@ngrx/store';
import { Auth } from 'src/models/auth.model';
import { login } from './login.actions';
 
export const initialState = {
  mobile:'',
  loggedIn:false
};
 
const _loginReducer = createReducer(
  initialState,
  on(login, (state,{mobile,loggedIn}) => ({...state,mobile: mobile,loggedIn: loggedIn})),
);
 
export function loginReducer(state: Auth | undefined, action: Action) {
  console.log(state,action)
  return _loginReducer(state, action);
}
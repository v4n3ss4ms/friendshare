import { User } from './user';
import {Balance} from "../../balances/domain/balance";

export interface UserWithBalance extends User, Balance {}

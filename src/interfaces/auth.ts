import { User } from './user'

export interface AuthState {
    user: User | null;
    access: string | null;
    refresh: string | null;
}

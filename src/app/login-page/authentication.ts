export interface UserLogin{
  username: string;
  password: string;
  nonce: string;
}
export interface UserLoginRequest {
  hash: string;
}

export interface UserLoginResponse {
  resultCode: 'error' | 'ok';
  userDetails: string;
}
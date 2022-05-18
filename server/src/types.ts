export interface AuthenticationRequest {
  email: string,
  password: string
}

export interface AuthenticationResponse {
  status: 'OK' | 'DENIED',
  authenticationToken: string;
}

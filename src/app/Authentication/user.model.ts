export class AuthenticatedUser {
  //il token sarà solo una data in millisecondi
  constructor(public email: string, private _token: string) {}

  get token() {
    const tokenExpired = () => {
      if (new Date(this._token) < new Date()) {
        return true;
      }
      return false;
    };

    if (tokenExpired()) {
      return null;
    }
    return this._token;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Check for valid credentials
  isValid (cred): boolean {
    if (cred.username === 'demo' && cred.password === 'secret') {
      sessionStorage.setItem('loggedIn', '1');
      return true;
    }
    return false;
  }

  logOut(): void {
    sessionStorage.setItem('loggedIn', '0');
  }

  // Return if the current user is logged in or not
  isLoggedIn(): boolean {
    let item = sessionStorage.getItem('loggedIn');
    let state = Number(item);
    return state === 1;
  }

}

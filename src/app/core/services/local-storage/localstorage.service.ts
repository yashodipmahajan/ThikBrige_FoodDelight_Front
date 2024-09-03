import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  readonly TOKEN_KEY: string = 'authToken';
  readonly USER_KEY: string = 'admin-id';
  constructor() {}

  setJsonValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getJsonValue(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return '';
  }
  clearLocalStorage(): void {
    localStorage.clear();
  }
  removeToken(key: string): void {
    localStorage.removeItem(key);
  }
}

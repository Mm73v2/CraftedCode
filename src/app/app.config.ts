import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { routes } from './app.routes';

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7uP1YJ3G_ZglYl-hDUf-ykG15DqHb5a0',

  authDomain: 'portofolio-a25a3.firebaseapp.com',

  databaseURL: 'https://portofolio-a25a3-default-rtdb.firebaseio.com',

  projectId: 'portofolio-a25a3',

  storageBucket: 'portofolio-a25a3.appspot.com',

  messagingSenderId: '260969246400',

  appId: '1:260969246400:web:ec971e5f73c1c68a930725',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Initialize Firebase App
    provideDatabase(() => getDatabase()), // Provide Realtime Database
  ],
};

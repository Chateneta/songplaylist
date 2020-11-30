/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
      caches.open('songplaylist').then(function(cache) {
        return cache.addAll([
          'songplaylist/src/assets/image/hells.jpg',
          'songplaylist/src/assets/image/rock.jpg',
          'songplaylist/src/assets/image/shot.jpg',
          'songplaylist/src/assets/mp3/AC_DC - Hells Bells.mp3',
          'songplaylist/src/assets/mp3/AC_DC - Let There Be Rock.mp3',
          'songplaylist/src/assets/mp3/AC_DC - Shot In The Dark.mp3',
        ]);
      })
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    },
  })
}

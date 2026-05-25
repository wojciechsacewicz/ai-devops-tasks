# Zadanie 15

## Pliki

- `config.js` - oryginalna wersja funkcji
- `config-refactored.js` - zrefaktoryzowana wersja funkcji

## Oryginalna funkcja

```javascript
function getEnvironmentConfig(env) {
  if (env === 'development') {
    return {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    };
  } else if (env === 'testing') {
    return {
      apiUrl: 'http://test-server:3000/api',
      debug: true,
      timeout: 5000
    };
  } else if (env === 'staging') {
    return {
      apiUrl: 'https://staging.example.com/api',
      debug: false,
      timeout: 10000
    };
  } else if (env === 'production') {
    return {
      apiUrl: 'https://api.example.com',
      debug: false,
      timeout: 15000
    };
  } else {
    return {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    };
  }
}
```

## Zrefaktoryzowana funkcja

```javascript
const defaultConfig = {
  apiUrl: 'http://localhost:3000/api',
  debug: true,
  timeout: 5000
};

const environmentConfigs = {
  development: defaultConfig,
  testing: {
    apiUrl: 'http://test-server:3000/api',
    debug: true,
    timeout: 5000
  },
  staging: {
    apiUrl: 'https://staging.example.com/api',
    debug: false,
    timeout: 10000
  },
  production: {
    apiUrl: 'https://api.example.com',
    debug: false,
    timeout: 15000
  }
};

function getEnvironmentConfig(env) {
  return environmentConfigs[env] || defaultConfig;
}
```

## Opis zmian

W oryginalnej wersji funkcja używała wielu instrukcji `if/else if`. Każdy wariant środowiska był osobnym warunkiem, a domyślna konfiguracja była powtórzona w dwóch miejscach.

W zrefaktoryzowanej wersji konfiguracje zostały przeniesione do obiektu `environmentConfigs`. Nazwa środowiska jest kluczem w obiekcie, a wartością jest odpowiednia konfiguracja.

Dodatkowo wydzielono `defaultConfig`, czyli konfigurację domyślną. Dzięki temu nie trzeba powtarzać tych samych wartości dla środowiska `development` i dla nieznanego środowiska.

## Korzyści z refaktoryzacji

- kod jest krótszy i czytelniejszy,
- łatwiej dodać nowe środowisko, bo wystarczy dopisać nowy wpis w obiekcie `environmentConfigs`,
- zmniejszono powtarzanie kodu,
- domyślna konfiguracja jest zdefiniowana tylko raz,
- funkcja `getEnvironmentConfig` ma teraz jedną prostą odpowiedzialność: zwraca konfigurację na podstawie nazwy środowiska.

# Zadanie 17

## Plik

- `task-filter.js` - funkcja filtrująca, sortująca i zwracająca tytuły ukończonych zadań

## Funkcja

```javascript
function getCompletedTaskTitles(tasks) {
  return tasks
    .filter(task => task.status === 'completed')
    .sort((a, b) => a.id - b.id)
    .map(task => task.title);
}
```

## Opis rozwiązania

Funkcja `getCompletedTaskTitles` przyjmuje tablicę obiektów reprezentujących zadania. Każde zadanie powinno mieć pola `id`, `title` oraz `status`.

Rozwiązanie składa się z trzech kroków:

- `filter` zostawia tylko zadania ze statusem `completed`,
- `sort` porządkuje ukończone zadania rosnąco według pola `id`,
- `map` tworzy nową tablicę zawierającą tylko tytuły zadań.

## Przykład użycia

```javascript
const tasks = [
  { id: 3, title: 'Wyslac raport', status: 'completed' },
  { id: 1, title: 'Przygotowac dane', status: 'completed' },
  { id: 2, title: 'Sprawdzic logi', status: 'in-progress' }
];

const completedTitles = getCompletedTaskTitles(tasks);

console.log(completedTitles);
```

Wynik:

```javascript
['Przygotowac dane', 'Wyslac raport']
```

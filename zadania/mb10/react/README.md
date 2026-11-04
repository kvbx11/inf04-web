#Galeria zdjęć
Aplikacja napisana w React z funkcjonalnością przegladania, filtrowania, usuwania i dodawania nowych zdjęć. Zdjęcia są kategoryzowane. Można je sortować bezpośrednio na stronie. Każde zdjęcie posiada swoją stronę szczegółów

#Funkcjonalności
- przegladanie galerii z filtrowanymi zdjęciami
- dodawanie nowych zdjęć i usuwanie istniejących
- obsługa stanu ładowania i błędu przy pobieraniu danych
- obsługa stron 404
- strona szczegółów dla każdego zdjęcia

#Uruchomienie
```bash
npm install
npm run dev
```
Aplikacja działa pod `http://localhost:5173`

##Struktura projektu
- `src/components/` - komponenty wielokrotnego użytku (karty, pasek kategorii, stopka, zdjęcie dnia )
- `src/pages/` - strony podpiete pod routing aplikacji (`GaleriaPage`, `DodajPage`, `NotFoundPage`, `ZdjeciePage`)
- `src/services/` - warstwa komunikacji z danymi (`zdjecia.js`)
- `src/hooks/` - pobieranie danych z pliku

## Technologie
- React
- Bootstrap
- Vite
- React Router


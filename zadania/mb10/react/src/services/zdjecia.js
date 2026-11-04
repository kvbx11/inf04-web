/**
 * Tablica przechowująca listę zdjęć w pamięci podręcznej (cache).
 * @type {Array<Object>|null}
 */
let zdjecia = null

/**
 * Pobiera pełną listę zdjęć. Jeśli lista jest już w pamięci podręcznej, 
 * zwraca ją bez ponownego pobierania z serwera.
 * 
 * @async
 * @function pobierzZdjecia
 * @returns {Promise<Array<Object>>} Tablica obiektów reprezentujących zdjęcia.
 * @throws {Error} Wyrzuca błąd, gdy odpowiedź serwera nie jest poprawna.
 */
export async function pobierzZdjecia() {
  if (zdjecia) return zdjecia
  const odpowiedz = await fetch('/photos.json')
  if (!odpowiedz.ok) throw new Error('Błąd serwera: ' + odpowiedz.status)
  zdjecia = await odpowiedz.json()
  return zdjecia
}

/**
 * Wyszukuje i zwraca pojedyncze zdjęcie na podstawie jego identyfikatora.
 * 
 * @async
 * @function pobierzZdjecie
 * @param {number|string} id - Unikalny identyfikator zdjęcia.
 * @returns {Promise<Object|null>} Obiekt zdjęcia lub `null`, jeśli nie zostanie znaleziono.
 */
export async function pobierzZdjecie(id) {
  const lista = await pobierzZdjecia()
  return lista.find(z => z.id === Number(id)) ?? null
}

/**
 * Usuwa zdjęcie z lokalnej listy na podstawie podanego identyfikatora.
 * 
 * @function usunZdjecie
 * @param {number} id - Identyfikator zdjęcia do usunięcia.
 * @returns {Array<Object>} Zaktualizowana tablica zdjęć po usunięciu elementu.
 */
export function usunZdjecie(id) {
  zdjecia = zdjecia.filter(z => z.id !== id)
  return zdjecia
}

/**
 * Przełącza status ulubionego (pole `favorite`) dla wybranego zdjęcia.
 * 
 * @function przelaczUlubione
 * @param {number} id - Identyfikator zdjęcia, którego status ma zostać zmieniony.
 * @returns {Array<Object>} Zaktualizowana tablica zdjęć.
 */
export function przelaczUlubione(id) {
  zdjecia = zdjecia.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
  return zdjecia
}

/**
 * Dodaje nowe zdjęcie do lokalnej listy, automatycznie nadając mu nowe ID oraz ustawiając pole `favorite` na `false`.
 * 
 * @function dodajZdjecie
 * @param {Object} nowe - Obiekt reprezentujący nowe zdjęcie (bez ID i pola favorite).
 * @returns {Array<Object>} Zaktualizowana tablica zdjęć zawierająca nowy element.
 */
export function dodajZdjecie(nowe) {
  const noweId = Math.max(...zdjecia.map(z => z.id)) + 1
  zdjecia = [...zdjecia, { ...nowe, id: noweId, favorite: false }]
  return zdjecia
}
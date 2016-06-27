"# TIN" 

zadanie3 - 
używając narzędzia less, zdefiniuj styl, który w kontekście pliku szkola.html daje efekt podobny do zobrazowanego poniżej. Oczywiście sam plik HTML musi pozostać nienaruszony. Jako rozwiązanie należy oddać tylko plik style.less. Kodu html nie należy zmieniać. Sparametryzuj tworzony styl pod względem kolorystycznym, dbając o to, żeby poszczególne elementy były w tej samej tonacji kolorystycznej (wskazówka: użyj funkcji lighten, darken, itp.). Sparametryzuj też wykorzystanie wielkości i kroju pisma, a także wzajemne proporcje poszczególnych elementów układu strony. Opcja menu, znajdująca się w danej chwili pod kursorem myszy, zmienia swoje tło na złote. Oprócz funkcji, koniecznie użyj zmiennych, mixinów, zagnieżdżenia selektorów, pseudoselektora &. Zaprojektuj zmianę układy strony dla urządzeń mobilnych. Wykorzystaj zapytania o media (media query) oraz zagnieżdżenie w selectorach less.


javascript (chapter 05) - 
funkcja sum, która oblicza sumę swoich argumentów
funkcja switchClassName, która dodaje na koniec listy nową klasę, jeżeli jej tam wcześniej nie było i usuwa z listy tę klasę w przeciwnym przypadku,  funkcja nie powinna zmieniać kolejności klas na liście, ani dodawać zbędnych spacji
funkcja createBuffer(), która tworzy obiekt - bufor danych tekstowych, bufor powinien kumulować łańcuchy oraz wyświetlać skumulowany tekst (bez spacji) 
uzupełnij obiekt String w metodę erLik(text), która porównuje bieżący obiekt z argumentem text, korzystając z zasad języka norweskiego
napisz funkcję cached(cache, fun), która tworzy cache'owaną wersję rekurencyjnej funkcji fun, pierwszym argumentem funkcji jest tablica cache, zawierająca kilka początkowych wartości funkcji, drugim argumentem jest definicja funkcji rekurencyjnej fun, przy obliczeniu funkcja cache'owana powinna pobrać wartość z cache'a, jeżeli w cahce'u danej wartości brak, to wówczas trzeba skorzystać z definicji funkcji fun, oraz zapamiętać obliczoną wartość w cache'u

zurek - 
Dodaj do bazy danych kilka nowych gatunków i ustaw sortowanie na liście gatunków w aplikacji.
Uzupełnij kod, aby dane z formularza zostały dodane do bazy (bez zapisywania na dysk). Znajdź samodzielnie w internecie dokumentację modułu taffy.
Uzupełnij formularz w  dwa pola: login i hasło. Niech dane do bazy danych będą wpisywane tylko wówczas, gdy użytkownik poda prawidłowe login i hasło (admin, nimda).
Zamień sposób wyświetlenia książek na tabelę. 
Zrób, aby przy zakończeniu pracy systemu (CTRL+C na serwerze) dane z bazy zostały zapisane do pliku

ajax-jquery -
Zamień sposób wyświetlania książek na tabelę.
Uzupełnij kod, aby dane z formularza zostały dodane do bazy (bez zapisywania na dysk). Wykorzystaj metodę jQuery.post(). Jak znajdziesz bieżący gatunek?
Wyświetl po dodaniu nowej książki komunikat „Pomyślnie dodano nową książkę” (albo coś w tym stylu). Niech po kilka sekundach ten komunikat zniknie. Możesz (ale nie musisz) skorzystać z funkcji jQuery.fadeOut().
Uzupełnij funkcjonalność w logowanie się. Zaprogramuj tak, aby po próbie wysłania nowej książki na serwer przez użytkownika niezalogowanego pojawił się ładny formularz logowania (Login: admin, hasło: nimda). Dla użytkowników zalogowanych dodawanie książki powinno być dozwolone bez wprowadzenia loginu. Dodaj opcję wylogowania się.

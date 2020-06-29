# Dane
## User
- id - Liczba całkowita będąca unikalną w obrębie całej tabeli użytkowników. Określa i identyfikuje użytkownika. Musi być większa od zera.
- username - Nazwa użytkownika. Jest jednocześnie jego loginem dlatego też musi być unikalna w obrębie całej bazy danych.
- passhash - Hash hasła użytkownika używany do autoryzacji użytkownika w systemie.
- discordName - Nazwa użytkownika w systemie discord. 
- description - Opis ustawiony przez użytkownika. Jest publicznym opisem danego użytkownika w systemie
## Plays 
- userID - id uzytkownika
- gameID - id gry
- confirmed - Gra w bibliotece gracza musi być zaakceptowana przez niego. Jeżeli nie jest zaakceptowana to opinie dotyczące tej gry zostaną ukryte.
Ta para musi być unikalna
## Game
- id - Liczba jednoznacznie opisująca daną gre. Musi być unikalna w obrębie całej tablei gier.
- name - Nazwa gry
- img - Url do zdjęcia danej gry
- genre - Typ gry jako opis który powinien być w jakiś sposób usystematyzowany jednak na ten moment nie mam pomysłu jak to zrobić
- description - Krótki opis gry i jej głównych mechanik / fabuły 
## Opinion
- id - Liczba całkowita jednoznacznie opisująca daną opinię w tabeli opini.
- from - ID użytkownika który daną opinie wystawił
- about - ID użytkownika którego dana opinia dotyczy
- gameID - ID gry której dana opinia dotyczy
- value - Wartość opini 1/10
- description - Opis słowny opini
- visible - Opinia może być widoczna lub nie zależnie od tego czy gracz ma daną grę w swojej bibliotece 
# Rzeczy na które należy zwrócić uwagę
## Opinie
- Jeżeli dodana zostanie opinia dotycząca uzytkownika i gry ale dany użytkownik nie posiada jeszcze tej gry w swoich grach to ta gra zostaje automatycznie dodana.
- Użytkownik musi zatwierdzić że gra w tą grę, jeżeli zaprzeczy że gra w tą grę to opinie dotyczące tej gry zostaną ukryte.
- Jeżeli użytkownik posiada już pewną grę to wszystkie opinie dotyczące danej gry zostają automatycznie zatwierdzone
- Usunięcie gry z biblioteki również również ukrywa wszystkie opinie dotyczące użytkownika i danej gry

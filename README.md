# auth-rep-t4
repetition login med bcryptjs och jwt

All kod som behövs för att logga in en användare och hålla honom inloggad finns i katalog "login-module"
I rot finns en index som också är viktig men gjord så generell som möjligt.
Det finns även en hash.js som använder för att generera hashade lösenord. Lösenordet är allts synlig så att ni kan testa applikationen.

public är en byggd exempel-app gjord i svelte med en fetch för att testa route som är skyddad med auth-funktionen.

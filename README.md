# Javelin mängijatehaldus


## Eesmärk

Luua tarkvara, mis võimaldaks Javenilil, kes loovad mänge, oma mängijaid hallata. Haldamise alla läheb 
1) Mängijate nägemine, igale mängijale vastava statistika ja muude omaduste nägemine (viimane sisselogimine, kasutaja id, kasutajanimi, kas mängija on bannitud, kui kauaks ja mis põhjustel)
2) Mängijate leidmine otsingusüsteemi kasutades (id või kasutajanime järgi)
3) Mängijate bannimine

projekt on loodud Tallinna Ülikooli suvepraktika raames.

Projekti panustasid:
Tim Jaanson, Jaroslava Koger, Maritana Sampu, Edgar Johannes Trumm

Projekti toimimiseks on ka vajalik back-end: https://github.com/J71m/practice_back-end

Selle repo alla laadimisel on vaja projekti spetsiifilised packagid installida kasutades "npm install", lisaks on vaja paigaldada angulari cli, mida saab paigaldada "npm install -g @angular/cli" käsuga. 
angular/src/app/user.service.ts failis on vaja vahetada domeen õige peale, kui ei jooksuta samas masinas back-endi.
Tehes projekti kaustas käskluse "ng serve" saab kõige kiiremini püsti front-endi, mis hakkab jooksma localhost:4200 aadressil

## Screenshot
![login](https://raw.githubusercontent.com/J71m/practice_front-end/master/login.JPG)
![table1](https://raw.githubusercontent.com/J71m/practice_front-end/master/table1.JPG)
![player_details](https://raw.githubusercontent.com/J71m/practice_front-end/master/player_detail.JPG)
![banned_table](https://raw.githubusercontent.com/J71m/practice_front-end/master/banned_table.JPG)

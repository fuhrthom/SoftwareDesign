let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
let woerterBuch: string[][] = [subjects, verbs, objects];

// string array als ausagbe für body
let ausgabe: string[] = []
for (let i: number = 0; i < 5; i++) {
    ausgabe.push(getVers())
    document.body.innerHTML += "<p>" + ausgabe[i]+ "</p>";
}

// einzelnen vers für ein gedicht
function getVers(): string {
    let zeile: string = "";
    woerterBuch.forEach(function (item: string[]) {
        zeile += getString(item);
    });
    return zeile;
}

// wort aus string array nehmen und anschließend entfernen
function getString(stringArray: string[]): string {
    return stringArray.splice(Math.floor(Math.random() * Math.floor(stringArray.length)), 1)[0] + " ";
}

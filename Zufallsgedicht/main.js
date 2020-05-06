var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
var woerterBuch = [subjects, verbs, objects];
// string array als ausagbe für body
var ausgabe = [];
for (var i = 0; i < 5; i++) {
    ausgabe.push(getVers());
    document.body.innerHTML += "<p>" + ausgabe[i] + "</p>";
}
// einzelnen vers für ein gedicht
function getVers() {
    var zeile = "";
    woerterBuch.forEach(function (item) {
        zeile += getString(item);
    });
    return zeile;
}
// wort aus string array nehmen und anschließend entfernen
function getString(stringArray) {
    return stringArray.splice(Math.floor(Math.random() * Math.floor(stringArray.length)), 1)[0] + " ";
}

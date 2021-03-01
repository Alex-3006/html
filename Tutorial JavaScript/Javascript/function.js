//Toutorial: https://www.youtube.com/watch?v=UeZi8a99iS0&list=PLNmsVeXQZj7qOfMI2ZNk-LXUAiXKrwDIi&index=1
////Wichtige Befehle!!!!!
//document.getElementById("head").innerHTML = "Hello World in JS";       //verändert diese id                  immer Semikolone benutzen
//document.write("Ein Output in JS");                                    //Schribt einen neuen <P>
//window.alert("Alarm!");                                                //Das löst einen Alarm aus!!!
 
////VARIABLEN!!!!!   
//var Hans = 42;                                                         //var hans wird deklariert
//var Tim = 50;                                                          //var tim wird deklariert
//var Rudolph = "Ich heiße Rudolph";                                     //Erkennt automatisch dass string      Immer mit Gänsefüschen
//var Hallo = Hi, Hey = 3, Hi = 2;                                       //man kann mehrere variablen auf einmal deklarieren     immer mit komma getrennt    gehen auch verschiedene Arten gleichzeitig
//document.write("Hans");                                                //Schribt Hans
//document.write(Hans);                                                  //Schreibt die var. hans also 42
//document.write(Hans + 58);                                             //rechnet automatisch
//document.write(Hans + s);                                                funkiniert nicht
//document.write(Hans + Tim);                                            //addiert beide automatisch
//Hans = Hans + 5;                                                       // Hans verändert        Kein var mehr
//document.write(Hans);                                                  //geänderter Hans wird angezeigt
//document.write(Peter);                                                 //Zeigt dir nix da nicht vorhanden
//document.write(Rudolph + "Junge");                                     //Variablen werden addiert
       
////OPERATOREN!!!!!
//document.write(Hans + Tim);                                            //addiert beide var.
//document.write(Hans - Tim);                                            //subtrahiert beide var.
//document.write(Hans * Tim);                                            //multipliziert beide var.
//document.write(Hans / Tim);                                            //dividirt beide var.
//document.write(Hans % Tim);                                            //dividirt beide var. gibt nur rest raus
//Hans++                                                                 //addiert eins zur var.     geht auch mit --
//Hans += 5                                                              //addiert die zahl nach dem = zur var.       geht mit allen operatoren 
//document.write(Rudolph + Hans);                                        //man kann auch einen string mit einer var addiren        aber nicht subtrahieren#
//document.write((Hans + Tim) - 5);                                      //man kann normal wie in mathe rechnen
//
//// STRINGS!!!!!
//var Peter = "Hallo";
//document.write(Peter.length);                                          //fragt nach der länge der variable
//var Max = "Ich\"H\"ALLO" ;                                             //\ macht sachen nach dem zeichen normal
//document.write(Max);
//var Lars = "Du\nbist";                                                 //\n für neue zeile geht nur bei alert
//var Lass = "Du\tbist";                                                 //\n für tab platz lassen geht nur bei alert
//window.alert(Lars);   
//window.alert(Lass);
//document.write(Peter.search("a"));                                     //Sucht das t in Peter
//document.write(Peter.toLowerCase());                                   //macht den anfangsbuchstaben groß/kleins
//document.write(Peter.split(""));                                       // splittet nach jedem buchstaben
//document.write(Peter.split("a"));                                      // splittet dort wo du willst wirft aber den angegebenen buchstaben raus#

//// Boolean!!!!!
//var bool = true;                                                       // bool ist var oder falsch
//var bool2 = Boolean(42 = 1337);                                        // kannst mit einem keinen vergleich machen
//var bool2 = Boolean(42 == 1337);                                       // entscheidet den wahr falsch geht mit allen operatoren       geht auch ohne boolean
//var bool3 = Boolean(42 === 1337);                                      //Prüft auch den Typen wenn int mit int dann funkioniert sonst z.b. bei int mit str direkt falsch 
//document.write(bool2)
//var bool3 = Boolean(42 == 42) ? 42: 1337;                              //wenn 42 ist 42 schreibe 42 sonst 1337
//document.write(bool3);

////If-Schleifen
//if (42 === 1337) {                                                      //Normale ifanweisung wie in Python nur mit {} und mit ;    besser mit ===
//    document.write("Hallo");
//    if(42 < 43) {
//        document.write("Yey");                                          //gehen auch untereanweisungen
//    }
//} else if (42 > 1337) {
//    document.write("Hey");                                              //wie elif in Python
//} 
//else{
//    document.write("Nein");                                             // else wie in Python nur mit {} und mit ;
//}

//if (10 === 10 || 10 > 5) {                                              //oder gatter
//    document.write("Hi");
//} else if (10 === 10 && 10 > 5) {
//    document.write("Hallo");
//} 

//Switch-Case!!!!!
//switch(new Date().getDay()) {                                            //Switch wie in C++ Switch(suchen/condition){}
//    case 0:                                                              //welcher fall es ist
//        document.write("It´s Sunday")                                    //Anweisung
//        break;                                                           //muss hingeschrieben werden sonst wird nächster fall auch angezeigt
//    case 1:
//        document.write("It´s Mo")
//        break;
//    case 2:
//        document.write("It´s Di")
//        break;
//    case 3:
//        document.write("It´s Mi")
//        break;
//    case 4:
//        document.write("It´s Do")
//        break;
//    case 5:
//        document.write("It´s Fr")
//        break;
//    case 6:
//        document.write("It´s Sa")
//        break;
//    default:                                                               //wie else in if-Schleifen    braucht auch kein break 
//        document.write("I don´t know")             
//}          
    
//Arrays!!!!!            
//var users = ["Hallo", "Hi", "Hey"];                                        //Gruppe von Variablen
//document.write(users[0]);                                                  //Fragt noch was in der stelle im Array steht        wenn nichts am Platz ist Kommt undifined
//document.write(users.length);                                              //Fragt nach der länge von users
//users.push("Bye");                                                         // Fügt variable hinzu
//users[10] = "Goodbye";                                                     // Fügt an stelle 10 Goodbye hinzu die anderen zwischendrinnen wo noch nichts steht sind undefined
//users.pop();                                                               //löscht das letzte element ohne es wiederrufen zu können
//document.write(users);                                                     // gibt users mit komma getrennt aus
//document.write(users.join("; "))                                           //zeigt wie er users ausgeben soll
//users.unshift("Heyhey");                                                   //macht vorne etwas hinzufügen
//users.shift();                                                             //macht vorne etwas entfernen
//users.sort();                                                              //array wirt alphabetisch oder numerisch sotiert
//users.reverse();                                                           //sotiert umgekehrt den array

//For-Schleifen!!!!!
//var users = ["Darth Maul", "Darth Vader", "Darth Sidious"];
//users.unshift("Darth Revan");
//for (i = 0; i < users.length; i++) {                                       // setzt das erste element welches er sehen soll auf das nullste(Erste)  sagt wie lange die forschleife dauern soll   soll das immer nach jedem schritt machen bis schleife endet
//    document.write(users[i])                                               //soll das in jedem schritt machen  
//}

//
//for (i = users.length - 1; i >= 0; i--) {                                  //macht die schleife von hinten anfangen
//    document.write(users[i])                                   
//}

//For-In-Schleife
//var users = ["Darth Revan", "Darth Maul", "Darth Vader", "Darth Sidious"];
//for (i in users) {                                                         //wie die erste for-schleife nur kürzer
//    document.write(users[i]);
//}

//while-Schleife
//var i = 0
//while(i < 10){                                                             //macht so lange die anweisung ausführen bis bedingung nicht mehr erfüllt wird
//    document.write(i);
//    i++
//}

//do{                                                                        //macht das erste mal ausführen und prüfrt dann erst die bedingund
//    document.write(i);
//    i++
//}while(i < 10);

//break continue!!!!!
//var users = ["Darth Revan", "Darth Maul", "Darth Vader", "Darth Sidious"];
//var i = 0;
//for (i in users) {                 
//    if (i == 2){                                                           //brake bricht die for-schleife nach dem element auf der Zweiten position ab
//        break;
//        //continue;                                                        //macht die schleife den nächsten schritt überspringen lassen
//    }                                
//    document.write(users[i]);                                              //wird die if schleife danach geschrieben wird das dritte element noch ausgegeben hier bringt continue nichts
//}

//Mathematische funktionen!!!!!
//document.write(Math.random());                                             //liefert zufällige zahl 0 bis 1
//document.write(Math.random()*100);                                         //liefert zufällige zahl 1 bis 100
//document.write(Math.random()*100+100);                                     //liefert zufällige zahl zwischen 100 und 200
//document.write(Math.round(Math.random()*100));                             //rundet die zahl
//var x = Math.round(Math.random()*100);
//var y = Math.round(Math.random()*100);
//document.write(Math.max(x, y));                                            //schribt die grösere zahl
//document.write(Math.ceil(x));                                              //rundet x auf
//document.write(Math.floor(x));                                             //rundet x ab
//document.write(Math.PI);                                                   //zeigt pi
//document.write(Math.pow(x, y));                                            //potenziert 1ste hoch 2te
//document.write(x**y);                                                      //potenziert funkioniert aber nicht überall

//Funkionen!!!!!
//function meineFunktion(a, b){                                              //name von funktion und variablen deklarieren
//    document.write(a*b);                                                   //Anweisung von funtion
//    return a*b                                                             //wird ausgeführt aber nicht gespeichert
//}
//meineFunktion(42, 1337);                                                   //Führt funktion aus variablenwerte angeben
//function test(x){
//    document.write(x*10);
//    document.write("Yay es funkioniert");
//    var z = 2                                                              // locale variable nur für diese funktion
//    z = 2                                                                  //globale varible ohne var geschrieben
//}
//var c = 3                                                                  //globale variable für überall
//var x = "Mein ergebnis = " + meineFunktion(42, 1337);                      //speichert jetzt return
//document.write(x);                                                         //gibt return an
//function fakul(n){
//    console.log(n)
//    if(n <= 2){
//        return n;
//    }
//    return n*fakul(n-1);                                                   //rekursivität
//}
//function calcu(){
//    var res = fakul(6)
//    window.alert(res)
//}
//var y = "Mein Ergebnis ist = " + fakul(6);
//document.write(y);
//test(10);

//DOM!!!!! 
//document.getElementById("head").onclick = "Dynamisch";                      //getElementById lässt dich auf alles mit einer id zugreifen
//document.body.style.background = "blue"                                     //ändert den hintergrund
//var h = document.getElementById("head");
//h.innerHTML = "Dynamisch2";                                                 //kannst damit das Element ändern
//var l = document.getElementsByTagName("p");
//window.alert(l[0].innerHTML);                                               //wird damit das element von diesem element ausgegeben, dass du brauchst
//var n = document.getElementById("div1");
//var m = n.getElementsByTagName("p");
//window.alert(m[1].innerHTML);                                                 // kannst mit hilfe des divs ein element ausgeben
//document.body                                                               //lässt dich auf den body zugreifen
//document.anchors                                                            //lässt dich auf alle lnks zugreifen
//document.documentElement                                                    //lässt dich auf alles was unter dem Tag <HTML></HTML>  zugreifen
//document.forms                                                              //lässt dich auf alle formulare zugreifen
//document.head                                                               //lässt dich auf den head zugreifen
//document.title                                                              //lässt dich auf den titel zugreifen
//document.images                                                             //lässt dich auf alle bilder zugreifen
//document.getElementById("head").id = "header";
//document.getElementById("header").innerHTML = "LOL";
//document.getElementsByTagName("p").style.color = "pink";                    //mit style kann man alle style sahen hinzufügenoder verändern
//function meinEvent(element) {
//    element.innerHTML = "Megageil!";                                        // ändert den Namen zu Megageil
//    document.getElementById("Rest").addEventListener("mouseover", meins);   // meins wird nur ausgeführt, wnn megageil aktieviert ist
//}
//function meins() {                                                          //macht die Funktion meins erzeugen
//    var f = document.getElementById("div1");                                //macht div1 zu einer variablen
//    var add = 0;                                                            //erstellt die Vriable add
//    var id = setInterval(function () {                                      //erstellt die variable id
//        if (add >= 500) {                                                   //macht die bedingung erstellen, dass add kleiner gleich 500 px vom rand sein soll
//            clearInterval(id);                                              //löscht id damit ess nicht nocheinmal ausgeführt werden kann
//        }
//        else  {
//            f.style.marginLeft = add + 'px';                                //macht links einen Pixel hinzufügen
//            f.style.marginTop = add + 'px';                                 //macht oben einen pixel hinzufügen
//            add++;                                                          //macht add eins gröser
//        }
//    }, 5)
//}
//function meinChild() {
//    var k = document.body;                                                  //k hat den zugriff auf den ganzen Body
//    var w = k.childNodes;                                                   //erfährt alle childs von body
//    window.alert(w[0]);                                                     // soll das erste child ausgeben
//}
//function meinParent() {
//    var k = document.getElementById("para");                                //hat den zugriff auf para
//    window.alert(k.parentNode);                                             //soll den parent von para ausgeben
//}
//
//function meineFunction() {
//    var x = document.getElementById("div1");
//    var para = document.createElement("p");                                 //soll in div1 ein element p erstellen 
//    para.innerHTML = "dynamisch praktisch gut.";                            //soll denn inhalt ... haben
//    x.appendChild(para);                                                    //soll als kind von para sein
//}

//BOM!!!!!
//function meineFkt() {
//    window.alert(window.screen.availHeight);                                //erfährt die verfügbare höhe von der website 
//    window.alert(window.location.href);                                     //zeigt dir die URL von der website, die du grade offen hast
//    //window.location.href = https/goggle.com                               //öffnet dir diese website
//    window.alert(window.location.hostname);                                 //gibt dir den namen vom host
//    window.alert(window.location.protocol);                                 //zeigt dir deinen verlauf
//    window.history.forward();//back()                                       //geht zur nächsten/vorherigen website
//    var input = window.prompt("Bib hier was ein", "default");               //erstellt dir einen kasten wo du was eingeben kannst
//    if (input == "passwort"){
//        window.location.href = "https://goggle.com";                        //wenn du das richtige Passwort eingegeben hast kommst du auf google
//    }
//}
//function cookieschreiben() {
//    window.alert(navigator.cookieEnabled);                                  //fragt ob die coocies ausgeschaltet sind
//    document.cookie = "isread=true; expires = Sun, 29 Mar 2020 12.00.00 UTC; path=/"; //löscht diese frage um dieses datum wieder
//}
//function cookielesen() {                                                    //erstellt cookies
//    var x = document.cookie;                                              
//    window.alert(x);                                                      
//}
//function cookielöschen() {                                                  //macht alle cookies löschen
//    document.cookie = "isread=true; expires = Sun, 01 Jan 1970 00.00.00 UTC; path=/";
//}

//Objektorientierung!!!!!
//function objekt() {
//    function Pinguin(name, alter, geschw) {                                 //erstellt die funktion Pinguin mit den drei variablen
//        this.name = name;                                                   //alles was bei den objekten an erster stelle steht ist für den namen
//        this.alter = alter;                                                 //alles was bei den objekten an zweiter stelle steht ist für das alter 	
//        this.schwimmgeschwindigkeit = geschw;                               //alles was bei den objekten an dritter stelle steht ist für die geschw
//        this.gottagofast = function(schneller) {                            //wenn du dise funktion aufrufst dann kannst du für die km/h anzahrl eine zahl dazuaddieren
//            this.schwimmgeschwindigkeit = this.schwimmgeschwindigkeit + schneller;
//        };
//        this.setName = function(neuerName) {                                //mit setName kannst du einen namen hinzufügen
//            this.name = neuerName;
//        }
//    }
//    var franz = new Pinguin("Franz", 40, 4);                                //macht den pinguin Franz hinzufügen
//    var franziska = new Pinguin("Franziska", 39, 5);                        //macht den pinguin Franziska hinzufügen
//    Pinguin.prototype.slowbro = function() {                                //die funktion slowbro macht die geschw immer auf 1
//        this.schwimmgeschwindigkeit = 1
//    };
//    //for(x in franz){                                                      //macht alle werte von franz ausgeben
//    //    window.alert(franz[x])
//    //}
//    franz.gottagofast(4);                                                   //macht fanz geschw + 4 ausgeben
//    window.alert(franziska.name);                                           //macht den namen von franziska ausgeben
//    franziska.slowbro();                                                    //macht für franziskas geschw slowbro
//    window.alert(franziska.schwimmgeschwindigkeit);                         //gibt franziskas geschw ausgebebn
//}

//Debugging!!!!!
//function Fehler() {
//    try{                                                                    //schribt ausprobieren
//        ausprobieren();
//    }catch(e){                                                              //wenn fehler da ist gibt einen alert aus
//        window.alert(e);
//        window.alert(e.message);
//    }
//    window.alert("");
//}
//
//function ausprobieren() {
//    throw "Nicht impementiert";                                             //wirft den fehler
//}

//Datum und Uhrzeit!!!!!
//function Datum() {
//    var x = new Date().getTime();                                           //gibt deine uhrzeit aus
//    var y = new Date(x + 7*24*60*60*1000);                                  //macht deine uhrzeit + 1.Zahl Tage *Stunden *Min *sek *millisek in millisek ausgeben
//    var z = new Date("28 Mar 2020 12.00.00");                               //macht dein datum auf ... setzen
//    var h = new Date(2020, 2, 28, 12, 0, 0, 0);                             //macht dein datum auf ... setzen
//    window.alert(Date());
//    window.alert(x);
//    window.alert(y);
//    window.alert(z);
//    window.alert(h);
//}

//var, let und const!!!!!
//function Hallo() {
//    let x = 42;                                                             //wird überall auserhalb von schleifen als 42 ausgegeben außer es wird verändert
//    var y = 1337;                                                           //wird bis zur nächsten änderung egal wo als 1337 ausgegeben
//    const z = 10;                                                           //ist eine unveränderbare constante
//    if(true){
//        window.alert(x)                                                     //findet kein x, da let immer in jeder schleife erneut defieniert werden muss  erkennt auch die davor defieneierten let nicht
//        let x = 5;                                                          //erhält nur für diesen Block den wert 5
//        var y = 1337;                                                       //wird für überall auf 1337 gesetzt
//        window.alert(x);
//        window.alert(y);
//    }
//    window.alert(x);
//    window.alert(y);
//};

//Yield und Generatoren!!!!!
//function* foo() {                                                           //function un dann * oder function* erzeugt einen generator
//    yield 'hello';                                                          //yield wird nur einzeln ausgegeben, aber merkt sich wo er stehen gebliben ist
//    yield 'world';
//    var e = 1;
//    var zähler = 1;
//    var zähler2 = 2;
//    while(true){                                                            //macht den zuvorigen yield +1und dann /2
//        yield e;
//        e = e + 1/zähler;
//        zähler = zähler * zähler2;
//        zähler2 = zähler2 + 1;
//    }
//}
//var gen = foo();
//window.alert(gen.next().value);                                             //gibt den wert vom yield aus
//window.alert(gen.next().value);                                             //gibt den wert vom zweiten yield aus
//while(true){
//    //window.alert(gen.next().done)                                         //zeigt an ob alle yields schon ausegeben wurden 
//    window.alert(gen.next().value)                                          //zeigt endlos den wert vom yield an
//}
//function* foo(name) {
//    if(name == "Homer") {
//        var x = yield hello;
//    }
//    yield x + 1;
//    yield* ['hello', 'world'];
//}
//
//for(let i of foo("Homer")) {
//    window.alert(i);
//}
//
//var gen = foo();
//window.alert(gen.next().value);
//window.alert(gen.next(2).value);                                            //macht den wert vom yield auf 2 setzen
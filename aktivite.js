let aktiviteCizelge = [];
for (let index = 0; index < 7; index++){
    const gun = prompt(`${index + 1}. gün adını giriniz`).toLocaleLowerCase("tr");
    if(gun === "pazartesi" || gun === "salı" ||  gun === "çarşamba" || gun === "perşembe" || gun === "cuma" || gun === "cumartesi" || gun === "pazar"){
        const aktivite = prompt(`${gun} günü için aktivitenizi giriniz`); 

    aktiviteCizelge.push({
        gun: gun,
        aktivite: aktivite
    });
    }
    else{
        alert("Geçersiz bir gün girdiniz");
        break;
    }
}
console.log(aktiviteCizelge);

let tabla = document.getElementById("utTabla")
for (const tablatest of tabla.children) {
    for (const sor of tablatest.children) {
        let elemek = sor.children;
        if (elemek[0].tagName == "TH") continue;
        for (const elem of elemek) {
            elem.firstChild.addEventListener("change", szamitas)
        }
    }
}

function szamitas() {
    let tabla = document.getElementById("utTabla")
    let ossz = 0;
    for (const tablatest of tabla.children) {
        for (const sor of tablatest.children) {
            let elemek = sor.children;
            if (elemek[0].tagName == "TH") continue;
            let alap = parseInt(elemek[1].firstChild.value);
            let illetek = parseInt(elemek[2].firstChild.value);
            let biztositas = elemek[3].firstChild.checked ? 12000 : 0;
            let fo = parseInt(elemek[4].firstChild.value);
            elemek[5].firstChild.value = (alap + illetek + biztositas) * fo;
            ossz += (alap + illetek + biztositas) * fo;
        }
    }
    document.getElementById("vegOssz").value = ossz;
}
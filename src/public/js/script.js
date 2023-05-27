let noRekening = document.getElementById("noRekening");
let copyRekening = document.getElementById("copyRekening");

copyRekening.addEventListener('click', function () {
    
    navigator.clipboard.writeText(noRekening.innerHTML)
    .then(function() {
        alert('teks berhasil disalin');
    })
    .catch(function(e) {
        console.error('gagal menyalin teks: ', e);
    })
})

let noHp = document.getElementById("noHp");
let copyHp = document.getElementById("copyHp");

copyHp.addEventListener('click', function () {
    
    navigator.clipboard.writeText(noHp.innerHTML)
    .then(function() {
        alert('teks berhasil disalin');
    })
    .catch(function(e) {
        console.error('gagal menyalin teks: ', e);
    })
})
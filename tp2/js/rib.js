module.exports = function(codeBanque, codeGuichet, numCompte, cle) {
    numCompte = numCompte.toUpperCase();

    if (numCompte.length != 11 || codeGuichet == '00000' || codeBanque == '00000' || numCompte == '00000000000')
        return false;

    var sAlphabet  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var aNumero    = '12345678912345678923456789'.split('');
    var sCompteTmp = new String(numCompte);

    while (sCompteTmp.match(/\D/) != null) {
        sCompteTmp = sCompteTmp.replace(/\D/, aNumero[sAlphabet.indexOf(sCompteTmp.match(/\D/))]);
    }

    sCompteTmp = codeBanque + codeGuichet + sCompteTmp + cle;

    while (sCompteTmp.length > 9) {

        var iCompteTmp = new Number(sCompteTmp.substr(0,9)) % 97;
        sCompteTmp = new String(iCompteTmp) + sCompteTmp.substr(9,sCompteTmp.length);
    }

    var iCompteTmp = new Number(sCompteTmp.substr(0,9)) % 97;

    return (iCompteTmp % 97 == 0);
}

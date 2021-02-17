var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classe astratta sorte
var Sorte = /** @class */ (function () {
    function Sorte() {
    }
    return Sorte;
}());
var Dado = /** @class */ (function (_super) {
    __extends(Dado, _super);
    function Dado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //metodo ereditato dalla classe padre Sorte
    Dado.prototype.Lancio = function () {
        return CalcolaRandom(1, 6); //lancio casuale che va da 1 a 6
    };
    return Dado;
}(Sorte));
var Moneta = /** @class */ (function (_super) {
    __extends(Moneta, _super);
    function Moneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //metodo ereditato dalla classe padre Sorte
    Moneta.prototype.Lancio = function () {
        return CalcolaRandom(1, 2); //lancio casuale che va da 1 a 2
    };
    return Moneta;
}(Sorte));
//funzione che genera casualmente un numero randomico dato un valore minimo e uno massimo
function CalcolaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var counterTesta = 0; //contatore di tutte le possibili estrazioni
var counterCroce = 0;
var counterDado1 = 0;
var counterDado2 = 0;
var counterDado3 = 0;
var counterDado4 = 0;
var counterDado5 = 0;
var counterDado6 = 0;
jQuery(function () {
    jQuery("#btnExecute").on("click", function () {
        //creo una istanza della classe Dado e una della classe Moneta
        var dado = new Dado();
        var moneta = new Moneta();
        var dadoChecked = jQuery("#radioDado").prop("checked");
        var monetaChecked = jQuery("#radioMoneta").prop("checked");
        if (dadoChecked) {
            var lancio = dado.Lancio();
            switch (lancio) {
                case 1:
                    counterDado1++;
                    jQuery("#counterFace1").html(counterDado1.toString());
                    break;
                case 2:
                    counterDado2++;
                    jQuery("#counterFace2").html(counterDado2.toString());
                    break;
                case 3:
                    counterDado3++;
                    jQuery("#counterFace3").html(counterDado3.toString());
                    break;
                case 4:
                    counterDado4++;
                    jQuery("#counterFace4").html(counterDado4.toString());
                    break;
                case 5:
                    counterDado5++;
                    jQuery("#counterFace5").html(counterDado5.toString());
                    break;
                case 6:
                    counterDado6++;
                    jQuery("#counterFace6").html(counterDado6.toString());
                    break;
            }
        }
        if (monetaChecked) {
            var lancio = moneta.Lancio();
            switch (lancio) {
                case 1:
                    counterTesta++;
                    jQuery("#counterHead").html(counterTesta.toString());
                    break;
                case 2:
                    counterCroce++;
                    jQuery("#counterCross").html(counterCroce.toString());
                    break;
            }
        }
    });
});
//# sourceMappingURL=mieiscript.js.map
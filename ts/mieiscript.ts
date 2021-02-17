//classe astratta sorte
abstract class Sorte{
    //metodo astratto Lancio che dovrà generare casualmente o la faccia del dado o una faccia della moneta
    //nel caso del dado potrà ritornare un numero da 1 a 6 indicante la faccia
    //mentre nel caso della moneta ritornerà 1 per dinicare testa o 2 per indicare croce
    abstract Lancio() : number;
}

class Dado extends Sorte{
    //metodo ereditato dalla classe padre Sorte
    Lancio(): number {
        return CalcolaRandom(1 , 6); //lancio casuale che va da 1 a 6
    }
}

class Moneta extends Sorte{
    //metodo ereditato dalla classe padre Sorte
    Lancio(): number {
        return CalcolaRandom(1, 2); //lancio casuale che va da 1 a 2
    }

}

//funzione che genera casualmente un numero randomico dato un valore minimo e uno massimo
function CalcolaRandom(min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var counterTesta : number = 0; //contatore di tutte le possibili estrazioni
var counterCroce : number = 0;
var counterDado1 : number = 0;
var counterDado2 : number = 0;
var counterDado3 : number = 0;
var counterDado4 : number = 0;
var counterDado5 : number = 0;
var counterDado6 : number = 0;

jQuery(function () {
    jQuery("#btnExecute").on("click" , function() {
        //creo una istanza della classe Dado e una della classe Moneta
        var dado : Dado = new Dado();
        var moneta : Moneta = new Moneta();

        var dadoChecked : boolean = jQuery("#radioDado").prop("checked"); //controllo quale delle due opzioni è stata scleta dall'utente
        var monetaChecked : boolean= jQuery("#radioMoneta").prop("checked");

        if(dadoChecked) //e in caso lancio il dado
        {
            var lancio : number = dado.Lancio();
            switch(lancio)
            {
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

        if(monetaChecked) //o la moneta
        {
            var lancio : number = moneta.Lancio();
            switch(lancio)
            {
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
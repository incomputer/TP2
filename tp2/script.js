var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var name1 = document.getElementById('name1')
var name2 = document.getElementById('name2')
var felicitation = document.getElementById('felicitation')


class Donnee { 
  constructor(joueur1, nombre1, joueur2, nombre2) {
    this.joueur1 = joueur1;
    this.nombre1 = nombre1;
    this.joueur2 = joueur2;
    this.nombre2 = nombre2;
  }
  
  saisir() {
    this.joueur1 = prompt('Nom du player1');
    this.nombre1 = prompt('Entrer son nombre');
    name1.innerHTML = this.joueur1;
  }

  saisir2() {
    this.joueur2 = prompt('Nom du player2');
    this.nombre2 = prompt('Entrer son nombre');
    name2.innerHTML = this.joueur2;
  }
}


class Resultat extends Donnee{

		constructor(joueur1, nombre1, joueur2, nombre2){
			super(joueur1, nombre1, joueur2, nombre2);
		}


		result(){
			if(this.nombre1 > this.nombre2){
				return felicitation.innerHTML = "felicitation " + "<img src="image3.jpg">";
			}
		}
 }


const p = new Donnee();

const felicitation = new Resultat();




















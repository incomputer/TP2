section = document.getElementById('section');

class Operation{
	constructor(nbreMachine, nbreUtilisateur){
			this.nbreMachine = nbreMachine;
			this.nbreUtilisateur = nbreUtilisateur;
	}

    static production_Nombre(){
	const max = (Math.random() * 9);
	const min = (Math.floor(Math.random() * 8));
	const result = Math.floor(max*min);
	return result;
	}

	recueil_NbreUtilisateur(){
	this.nbreUtilisateur = prompt("Entrer un nombre");

		if(Operation.production_Nombre() < this.nbreUtilisateur){
			alert("Desolé le nombre " + Operation.production_Nombre() + " est inferieur à " + this.nbreUtilisateur);

		}else if(Operation.production_Nombre() > this.nbreUtilisateur){
			alert("Desolé le nombre " + Operation.production_Nombre() + " est superieur à " + this.nbreUtilisateur);

		}else if(Operation.production_Nombre() == this.nbreUtilisateur){
			alert("Félicitation le nombre " + Operation.production_Nombre() + " est égale à " + this.nbreUtilisateur);

		}else {
			for(var i = 5; i >= 5; --i){
				this.nbreUtilisateur = prompt("Entrer un nombre");
			}
				
				}
		}
	}




let p = new Operation();


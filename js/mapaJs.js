class Mapa {
	constructor(col,lin){
		this.col = col;
		this.lin = lin;
		this.pontuacao = 0;
		this.tempo = 0;
		this.matrizMapa = [];
		
		for (let i = 0;i<lin;i++){
			this.matrizMapa[i] =[];
			for(let j = 0; j<col; j++){
				this.matrizMapa[i][j] = null;
			}
		}
	}
	
	mostrar(){
		console.log(this.matrizMapa);
	}
}

mapa1 = new Mapa();

mapa1.mostrar();

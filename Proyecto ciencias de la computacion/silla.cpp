// estructuras para las sillas de un vuelo
struct silla{
	int IdVuelo;
	int IdAvion;
	int numeroSilla;
	bool estado;
	silla *sig;
};

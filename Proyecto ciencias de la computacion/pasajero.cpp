#include "string"
#include "fecha.cpp"
using namespace std;
// estructura para los pasajeros
struct Pasajero{
	string nombres;
	string apellidos;
	int numeroDeDocumento;
	Fecha fechaDeNaciemiento;
	string tipo;
	Pasajero *sig;
};

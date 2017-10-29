#include "string"
#include "fecha.cpp"
using namespace std;
// estructura para los vuelos planeados
struct VueloPlaneado{
	int codigoDelVuelo;
	string origen;
	string destino;
	string diaDeLaSemana;
	Fecha horaDeInicio;
	Fecha horaDeFinalizacion;
	int numeroDeSillas;
	VueloPlaneado *sig;
};

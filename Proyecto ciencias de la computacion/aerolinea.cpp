#include "string"
using namespace std;
// estructura para las aerolineas
struct Aerolinea{
	string Nombre;
	int avionesDisponibles;
	int itinerariosDelAnio;
	int numeroDeCuenta; 
	Aerolinea *sig;
};

#include "fecha.cpp"
#include "lista_sillas.cpp"
using namespace std;
// estructuras para los vuelos especificos
struct VuelosEspecificos{
	int numeroDeSillasDisponibles;
	Fecha fecha;
	listaSillas listaVendidas;
	listaSillas listaDisponibles;
};


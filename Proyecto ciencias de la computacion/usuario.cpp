#include "string"
using namespace std;
// estructuras para los usuarios
struct Usuario{
	string nombres;
	string apellidos;
	int numeroDeDocumento;
	string sexo;
	int edad;
	Usuario *sig;
};

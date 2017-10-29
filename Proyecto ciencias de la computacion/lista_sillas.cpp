#include "silla.cpp"
// clase externa para el uso de la estrcutura sillas
class listaSillas{
	protected: silla *cab;
	//metodos
	public:
	listaSillas();
	void agregar(silla);
	void buscar();
	void asignar();
};

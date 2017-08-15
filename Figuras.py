import math

class Figura(object):
    def calcularArea():
        pass
    def calcularPerimetro():
        pass
        
class Triangulo(Figura):
    def __init__(self):
        self.altura=0
        self.base=0
    def calcularArea(self,altura,base):
        self.altura=altura
        self.base=base
        return ((self.altura)*(self.base))/2
      
class Cuadrado(Figura):
    def __init__(self):
        self.lado=0
    def calcularArea(self,lado):
        self.lado=lado
        return ((self.lado)*(self.lado))

class Circulo(Figura):
    def __init__(self):
        self.radio=0
    def calcularArea(self,radio):
        self.radio=radio
        return ((math.pi)*(self.radio)*(self.radio))

class FiguraFabrica(object):
    def obtenerFigura(self,seleccion=0):
        if seleccion == 1:
            return Circulo()
        elif seleccion==2:
            return Cuadrado()
        elif seleccion==3:
            return Triangulo()
        else:
            return null

def main():
    fabrica = FiguraFabrica()
    print "Seleccione la figura a crear"
    print "1. Circulo"
    print "2. Cuadrado"
    print "3. Triangulo"
    selec=input()
    figura = fabrica.obtenerFigura(selec)
    if selec==1:
        radio=input("Digite el radio del circulo: ")
        print "El area del circulo es: " ,figura.calcularArea(radio)
    elif selec==2:
        lado=input("Digite la medida del lado del cuadrado: ")
        print "El area del cuadrado es: " ,figura.calcularArea(lado)
    elif selec==3:
        altura=input("Digite la altura del triangulo: ")
        base=input("Digite la base del triangulo: ")
        print "El area del triangulo es: " ,figura.calcularArea(altura,base)
if __name__ == "__main__":main()

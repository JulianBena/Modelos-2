import math

class Figura:
    def calcularArea():
        pass

class Triangulo(Figura):
    def __init__(self,altura=0,base=0):
        self.altura=altura
        self.base=base
    def calcularArea(self):
        return ((self.altura)*(self.base))/2
    
        
class Cuadrado(Figura):
    def __init__(self,lado=0):
        self.lado=lado
    def calcularArea(self):
        return ((self.lado)*(self.lado))

class Circulo(Figura):
    def __init__(self,radio=0):
        self.radio=radio
    def calcularArea(self):
        return ((math.pi)*(self.radio)*(self.radio))

class FiguraFabrica():
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
    print "Seleccione la figura a crear"
    print "1. Circulo"
    print "2. Cuadrado"
    print "3. Triangulo"
    radio=input("Digite el radio del circulo: ")
    c=Circulo(radio)
    print "El area del circulo es: " ,c.calcularArea()
    altura=input("Digite la altura del triangulo: ")
    base=input("Digite la base del triangulo: ")
    t=Triangulo(altura,base)
    print "El area del triangulo es: " ,t.calcularArea()
    lado=input("Digite la medida del lado del cuadrado: ")
    cu=Cuadrado(lado)
    print "El area del cuadrado es: " ,cu.calcularArea()
    
if __name__ == "__main__":
    main()
    







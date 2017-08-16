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
        self.lado=0
    def calcularArea(self,altura,base):
        self.altura=altura
        self.base=base
        return ((self.altura)*(self.base))/2
    def calcularPerimetro(self,lado):
        self.lado=lado
        return 3*lado
        
      
class Cuadrado(Figura):
    def __init__(self):
        self.lado=0
    def calcularArea(self,lado):
        self.lado=lado
        return ((self.lado)*(self.lado))
    def calcularPerimetro(self,lado):
        self.lado=lado
        return 4*lado

class Circulo(Figura):
    def __init__(self):
        self.radio=0
    def calcularArea(self,radio):
        self.radio=radio
        return ((math.pi)*(self.radio)*(self.radio))
    def calcularPerimetro(self,radio):
        self.radio=radio
        return 2*(math.pi)*(radio)

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
    print "Seleccione la figura a crear:"
    print "1. Circulo"
    print "2. Cuadrado"
    print "3. Triangulo"
    selec=input()
    figura = fabrica.obtenerFigura(selec)
    print "Seleccione que desea calcular:"
    print "1. Area"
    print "2. Perimetro"
    sel=input()    
    if selec==1:
        radio=input("Digite el radio del circulo: ")
        if sel==1:
            print "El area del circulo es: " ,figura.calcularArea(radio)
        elif sel==2:
            print "El perimetro del circulo es: ", figura.calcularPerimetro(radio)      
    elif selec==2:
        lado=input("Digite la medida del lado del cuadrado: ")
        if sel==1:
            print "El area del cuadrado es: " ,figura.calcularArea(lado)
        elif sel==2:
            print "El perimetro del cuadrado es: ", figura.calcularPerimetro(lado)      
    elif selec==3:
        if sel==1:
            altura=input("Digite la altura del triangulo: ")
            base=input("Digite la base del triangulo: ")
            print "El area del triangulo es: " ,figura.calcularArea(altura,base)
        elif sel==2:
            lado=input("Digite la medida del lado del cuadrado: ")
            print "El perimetro del triangulo es: ", figura.calcularPerimetro(lado)
            
if __name__ == "__main__":main()



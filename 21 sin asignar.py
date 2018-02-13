from random import sample
#-------------------------------------------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------------------------------------------
#la funcion contar recibe el valor de la suma de las cartas en mano el cual le es entregado por la funcion verificar
#luego mira si alguna de estas cartas es un as y en caso de ser posible lo hace valer 11 sumando 10 al resultado entregado por 
#la funcion verificar
def contar(lista):
    if(len(lista)<=0):
        return 0
    if(verificar(lista)>11):
        return verificar(lista)
    else:
        for i in lista:
            if i[0] == 'J' or  i[0] == 'K' or  i[0] == 'Q':
                return 10+contar(lista[1:])
            elif i[0] == 'A':
                return verificar(lista)+10
            else:
                return i[0]+contar(lista[1:])
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
#la funcion verificar entrega la suma de las cartas en mano y si hay un as lo toma en un comienzo como 1
def verificar(lista):
    if(len(lista)==0):
        return 0
    else:
        for i in lista:
            if(i[0]=='J' or i[0]=='Q' or i[0]=='K'):
                return verificar(lista[1:])+10
            if(i[0]=='A'):
                return verificar(lista[1:])+1
            else:
                return verificar(lista[1:])+i[0]
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
#sample generara parejas (x,y) dandole valores sin repetir y de forma aleatoria hasta entregar una lista del tamaño que se
#especifique al final como en este caso es 52 por las 52 cartas de un mazo 
def creadorbaraja():
    return sample([(x,y)for x in ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']for y in ['DIAMANTES','TREBOLES','PICAS','CORAZONES']], 52)
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
#juego recibe 4 parametros listaJ=lista jugador listaC=lista casa lista=creador de barajas JC=boleano(este bool se usa para saber
#si el jugador desea otra carta
def juego(listaJ, listaC, lista, JC):
    if(len(listaJ)==0 and len(listaC)==0):
        repartirIni(listaJ, listaC, lista, JC)
        return "      FIN DEL JUEGO"
    else:
        print("jugador: ",contar(listaJ))
        print(listaJ)
        print("Casa: ")
        print(listaC[0])
        print("")
        print("")
        if(JC==True and contar(listaJ)<=21):
            if(input("Desea otra carta: ")!='no'):
                print("")
                return repartirIni(listaJ,listaC,lista, JC)
    if(contar(listaC)<contar(listaJ) and contar(listaJ)<=21):
        return repartirIni(listaJ,listaC,lista, False)
    else:
        print("/----------RESULTADOS----------/")
        print("")
        print("Mano Jugador:   ",contar(listaJ))
        print(listaJ)
        print("Mano Casa:      ",contar(listaC))
        print(listaC)
        print("")
        if(contar(listaC)>21 and contar(listaJ)<=21):
            print("     GANA EL JUGADOR")
        elif((contar(listaJ)<contar(listaC) and contar(listaC)<=21) or (contar(listaJ)>21 and contar(listaC)<=21)):
            print("     GANA LA CASA")
        elif(contar(listaJ)==contar(listaC) and contar(listaJ)<=21):
            print("     ES UN EMPATE")
        print("/------------------------------/")
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
def repartirIni(listaJ, listaC, lista, JC):
    if (len(lista)==52):#reparte la mano inicial del jugador y de la casa
        return juego(listaJ+[lista[0]]+[lista[1]],listaC+[lista[2]]+[lista[3]],lista[4:],JC)
    elif(len(lista)!=52 and JC==True):#suma cartas al jugador
        return juego(listaJ+[lista[0]],listaC,lista[2:],JC)
    elif(len(lista)!=52 and JC==False):#suma cartas a la casa
        return juego(listaJ,listaC+[lista[0]],lista[2:],JC)
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
print("")
print("")
print("")
print("Empezo el juego:")
print("")
print(juego([],[],creadorbaraja(),True))

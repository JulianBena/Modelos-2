from random import sample
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
def contar(lista):
    if(len(lista)<=0):
        return 0
    if(contador(lista)>11):
        return contador(lista)
    else:
        for i in lista:
            if i[0] == 'J' or  i[0] == 'K' or  i[0] == 'Q':
                return 10+contar(lista[1:])
            elif i[0] == 'A':            
                return contador(lista)+10
            else:
                return i[0]+contar(lista[1:])
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
def contador(lista):
    if(len(lista)==0):
        return 0
    else:
        for i in lista:
            if(i[0]=='J' or i[0]=='Q' or i[0]=='K'):
                return contador(lista[1:])+10
            if(i[0]=='A'):
                return contador(lista[1:])+1
            else:
                return contador(lista[1:])+i[0]
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
def creadorbaraja():
    return sample([(x,y)for x in ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']for y in ['DIAMANTES','TREBOLES','PICAS','CORAZONES']], 52)
#-------------------------------------------------------------------------------------------------------------------------------
#-------------------------------------------------------------------------------------------------------------------------------
def juego(listaJ, listaC, lista, JC):
    if(len(listaJ)==0 and len(listaC)==0):
        repartirIni(listaJ, listaC, lista, JC)
    else:
        print("jugador: ",contar(listaJ))
        print(listaJ)
        print("Casa: ",contar(listaC))
        print(listaC)
        print("")
        print("")
        if(JC==True and contar(listaJ)<=21):
            if(input("Desea otra carta: ")!='N'):
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

-- laberinto
import Data.Array

type Fila = [(Char,Int,Int)]

type ElementoFila = [Char]

type MatrizElementos = [ElementoFila]

type Matriz = [Fila]

fila1::Fila
fila1 = [('I',1,1),('1',1,2),('0',1,3),('0',1,3),('0',1,3)]

fila2::Fila
fila2 = [('0',2,1),('1',2,2),('0',2,3),('1',1,3),('0',1,3)]

fila3::Fila
fila3 = [('0',3,1),('1',3,2),('0',3,3),('1',1,3),('0',1,3)]

fila4::Fila
fila4 = [('0',4,1),('1',4,2),('0',4,3),('1',1,3),('0',1,3)]

fila5::Fila
fila5 = [('0',5,1),('0',5,2),('0',5,3),('1',1,3),('F',1,3)]

laberinto::Matriz
laberinto = [fila1,fila2,fila3,fila4,fila5]

elemento::Fila->[Char]
elemento [] = []
elemento ((a,b,c):xs)
 | a == '0' && xs /= [] = (a:' ':' ':' ':' ':' ':' ':' ':' ':' ':elemento xs)
 | a == '1' && xs /= [] = (a:' ':' ':' ':' ':' ':' ':' ':' ':' ':elemento xs)
 | a == 'I' && xs /= [] = (a:' ':' ':' ':' ':' ':' ':' ':' ':' ':elemento xs) 
 | a == 'F' && xs /= [] = (a:' ':' ':' ':' ':' ':' ':' ':' ':' ':elemento xs)
 | a == '0' && xs == [] = (a:elemento xs)
 | a == '1' && xs == [] = (a:elemento xs)
 | a == 'I' && xs == [] = (a:elemento xs) 
 | a == 'F' && xs == [] = (a:elemento xs)
 | otherwise = [] 

mostrarLab::MatrizElementos
mostrarLab = [elemento fila1,elemento fila2,elemento fila3,elemento fila4,elemento fila5]

pizza("juan").
pizza("adriana").
pizza("pablo").
pizza("lucia").

helado("alejandra").
helado("luis").
helado("jualian").
helado("carolina").

pasta("felipe").
pasta("susana").
pasta("carlos").
pasta("gabriela").

comida(A,B) :- pizza(A),pizza(B), A\==B.
comida(A,B) :- helado(A),helado(B), A\==B.
comida(A,B) :- pasta(A),pasta(B), A\==B.

leer("gabriela").
leer("juan").
leer("pablo").
leer("carolina").

cine("carlos").
cine("alejandra").
cine("susana").
cine("felipe").

ejercicio("julian").
ejercicio("lucia").
ejercicio("luis").
ejercicio("adriana").

pasatiempo(A,B) :- leer(A),leer(B), A\==B.
pasatiempo(A,B) :- cine(A), cine(B), A\==B.
pasatiempo(A,B) :- ejercicio(A), ejercicio(B), A\==B.

tauro("juan").
tauro("susana").
tauro("felipe").
tauro("adriana").

aries("julian").
aries("alejandra").
aries("carolina").
aries("pablo").

capricornio("carlos").
capricornio("gabriela").
capricornio("lucia").
capricornio("luis").

signo(A,B) :- tauro(A), tauro(B), A\==B.
signo(A,B) :- aries(A), aries(B), A\==B.
signo(A,B) :- capricornio(A), capricornio(B), A\==B.


compatibilidad(A,B) :- pasatiempo(A,B), comida(A,B), signo(A,B).



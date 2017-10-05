padrede("juan","maria").
padrede("pablo","juan").
padrede("pablo","marcela").
padrede("marcela","debora").
padrede("maria","carlos").
padrede("alejandra","debora").
padrede("felipe","alejandra").
padrede("felipe","andres").
padrede("carlos","andres").

mujer("maria").
mujer("marcela").
mujer("debora").
mujer("alejandra").

hombre("juan").
hombre("pablo").
hombre("carlos").
hombre("felipe").
hombre("andres").

hijode(A,B) :- padrede(B,A).
abuelode(A,B) :- padrede(A,C), padrede(C,B).
hermanode(A,B) :- padrede(C,A), padrede(C,B), A \== B.
familiarde(A,B) :- padrede(A,B).
familiarde(A,B) :- abuelode(A,B).
familiarde(A,B) :- hermanode(A,B).

tiode(A,B):- padrede(X,B),hermanode(X,A).
sobrinode(A,B):-tiode(B,A).
primode(A,B):- abuelode(X,A),abuelode(X,B).
nietode(A,B):-abuelode(B,A).
parejade(A,B):-hijode(X,A),padrede(B,X), A \== B.
bisabuelode(A,B):-hijode(X,A),abuelode(X,B).
bisnieto(A,B):-bisabuelode(B,A).
felizde(A):-parejade(A,X),parejade(X,A).
adoptado(A):-padrede(P,A),padrede(M,A),hombre(P),hombre(M), P \== M. 
adoptado(A):-padrede(P,A),padrede(M,A),mujer(P),mujer(M), P \== M. 
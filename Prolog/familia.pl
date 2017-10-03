padrede("juan","maria").
padrede("pablo","juan").
padrede("pablo","marcela").
padrede("carlos","debora").
padrede("maria","carlos").
padrede("alejandras","debora").



hijode(A,B) :- padrede(B,A).
abuelode(A,B) :- padrede(A,C), padrede(C,B).
hermanode(A,B) :- padrede(C,A), padrede(C,B), A \== B.
familiarde(A,B) :- padrede(A,B).
familiarde(A,B) :- abuelode(A,B).
familiarde(A,B) :- hermanode(A,B).

tiode(A,B):- padrede(X,B),hermanode(X,A).
sobrinode(A,B):-tiode(B,A).
primode(A,B):- abuelode(X,A),abuelode(X,B).
nietode(A,B):-abuelode(B,A).
parejade(A,B):-hijode(X,A),padrede(B,X).
bisabuelode(A,B):-hijode(X,A),abuelode(X,B).
bisnieto(A,B):-bisabuelode(B,A).
felizde(A):-parejade(A,X),parejade(X,A).


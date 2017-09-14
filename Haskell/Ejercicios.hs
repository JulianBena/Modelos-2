suma::Int->Int->Int
suma a b =a+b

resta::Int->Int->Int
resta a b =a-b

dividir::Int->Int->Int
dividir a 0 = 0
dividir 0 b = 0
dividir a b = if a < b then 0 
else 1 + dividir (a - b) b

converbin::Int->Int
converbin 1 = 1
converbin a = (converbin((div a 2)) * 10) + (mod a 2)

converdec::Int->Int
converdec a = if a < 2 then a
else (converdec((div a 10)) * 2 ) +(mod a 10)

ultimo::Int->Int 
ultimo a = if a<10 then a else (ultimo (div a 10))*10

primero::Int->Int
primero a = if a<10 then a else (primero (div a 10))
 
capicua::Int->Bool
capicua a = if a<10 then True else if mod a 10 == primero a then capicua (div (a-(ultimo a)) 10) else False

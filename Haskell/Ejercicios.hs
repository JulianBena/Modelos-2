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
converbin a = (conbin((div a 2)) * 10) + (mod a 2)


converdec::Int->Int
converdec a = if a < 2 then a
converdec a = if a > 2 then (converdec((div a 10)) * 2 ) +(mod a 10)

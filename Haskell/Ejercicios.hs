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


capicua::Int->Bool
capicua a 
 | a > 0 && a < 10 = True
 | a > 9999 = error "argumento mayor que 9999"
 | a > 999 = ((div a 1000) == (mod a 10)) && ((mod (div a 100) 10) == (div (mod a 100) 10))
 | a > 99 = (a==(((mod a 10)*10^2)+((mod(div a 10) 10)*10)+(mod (div a 100) 10)))
 | a > 9 && a <= 99 = ((mod a 11) == 0)
 
palindromo::Int->Int
palindromo a = if a<10 then 1 else if mod a 10 == primero a then palindromo (div (a-(ultimo a)) 10) else 0

ultimo::Int->Int 
ultimo a = if a<10 then a else (ultimo (div a 10))*10

primero::Int->Int
primero a = if a<10 then a else (primero (div a 10))

suma::Int->Int->Int
suma a b =a+b

resta::Int->Int->Int
resta a b =a-b

dividir::Int->Int->Int
dividir a 0 = 0
dividir 0 b = 0
dividir a b = if a < b then 0 
              else 1 + dividir (a - b) b

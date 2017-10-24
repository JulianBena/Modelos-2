tipoContrato("alejandro","TCO","asistente").
tipoContrato("pedro","HC","titular").
tipoContrato("juan","HCH","asistente").
tipoContrato("miguel","MTO","titular").
tipoContrato("ana","planta","asistente").

horas("TCO",40).
horas("HC",16).
horas("HCH",8).
horas("MTO",20).
horas("planta",40).

pagoPersonal("TCO","asistente",10000).
pagoPersonal("MTO","asistente",1000).
pagoPersonal("HC","asistente",8000).
pagoPersonal("TCO","titular",50000).
pagoPersonal("MTO","titular",40000).
pagoPersonal("HC","titular",30000).
pagoPersonal("planta","asistente",20000).
pagoPersonal("planta","titular",100000).

semestre(18,"normal").
semestre(4,"vacacional").

bonificacion("TCO",0.15).
bonificacion("MTO",0.12).
bonificacion("HC",0.1).
bonificacion("HCH",0).
bonificacion("planta",0.25).

sueldo(X,Y,Z):-tipoContrato(X,A,B),horas(A,C),pagoPersonal(A,B,D),semestre(Q,Y),bonificacion(A,E),Z is (C*D*Q)*(1+E).


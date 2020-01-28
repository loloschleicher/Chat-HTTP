delimiter //
create procedure insertarUsuario(in pnick varchar(50))
begin
	insert into usuarios(nick) values(pnick);
end
//

delimiter //
create procedure SalasCrear(in nombre varchar(50), in nick varchar(50))
begin
	insert into salas values(CURDATE(), nombre, nick);
end//

delimiter //
CREATE PROCEDURE SesionesCrear(in nombre varchar(50), in nick varchar(50))
begin
	if not exists(select * from sesiones s where s.nickUsuario = nick and s.nombreSala = nombre and s.fechaHoraFin is null) then
    begin
	insert into sesiones(fechaHoraInicio, fechaHoraFin, nickUsuario, nombreSala) values(now(), null, nick, nombre);
    end;
    end if;
end//


delimiter //
create procedure SesionesCerrar(in nombre varchar(50), in nick varchar(50))
begin
	update sesiones s set s.fechaHoraFin = now() where s.nickUsuario = nick and s.nombreSala = nombre and s.fechaHoraFin is null;
end//



delimiter //
create procedure MensajesCrear(in texto varchar(300), nick varchar(50), nombreSala varchar(50))
begin
	SET @idSesion = (SELECT s.idSesion from sesiones s where s.nickUsuario = nick and s.nombreSala = nombreSala and s.fechaHoraFin is null);
	insert into mensajes(texto, fechaHora, idSesion) values(texto, now(), @idSesion);
end//

select * from mensajes m inner join sesiones s on m.idSesion = s.idSesion where s.nombreSala = "Sala 56" order by m.idMensaje asc;

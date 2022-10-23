export const usersFromApi = ( users ) => {
    // El adapter o interfaz separa la forma en la que se trabajan los datos desde el back hacia el front.
    // De esta forma, si la forma en que los datos llegan desde el back cambian,
    // no nos rompe toda la app ya que trabajamos los objetos con nombres de propiedades fijos.
    // Ademas, los del front pueden elegir los nombres de las variables que mas les gusten, 
    // en caso de que los del back no sepan poner buenos nombres :/
    const newUser = users.map( ( user ) => {
        return {
            id: user.personaId,
            name: user.nombre,
            lastName: user.apellidoBACKEND,
            mail: user.correo,
        };
    } );
    return newUser;
};
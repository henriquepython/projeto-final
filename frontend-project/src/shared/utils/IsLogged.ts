
export const isLogged = () => !!sessionStorage.getItem('token');
export const isLoggedUser = () => !!sessionStorage.getItem('id_user');

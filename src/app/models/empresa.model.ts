export class Empresa {
    constructor(
        public correo: string,
        public direccion: string,
        public estado: string,
        public nit: string,
        public nombre_comercial: string,
        public razon_social: string,
        public telefono: string,
        public created_at?: string,
        public updated_at?: string,
        public id?: number,

    ) { }
}
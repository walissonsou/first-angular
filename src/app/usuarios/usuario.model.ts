export interface Usuario {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
  }
  export interface ResponseUsuario {
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
      data: Usuario[];
  }
  // modelo para criação
  export interface RequestCreate {
    name: string;
    job: string;
}
   // create
   export interface ResponseCreate {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}

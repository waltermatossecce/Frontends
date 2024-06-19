//interfaces de las clases de visual de los dtos
export interface Category {
  categoryId: number;
  name: String;
  description: String;
  auditCreateDate: Date;
  state: number;
  stateCategory: string;
}

//las interfaces de la carpeta applicacion servicios que nos va a retornar
export interface CategoryApi {
  data: any;
  totalRecords: number;
}

import { Category } from "src/app/response/category/category.response";
import icCategory from "@iconify/icons-ic/twotone-category";
import { GenericValidators } from "@shared/validators/generic-validators";
import { ListTableMenu } from "src/app/commons/list-table-menu.interface";
import icViewHeadline from "@iconify/icons-ic/twotone-view-headline";
import icLabel from "@iconify/icons-ic/twotone-label";
import icCalendarMonth from "@iconify/icons-ic/twotone-calendar-today";
import { TableColumns } from "src/app/core/Interface/list-table.interface";

const searchOptions = [
  {
    label: "Nombre",
    value: 1,
    placeholder: "Buscar por Nombre",
    validation: [GenericValidators.defaultName],
    validation_desc: "Solo se permite letras en esta búsqueda",
    min_lenght: 2,
  },
  {
    label: "Descripción",
    value: 2,
    placeholder: "Buscar por Descripción",
    validation: [GenericValidators.defaultDescription],
    validation_desc: "Solo se permite letras y numero en esta busqueda",
    min_lenght: 2,
  },
];

const menuItem: ListTableMenu[] = [
  {
    type: "link",
    id: "all",
    icon: icViewHeadline,
    label: "Todos",
  },
  {
    type: "link",
    id: "Activo",
    value: 1,
    icon: icLabel,
    label: "Activo",
    classes: {
      icon: "text-green",
    },
  },
  {
    type: "link",
    id: "Inactivo",
    value: 0,
    icon: icLabel,
    label: "Inactivo",
    classes: {
      icon: "text-gray",
    },
  },
];

const tableColumns: TableColumns<Category>[] = [
  {
    label: "NOMBRE",
    cssLabel: ["font-bold", "text-sm"],
    property: "name",
    cssProperty: ["font-semibold", "text-sm", "text-left"],
    type: "text",
    sticky: true,
    sort: true,
    sortProperty: "name",
    visible: true,
    download: true,
  },
  {
    label: "DESCRIPCIÓN",
    cssLabel: ["font-bold", "text-sm"],
    property: "description",
    cssProperty: ["font-semibold", "text-sm", "text-left"],
    type: "text",
    sticky: false, //quiero que se mueva
    sort: true,
    sortProperty: "description",
    visible: true,
    download: true,
  },
  {
    label: "F. DE CREACIÓN",
    cssLabel: ["font-bold", "text-sm"],
    property: "auditCreateDate",
    cssProperty: ["font-semibold", "text-sm", "text-left"],
    type: "datetime",
    sticky: false,
    sort: true,
    //sortProperty: "auditCreateDate",
    visible: true,
    download: true,
  },
  {
    label: "ESTADO",
    cssLabel: ["font-bold", "text-sm"],
    property: "stateCategory",
    cssProperty: ["font-semibold", "text-sm", "text-left"],
    type: "badge",
    sticky: false,
    sort: true,
    //sortProperty: "stateCategory",
    visible: true,
    download: true,
  },
  {
    label: "",
    cssLabel: [],
    property: "icEdit",
    cssProperty: [],
    type: "icon",
    action: "edit",
    sticky: false,
    sort: false,
    visible: true,
    download: true,
  },
  {
    label: "",
    cssLabel: [],
    property: "icDelete",
    cssProperty: [],
    type: "icon",
    action: "remove",
    sticky: false,
    sort: false,
    visible: true,
    download: true,
  },
];

const filter = {
  numFilter: 0,
  textFilter: "",
  stateFilter: null,
  startDate: null,
  endDate: null,
};

const inputs = {
  numFilter: 0,
  textFilter: "",
  stateFilter: null,
  startDate: null,
  endDate: null,
};

export const componentSetting = {
  //ICONS
  icCategory: icCategory,
  icCalendarMonth: icCalendarMonth,
  //LAYAOUT SETTING
  menuOpen: false,
  // TABLE SETTING
  tableColumns: tableColumns,
  initialSort: "Id",
  InitialSortDir: "desc",
  getInputs: inputs,
  buttonLabel: "EDITAR",
  buttonLabel2: "ELIMINAR",
  //filtros de estados
  menuItem: menuItem,
  //SEARCH FILTROS
  searchOptions: searchOptions,
  filter_dates_active: false,
  datesFilterArray: ["Fecha de creación"],
  filter: filter,
  columnsFilter: tableColumns.map((column) => {
    return {
      label: column.label,
      property: column.property,
      type: column.type,
    };
  }),
};

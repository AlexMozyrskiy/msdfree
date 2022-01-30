export type TAffiliation = null | "superpuper" | "ДЕКАРТ СКДИ" | "КВЛ-П СКДИ" | "Дефектоскоп СКДИ" | "РЦДМ Ростов" | "ЖД";

export const AFFILIATIONS: TAffiliation[] = [null, "superpuper", "ДЕКАРТ СКДИ", "КВЛ-П СКДИ", "Дефектоскоп СКДИ", "РЦДМ Ростов", "ЖД"]; // возможные принадлжености юзера

/* --------------------- Цены на отчеты --------------------- */
export const descartesBook1CalculatingPrice: number = 5;
export const freightTensionPrice: number = 100;
/* --------------------- / Цены на отчеты ------------------- */

/* Если выкатываем на сервак перед выкатом меняем на isProduction = true */
export const isProduction: boolean = false;

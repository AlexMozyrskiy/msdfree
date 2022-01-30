import {
  SET_RETREATS as SET_RETREATS_TYPE,
  SET_KILOMETERS as SET_KILOMETERS_TYPE,
  SET_CARGOS as SET_CARGOS_TYPE,
  SET_FREIGHT_TENSION as SET_FREIGHT_TENSION_TYPE,
  SET_FILE_VALIDATION_ERRORS as SET_FILE_VALIDATION_ERRORS_TYPE,
} from './actionTypes';

import { TSetRetreats, TSetKilometers, TSetCargos, TSetFreightTension, TSetFileValidationErrors } from './actionTypes';

import { IReturnedObj as IReturnedObjFreightTension } from 'src/pages/user/RailWays/RCDMRostov/FreightTension/helpers/reportsCalculating/freightTension';

export interface IRetreat {
  id: number;
  distanceNumber: number;
  year: number;
  month: number;
  day: number;
  diagnosticToolNumber: number;
  checkType: number;
  directionCode: number;
  trackNumber: string;
  kilometer: number;
  picket: number;
  meter: number;
  retreatName: string;
  retreatDegree: number;
  retreatAmplitude: string;
  retreatLength: string;
  retreatScore: number;
  retreatCount: number;
  passLimitSpeed: number;
  freightLimitSpeed: number;
  passSetSpeed: number;
  reightSetSpeed: number;
  norm: number;
  subgrade: number;
  insulatingGap: number;
  bridge: number;
  prPredupr: number;
}

export interface IKilometer {
  id: number;
  distanceNumber: number;
  year: number;
  month: number;
  day: number;
  diagnosticToolNumber: number;
  checkType: number;
  directionCode: number;
  trackNumber: string;
  kilometer: number;
  grade: number;
  score: number;
  checked: number;
  passLimitSpeed: number;
  freightLimitSpeed: number;
  passSetSpeed: number;
  reightSetSpeed: number;
}

export interface ICargo {
  id: number;
  distanceNumber: number;
  directionCode: number;
  trackNumber: string;
  cargoDegree: number;
  startKm: number;
  startMeter: number;
  endKm: number;
  endMeter: number;
}

export interface IFreightTension extends IReturnedObjFreightTension {
  isCalculated: boolean;
}

export type TFileValidationError = string;

interface ISetRetreatsReturn {
  type: TSetRetreats;
  retreats: IRetreat[];
}

interface ISetKilometersReturn {
  type: TSetKilometers;
  kilometers: IKilometer[];
}

interface ISetCargosReturn {
  type: TSetCargos;
  cargos: ICargo[];
}

interface ISetFreightTensionReturn {
  type: TSetFreightTension;
  freightTension: IFreightTension;
}

interface ISetFileValidationErrorsReturn {
  type: TSetFileValidationErrors;
  fileValidationErrors: TFileValidationError[];
}

export const setRetreats = (retreats: IRetreat[]): ISetRetreatsReturn => {
  return {
    type: SET_RETREATS_TYPE,
    retreats,
  };
};

export const setKilometers = (kilometers: IKilometer[]): ISetKilometersReturn => {
  return {
    type: SET_KILOMETERS_TYPE,
    kilometers,
  };
};

export const setCargos = (cargos: ICargo[]): ISetCargosReturn => {
  return {
    type: SET_CARGOS_TYPE,
    cargos,
  };
};

export const setFreightTension = (freightTension: IFreightTension): ISetFreightTensionReturn => {
  return {
    type: SET_FREIGHT_TENSION_TYPE,
    freightTension,
  };
};

export const setFileValidationErrors = (
  fileValidationErrors: TFileValidationError[]
): ISetFileValidationErrorsReturn => {
  return {
    type: SET_FILE_VALIDATION_ERRORS_TYPE,
    fileValidationErrors,
  };
};

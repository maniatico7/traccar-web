import { useMemo } from 'react';

export default (t) => useMemo(() => ({
  'web.reportColor': {
    name: t('attributeWebReportColor'),
    type: 'string',
    subtype: 'color',
  },
  devicePassword: {
    name: t('attributeDevicePassword'),
    type: 'string',
  },
  deviceImage: {
    name: t('attributeDeviceImage'),
    type: 'string',
  },
  LServiceWeight: {
    name: t('attributeLServiceWeight'),
    type: 'string',
  },
  LWheelArrangement: {
    name: t('attributeLWheelArrangement'),
    type: 'string',
  },
  LYearConstruction: {
    name: t('attributeLYearConstruction'),
    type: 'string',
  },
  LNVRNumber: {
    name: t('attributeLNVRNumber'),
    type: 'string',
  },
  LSerialNumber: {
    name: t('attributeLSerialNumber'),
    type: 'string',
  },
  LFuelTank: {
    name: t('attributeLFuelTank'),
    type: 'string',
  },
  LMaxSpeed: {
    name: t('attributeLMaxSpeed'),
    type: 'string',
  },
  LLengthBuffer: {
    name: t('attributeLLengthBuffer'),
    type: 'string',
  },
  LWheelDiameterMax: {
    name: t('attributeLWheelDiameterMax'),
    type: 'string',
  },
  LWheelDiameterMin: {
    name: t('attributeLWheelDiameterMin'),
    type: 'string',
  },
  LTrackCurve: {
    name: t('attributeLTrackCurve'),
    type: 'string',
  },
  LCountryApproval: {
    name: t('attributeLCountryApproval'),
    type: 'string',
  },
  LTypeDrive: {
    name: t('attributeLTypeDrive'),
    type: 'string',
  },
  LDrivePower: {
    name: t('attributeLDrivePower'),
    type: 'string',
  },
  LTractiveForce: {
    name: t('attributeLTractiveForce'),
    type: 'string',
  },
  LLineCategories: {
    name: t('attributeLLineCategories'),
    type: 'string',
  },
  'processing.copyAttributes': {
    name: t('attributeProcessingCopyAttributes'),
    type: 'string',
  },
  'decoder.timezone': {
    name: t('sharedTimezone'),
    type: 'string',
  },
  deviceInactivityStart: {
    name: t('attributeDeviceInactivityStart'),
    type: 'number',
  },
  deviceInactivityPeriod: {
    name: t('attributeDeviceInactivityPeriod'),
    type: 'number',
  },
}), [t]);

import { useMemo } from 'react';

export default (t) => useMemo(() => ({
  id: {
    name: t('deviceIdentifier'),
    type: 'number',
    property: true,
  },
  latitude: {
    name: t('positionLatitude'),
    type: 'number',
    property: true,
  },
  longitude: {
    name: t('positionLongitude'),
    type: 'number',
    property: true,
  },
  speed: {
    name: t('positionSpeed'),
    type: 'number',
    dataType: 'speed',
    property: true,
  },
  altitude: {
    name: t('positionAltitude'),
    type: 'number',
    property: true,
  },
  address: {
    name: t('positionAddress'),
    type: 'string',
    property: true,
  },
  deviceTime: {
    name: t('positionDeviceTime'),
    type: 'string',
    property: true,
  },
  sat: {
    name: t('positionSat'),
    type: 'number',
  },
  satVisible: {
    name: t('positionSatVisible'),
    type: 'number',
  },
  rssi: {
    name: t('positionRssi'),
    type: 'number',
  },
  event: {
    name: t('positionEvent'),
    type: 'string',
  },
  alarm: {
    name: t('positionAlarm'),
    type: 'string',
  },
  status: {
    name: t('positionStatus'),
    type: 'string',
  },
  odometer: {
    name: t('positionOdometer'),
    type: 'number',
    dataType: 'distance',
  },
  hours: {
    name: t('positionHours'),
    type: 'number',
    dataType: 'hours',
  },
  hours2: {
    name: t('positionHours2'),
    type: 'number',
    dataType: 'hours',
  },
  idleTime: {
    name: t('positionIdleTime'),
    type: 'number',
    dataType: 'hours',
  },
  input: {
    name: t('positionInput'),
    type: 'number',
  },
  in1: {
    name: `${t('positionInput')} 1`,
    type: 'boolean',
  },
  in2: {
    name: `${t('positionInput')} 2`,
    type: 'boolean',
  },
  in3: {
    name: `${t('positionInput')} 3`,
    type: 'boolean',
  },
  in4: {
    name: `${t('positionInput')} 4`,
    type: 'boolean',
  },
  power: {
    name: t('positionPower'),
    type: 'number',
    dataType: 'voltage',
  },
  battery: {
    name: t('positionBattery'),
    type: 'number',
    dataType: 'voltage',
  },
  fuel: {
    name: t('positionFuel'),
    type: 'number',
    dataType: 'volume',
  },
  fuelConsumption: {
    name: t('positionFuelConsumption'),
    type: 'number',
  },
  ignition: {
    name: t('positionIgnition'),
    type: 'boolean',
  },
  engine1: {
    name: t('positionEngine1:'),
    type: 'boolean',
  },
  engine2: {
    name: t('positionEngine2:'),
    type: 'boolean',
  },
  distance: {
    name: t('positionDistance'),
    type: 'number',
    dataType: 'distance',
  },
  standbyDistance: {
    name: t('positionStandbyDistance'),
    type: 'number',
    dataType: 'distance',
  },
  totalDistance: {
    name: t('deviceTotalDistance'),
    type: 'number',
    dataType: 'distance',
  },
  totalStandbyDistance: {
    name: t('deviceTotalStandbyDistance'),
    type: 'number',
    dataType: 'distance',
  },
  motion: {
    name: t('positionMotion'),
    type: 'boolean',
  },
  geofence: {
    name: t('sharedGeofence'),
    type: 'string',
  },
  accelX: {
    name: t('positionAccelerationX'),
    type: 'number',
  },
  accelY: {
    name: t('positionAccelerationY'),
    type: 'number',
  },
  accelZ: {
    name: t('positionAccelerationZ'),
    type: 'number',
  },
  temp1: {
    name: `${t('positionTemp')} 1`,
    type: 'number',
  },
  temp2: {
    name: `${t('positionTemp')} 2`,
    type: 'number',
  },
  temp3: {
    name: `${t('positionTemp')} 3`,
    type: 'number',
  },
  temp4: {
    name: `${t('positionTemp')} 4`,
    type: 'number',
  },
}), [t]);

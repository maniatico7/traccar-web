import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Typography, Container, Paper, AppBar, Toolbar, IconButton, Table, TableHead, TableRow, TableCell, TableBody,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffectAsync } from '../reactHelper';
import { prefixString } from '../common/util/stringUtils';
import { useTranslation } from '../common/components/LocalizationProvider';
import PositionValue from '../common/components/PositionValue';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    overflow: 'auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const MasterDataPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const t = useTranslation();

  const { id } = useParams();

  const [item, setItem] = useState();

  useEffectAsync(async () => {
    if (id) {
      const response = await fetch(`/api/devices?id=${id}`);
      if (response.ok) {
        const devices = await response.json();
        if (devices.length > 0) {
          setItem(devices[0]);
        }
      } else {
        throw Error(await response.text());
      }
    }
  }, [id]);

  const deviceName = useSelector((state) => {
    if (item) {
      const device = state.devices.items[item.id];
      if (device) {
        return device.name;
      }
    }
    return null;
  });

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }} onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">
            {deviceName}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Container maxWidth="sm">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('sharedName')}</TableCell>
                  <TableCell>{t('stateValue')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item && Object.getOwnPropertyNames(item.attributes).map((attribute) => (
                  <TableRow key={attribute}>
                    <TableCell><strong>{t(prefixString('attribute', attribute)) || t(prefixString('device', attribute))}</strong></TableCell>
                    <TableCell><PositionValue position={item} attribute={attribute} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default MasterDataPage;

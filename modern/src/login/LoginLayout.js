import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LogoImage from './LogoImage';
import Image from '../resources/images/background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    paddingBottom: theme.spacing(5),
    width: theme.dimensions.sidebarWidth,
    [theme.breakpoints.down('lg')]: {
      width: theme.dimensions.sidebarWidthTablet,
    },
    [theme.breakpoints.down('sm')]: {
      width: '0px',
    },
  },
  paper: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    fontWeight: 'bold',
    fontSize: 36,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 0, 0, 0),
    },
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    background: '#fff',
    borderRadius: 10,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    width: '100%',
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {!useMediaQuery(theme.breakpoints.down('lg')) && <LogoImage color={theme.palette.secondary.contrastText} />}
      </div>
      <Paper className={classes.paper}>
        <Typography color="common.white" fontSize="h3.fontSize" fontWeight="bold">
          Smart Data
        </Typography>
        <Typography color="common.white" fontSize="h6.fontSize" fontWeight="bold" mb={5}>
          Erleben Sie die Eisenbahn neu!
        </Typography>
        <Box className={classes.form}>
          {children}
        </Box>
        <Link href="https://nrail.de/en/datenschutz" underline="always" color="common.white" fontSize="h8.fontSize">
          <Typography color="common.white" fontSize="h8.fontSize" mt={2}>
            Datenschutzerklärung
          </Typography>
        </Link>
      </Paper>
    </main>
  );
};

export default LoginLayout;

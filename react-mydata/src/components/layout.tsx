import React, { FC, ReactNode, useReducer } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// components
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

// constants - 상수 파일에서 상수를 가져옵니다
import { DRAWER_WIDTH, FOOTER_HEIGHT } from '../utils/constants';

// define css-in-js
// Material-UI 라이브러리에서 makeStyles 및 createStyles 와 같은 함수를 제공합니다
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      background: theme.palette.background.paper,
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: DRAWER_WIDTH,
    },
  }),
);

// define interface to represent component props
// 레이아웃 구성 요소가 정보를받을 것으로 예상하는 속성을 TypeScript 인터페이스를 정의합니다.
interface Props {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
  children: ReactNode;
}

// functional component
const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children }) => {
  const classes = useStyles();
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleMenuOpen={toggle} toggleTheme={toggleTheme} useDefaultTheme={useDefaultTheme} />
      <Navigation open={open} handleMenuClose={toggle} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar} />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

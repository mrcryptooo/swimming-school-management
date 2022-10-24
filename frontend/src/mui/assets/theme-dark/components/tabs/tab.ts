/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import typography from 'src/mui/assets/theme-dark/base/typography';
import borders from 'src/mui/assets/theme-dark/base/borders';
import colors from 'src/mui/assets/theme-dark/base/colors';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'src/mui/assets/theme-dark/functions/pxToRem';

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { white } = colors;

// types
type Types = any;

const tab: Types = {
  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: '1 1 auto',
      textAlign: 'center',
      maxWidth: 'unset !important',
      minWidth: 'unset !important',
      minHeight: 'unset !important',
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: 'none',
      lineHeight: 'inherit',
      padding: pxToRem(3.2),
      borderRadius: borderRadius.lg,
      color: `${white.main} !important`,
      opacity: '1 !important',

      '& .material-icons, .material-icons-round': {
        marginBottom: '0 !important',
        marginRight: pxToRem(4.8),
      },

      '& svg': {
        marginBottom: '0 !important',
        marginRight: pxToRem(4.8),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(3.2),
    },
  },
};

export default tab;

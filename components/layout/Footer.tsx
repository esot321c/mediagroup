import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@components/Link"
import { useMediaQuery, useTheme } from "@mui/material";

const Footer: FC = () => {
  const theme = useTheme()
  const upMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Container sx={{ display: 'block', position: 'relative', zIndex: 0 }}>
      <Grid container direction={upMd ? 'row' : 'column-reverse'} justifyContent="space-between" sx={{ py: 2 }} spacing={1}>
        <Grid item xs={12} md sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography>
            &copy; 2023 Morley Media Group, Ltd. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Link
            href="/terms"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            Terms of Service
          </Link>{" "}
          ·{" "}
          <Link
            href="/privacy"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            Privacy Policy
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
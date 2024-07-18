// MUI IMPORT
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORT
import { getYear } from '~/utils/getCurrentYear';

export default function AuthFooter() {
  return (
    <Container maxWidth="xl">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        spacing={2}
        textAlign={{ xs: 'center', sm: 'inherit' }}
      >
        <Typography variant="subtitle2" color="secondary">
          © {getYear()} Focela Technologies. All rights reserved.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} textAlign={{ xs: 'center', sm: 'inherit' }}>
          <Typography variant="subtitle2" color="secondary" component={Link} href="https://focela.com" target="_blank" underline="hover">
            Terms and Conditions
          </Typography>
          <Typography variant="subtitle2" color="secondary" component={Link} href="https://focela.com" target="_blank" underline="hover">
            Privacy Policy
          </Typography>
          <Typography variant="subtitle2" color="secondary" component={Link} href="https://focela.com" target="_blank" underline="hover">
            CA Privacy Notice
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

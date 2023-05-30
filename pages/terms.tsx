import React from 'react';
import { Typography, Box, List, ListItem, Container } from '@mui/material';

const listStyle = {
  pl: "40px",
  pb: "32px",
  listStyleType: "disc",
  "& li": {
    display: "list-item",
    pl: 0,
  },
}

const CoinectaTermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Box>
        <Typography variant="h3" component="h1" >
          Terms of Service
        </Typography>

        <Typography variant="body2">
        Last modified: May 29, 2023
        </Typography>

      <Typography variant="body2">
        By accessing and using this website, you agree to the following terms:
      </Typography>
      <Typography variant="h5" component="h2" >
        Content
      </Typography>
      <Typography variant="body2">
        The content provided on the Morley Media Group, Ltd. website is for informational purposes only. It may include general information about our company, products, and services. However, please note that the information on this website does not constitute professional advice.
      </Typography>
      <Typography variant="h5" component="h2" >
        Intellectual Property
      </Typography>
      <Typography variant="body2">
        The content, design, graphics, and other elements of this website are protected by intellectual property rights, including copyright and trademarks owned by Morley Media Group, Ltd. You may not reproduce, distribute, or use any of the website&apos;s content without our prior written consent.
      </Typography>
      <Typography variant="h5" component="h2" >
        Third-Party Links
      </Typography>
      <Typography variant="body2">
        This website may contain links to external websites or resources. Morley Media Group, Ltd. does not endorse or take responsibility for the content, privacy practices, or any actions of third-party websites. Visiting such websites is at your own risk.
      </Typography>
      <Typography variant="h5" component="h2" >
        Disclaimer of Liability
      </Typography>
      <Typography variant="body2">
        While we strive to provide accurate and up-to-date information on our website, we make no warranties or representations regarding the accuracy, completeness, or reliability of the content. Morley Media Group, Ltd. shall not be liable for any direct or indirect damages or losses resulting from the use of this website or its content.
      </Typography>
      <Typography variant="h5" component="h2" >
        Changes to the Terms
      </Typography>
      <Typography variant="body2">
        Morley Media Group, Ltd. reserves the right to modify or update these terms of service at any time without prior notice. By continuing to use the website after such changes, you agree to be bound by the revised terms.
      </Typography>
      <Typography variant="h5" component="h2" >
        Governing Law
      </Typography>
      <Typography variant="body2">
        These terms of service are governed by and construed in accordance with the laws of Canada. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Canada.
      </Typography>
      </Box>
    </Container>
  );
};

export default CoinectaTermsOfService;
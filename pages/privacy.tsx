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

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="body2">
          Last modified: May 29, 2023
        </Typography>

        <Typography variant="body2">
          Morley Media Group, Ltd. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit and interact with our website.
        </Typography>
        <Typography variant="h5" component="h2">
          Information Collection
        </Typography>
        <Typography variant="body2">
          We may collect certain non-personally identifiable information, such as your IP address and browsing patterns, through the use of cookies or similar technologies. However, we do not collect any personally identifiable information on this website unless you voluntarily provide it through contact forms or other means.
        </Typography>
        <Typography variant="h5" component="h2">
          Use of Information
        </Typography>
        <Typography variant="body2">
          Any personally identifiable information you provide to us will be used solely for the purpose of responding to your inquiries or providing requested information. We do not share or sell your personal information to third parties.
        </Typography>
        <Typography variant="h5" component="h2">
          Security
        </Typography>
        <Typography variant="body2">
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
        </Typography>
        <Typography variant="h5" component="h2">
          Third-Party Websites
        </Typography>
        <Typography variant="body2">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
        </Typography>
        <Typography variant="h5" component="h2">
          Changes to the Privacy Policy
        </Typography>
        <Typography variant="body2">
          We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting on this website. Your continued use of the website after the changes indicates your acceptance of the revised Privacy Policy.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

const app = express();

// Proxy `/api` requests to the HTTP API
app.use(
  '/api',
  createProxyMiddleware({
    target: process.env.API_URL, // Replace with the HTTP API URL
    changeOrigin: true, // Ensures the Host header is updated correctly
    pathRewrite: { '^/api': '/api' }, // Optional, depending on your API path
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

# Creating a Google API Key for Geocoding API

This documentation explains how to create a Google API key that you can use with the Geocoding API to test your project locally.

## Steps to Create an API Key

1. **Log in to Google Cloud Console**
   - Go to https://console.cloud.google.com
   - Log in with your Google account.

2. **Create a New Project**
   - In the top left corner, click on the project selector.
   - Select **New Project**.
   - Give your project a name and click **Create**.

3. **Enable Geocoding API**
   - In the left menu, select **API & Services**, then **Library**.
   - In the search box, type "Geocoding API".
   - Select Geocoding API and click **Enable**.

4. **Create an API Key**
   - In the left menu, select **Credentials**.
   - Click on **Create credentials** and choose **API key**.
   - Your new API key will be created. Save it in a secure place.

## Using the API Key

- Include your API key in the project by adding it to a `.env` file.
- In the `.env` file write: `VITE_LOCATION_API_KEY=YOUR_API_KEY`

## Important

- Make sure not to share your API key publicly, as this could lead to misuse.
- The API key you created is intended for local testing. For a production environment, consider additional restrictions and security measures.

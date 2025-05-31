# Farming Efficiency

This project is created to guide farmers in finding the best products to be planted in a soil with specific characteristics.

## How to use

The application is running under this [link](https://ahmetgurdal.github.io/FarmingEfficiency/), When you open the application, you should be seeing a dropdown input for language selection and 6 input boxes. These boxes filters the products with the given values. After that, returns the filtered products if any left.

- Name Input : Filters the included names
- pH Level Input : Filters the pH level with the product's pH range
- Nitrogen Input : Looking for maximum %10 differences from the optimal value (safe area)
- Phosphorus Input : Looking for maximum %25 differences from the optimal value (safe area)
- Potassium Input : Looking for maximum %10 differences from the optimal value (safe area)
- Temperature Input : Filters the temperature level with the product's temperature range

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# **pragma.team** Senior Frontend Dev Assesment

This project is part of selection process for Senior Frontend Engineer to **pragma.team**.

## Node/React versions and Run instructions

- Node 20.9.0
- React 18.2.0

I decided to use the use the vanilla npm install to minimize the dependencies of the project.
Please type `npm install` then `npm start` to start the project.

## Highlights

- Use of React basic structures and componentization;
- Use of React css modules and vanilla css;
- Use of axios to make the API calls;
- Use of a JSON [beers.json](./src/data/beers.json) file to load the beer list;
- Integrated [React Bootstrap](https://react-bootstrap.netlify.app/) for grid and card layout.

## Improvements if more time

- Add tests
- Add **pragma.team** logo to the header;
- Complete the Header and Navigation placeholder sections;
- Add comment header to the files indicating file purpose, creation date, etc;
- Add more comments in the relevant parts of the code;
- Make the temperature range dynamic and parameterized;
- Add error handler to the API call method

## Questions

- No instructions about edge cases (E.g.: beer id not in list);
    - Display a card with an message saying that the beer with the specified was not found.
- What if every beer have a different optimal temperature range?
    - Add temperature range to the [beers.json](./src/data/beers.json) and modify the method who verifies if the beer is in optimal temperature range. 

## Approach

- Use the stateless and stateful components
- No need of context in this proof of concept


# neptune-test

Get Up and Running:

1. Clone the repo to your machine
2. Create .env file and enter your API KEY and use process.env OR hard code into the fetchToken headers in /store/modules/quotes.js
3. Run `yarn install`
4. Run `yarn serve`
5. Enter an address OR quoteNumber and get your quote!

NOTE: I opened up "Access-Control-Allow-Origin" to "*" just in case you have a default port other than 8080. 
      Typically I would define the port in .env and bring it into where I'm running the server or a midddleware config file.

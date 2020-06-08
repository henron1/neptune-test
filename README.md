# neptune-test

I really enjoyed learning Vue and Vuex and taking on this challenge! A user can enter an address and get a quote OR find and view a quote via a Quote Id (paste a quoteNumber from https://dev.neptuneflood.com/agent-hub/#/home). 
For sake of time I opted to display the total premium of each quote instead of having the user edit. 
After just learning Vue and Vuex for a few hours I'm sure there are better practices then what I employ, but I tried to match other Vue apps structure as best as possible for the scale of this project. 

Get Up and Running:

1. Clone the repo to your machine
2. Create .env file and enter `VUE_APP_AUTHORIZATION=<your API key here>`
3. Run `yarn install`
4. Run `yarn serve`
5. Enter an address OR quoteNumber and get your quote!

NOTE: I opened up "Access-Control-Allow-Origin" to "*" just in case you have a default port other than 8080. 
      Typically I would define the port in .env and bring it into where I'm running the server or a midddleware config file.

NOTE: There is a non-detrimental typeError in the console where the Quotes component in App doesn't have an addr1 to load when the app mounts. I'm still troubleshooting how to get around this, but wanted to get this in front of your team as soon as possible. 

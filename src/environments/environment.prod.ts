export const environment = {
  production: true,
  recipesLocalStorageKey: 'recipes',
  groceryListLocalStorageKey: 'groceryList',
  recipePlaceHolderImageUrl: 'https://via.placeholder.com/150x150',
  defaultRecipes: [{
    Id: '27c4d157-581c-4fdb-8217-11ae26028832',
    Name: 'Pfannkuchen',
    Description: 'Die Mehle vermischen und sieben. Eier, Zucker und Milch dazugeben, alles mit dem Schneebesen gut verquirlen. 10 Minuten quellen lassen, danach noch einmal verrühren.\n\nEine Pfanne erhitzen, 1 EL Öl darin heiß werden lassen. Den Teig portionsweise im heißen Öl ausbacken - man braucht pro Portion etwa 1 EL Öl.\n\nTipps: \nNeutral schmeckendes Öl verwenden, wie z. B. Maiskeimöl. Den Teig vor jedem Portionieren neu aufrühren, da sich unten Mehl absetzen kann. Zum Portionieren eine große Suppenkelle verwenden.\n\nWer keine Eier verträgt, kann sie durch insgesamt 4 EL Öl, 1 EL phosphatfreies Backpulver und 4 EL Wasser ersetzen.\n\nWer mag, kann statt der angegebenen Mehle je 60 g Maisstärke und Kartoffelmehl sowie 40 g Maismehl verwenden.',
    ImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rezeptbuch-ebd42.appspot.com/o/pfannkuchen.jpg?alt=media&token=d8ba1952-b95a-4ca6-885c-8763b0a9c359',
    Ingredients: [
      { Unit: 'g', Amount: 80, Category: 'Sonstiges', Name: 'Mehl' },
      { Amount: 80, Unit: 'g', Name: 'Maisstärke', Category: 'Sonstiges' },
      { Amount: 3, Name: 'Eier', Category: 'Sonstiges' },
      { Name: 'Milch', Amount: 400, Unit: 'ml', Category: 'Sonstiges' },
      { Name: 'Traubenzucker', Amount: 3, Unit: 'EL', Category: 'Sonstiges' }
    ],
    Created: '2019-08-08T12:56:21.603Z',
    LastEdited: '2019-08-08T12:56:21.603Z'
  },
  {
    Id: '75d60326-011d-48d8-adda-c1077467a190',
    Name: 'Spaghetti Mediterran',
    Description: 'Die Spaghetti al dente kochen, wie auf der Packung beschrieben. Währenddessen die Zwiebel schälen und klein hacken, den Feta in kleine Würfel und den Schinken in dünne Streifchen schneiden. Die getrockneten Tomaten und Oliven klein hacken. Alles in einer Schüssel mischen und ein wenig Olivenöl hinzugeben. Wer möchte, presst eine Knoblauchzehe in die Mischung. Die fertigen Spaghetti abtropfen lassen und zu der Mischung geben. Mit Salz und Pfeffer abschmecken. Feta und Schinken bringen schon Salz mit, also nur wenig Salz nehmen. Gegessen wird das Gericht heiß oder lauwarm, schmeckt aber auch kalt als mediterraner Salat.',
    ImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rezeptbuch-ebd42.appspot.com/o/spaghetti.jpg?alt=media&token=9ebb1cbb-e787-49ba-82ce-1605f399bc26',
    Ingredients: [
      { Name: 'Spaghetti', Amount: 250, Unit: 'g', Category: 'Sonstiges' },
      { Name: 'Tomaten', Amount: 80, Unit: 'g', Category: 'Gemüse' },
      { Name: 'Oliven', Amount: 80, Unit: 'g', Category: 'Sonstiges' },
      { Amount: 100, Unit: 'g', Name: 'Feta-Käse', Category: 'Sonstiges' },
      { Name: 'Parmaschinken', Amount: 100, Unit: 'g', Category: 'Fleisch' },
      { Name: 'Zwiebel', Amount: 1, Category: 'Gemüse' }],
    Created: '2019-08-08T12:58:43.376Z',
    LastEdited: '2019-08-08T12:58:43.376Z'
  },
  {
    Id: '600c5382-15fd-42f8-9509-85c453d49f82',
    Name: 'Nusskuchen',
    ImageUrl: 'https://firebasestorage.googleapis.com/v0/b/rezeptbuch-ebd42.appspot.com/o/Nusskuchen.jpg?alt=media&token=1dfdd915-c696-4589-92f9-c79f5e92a6db',
    Ingredients: [
      { Name: 'Puderzucker', Amount: 250, Unit: 'g', Category: 'Sonstiges' },
      { Name: 'Eier', Amount: 5, Category: 'Sonstiges' },
      { Name: 'Haselnüsse', Amount: 250, Unit: 'g', Category: 'Sonstiges' }
    ],
    Created: '2019-08-08T13:08:08.068Z',
    LastEdited: '2019-08-08T13:09:16.512Z',
    Description: 'Die Eier mit dem Puderzucker ca. 10 Min. schaumig rühren. Danach die Haselnüsse zugeben und nochmals gut vermischen. Die fertige Teigmischung in eine mit Backpapier ausgelegte Kastenform geben. \n\nIm vorgeheizten Backofen bei 160°C Umluft ca. 45 Min. backen. \n\nTipps: Nachdem der saftige Nusskuchen fertig ist, kann man ihn je nach Bedarf noch mit Schokoladenglasur verzieren.\nFalls der Teig zu feucht sein sollte, kann man noch 2 EL Mehl zugeben.'
  }
  ],
  firebase: {
    apiKey: 'AIzaSyDPeaEp0SirmDFN6UGbUFm20NE4ymeh1vM',
    authDomain: 'rezeptbuch-ebd42.firebaseapp.com',
    databaseURL: 'https://rezeptbuch-ebd42.firebaseio.com/',
    projectId: 'rezeptbuch-ebd42',
    storageBucket: 'rezeptbuch-ebd42.appspot.com',
    messagingSenderId: '372680849160',
    appId: '1:372680849160:web:10d82d3520a17465'
  }
};

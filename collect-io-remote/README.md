This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Screens

This app has this screens:

### `Landing`
### /

The screen has the following parts:
<ul>
<li>Logo</li>
<li>slogan</li>
<li>Enabled for writting Combo, with recent codes as dropdown</li>
<li>"Enter button"</li>
</ul>

### `Validating - Stright to te card`
### /:card

<ul>
<li>Validates that the code exists, if it does, sends the user to --> Filling.</li>
<li>If the code doesn't exists, sends the user to --> Landing</li>
</ul>

### `Filling`
### /:card/filling

This screen has the following elements:
<ul>
<li>Title Bar **fixed**, containing:
<ul>
<li>Home button
<li>Card Title
</ul>
<li>A section for each field
<li>Send button
</ul>

### `Sent`
### /:card/sent

Once it has been sent, the screen shows the following components:

<ul>
<li>Sent!!
<li>Send me a copy section:
<ul>
<li>Mail input field
<li>Send email button
</ul>
<li>Fill again button
<li>Fill another section
<ul>
<li>Enabled for writting Combo, with recent codes as dropdown</li>
<li>"Enter button"</li>
</ul>
<li>Visit us --> Collect.io home Page
</ul>

## Restricciones

1. El título de la tarjeta puede contener máximo 25* caracterres.

# @opencalc/frontend

This contains the source code for the frontend part of the website, serving as the face of the website.

This part handles:
- User Interface.
- Graphical calculator renderer.

## Directory Structure

- ```./src/``` : Src folder.
  - ```/routes/``` : Routes folder.
    - ```/account/``` : Account folder, for signing and logging.
    - ```calculators/``` : The entire point of the website, the calculator.
    - ```help/``` : Help and support.
    - ```home/``` : Home folder, the main page.
    - ```error.svelte``` : Error template file.
    - ```layout.svelte``` : Layout template.
  - ```app.css``` : Main CSS file, contains a direction for Tailwind.
  - ```app.d.ts``` : Defining types.
  - ```app.html``` : HTML template file.
- ```./static/``` : Static folder.
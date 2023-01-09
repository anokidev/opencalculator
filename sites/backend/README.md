# @opencalculator/backend

This is the backend part of the website, serving as a glue between the frontend and supabase.

This part contains:
- Supabase (User auth, databases, etc).
- REST API that can be used by the frontend.

## Directory Structure

- ```./src/``` : Src folder.
  - ```modules/``` : Modules folder.
    - ```projects/``` : Projects module, for handling projects.
    - ```user/``` : User module, for handling user auth.
  - ```root/``` : Root module folder.
  - ```app.module.ts``` : App module file.
  - ```main.ts``` : Entrypoint file.
- ```./test/``` : Test folder.
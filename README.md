# Backend pentru Gestionarea Furnizorilor, Produselor și Recenziilor unui magazin online

Acest proiect reprezintă backend-ul unei aplicații web realizata in NodeJS pentru gestionarea furnizorilor, produselor și recenziilor unui magazin online. Documentul contine detalii despre API-ul utilizat pentru gestionarea utilizatorilor, furnizorilor, produselor și recenziilor.

## Instalare și Configurare Inițială
1. **Clonează Repositoriul**: 
```bash
git clone https://github.com/BanesaruDenisa/Proiect-NodeJS.git
cd Proiect-NodeJS
```
2. **Instalează Dependințele**: 
```bash
npm install
```

3. **Configurează o Baza de Date (În acest proiect am folosit MySql Workbench 8.0 CE**:
   În fișierul .env, configurează setările pentru conexiunea la baza de date:
    ```javascript
    DB_NAME=makeup_db
    DB_USER=root
    DB_PASSWORD=parola_ta
    DB_HOST=localhost
    DB_PORT=3306
    JWT_SECRET=85xvxoQByC0/MtPtzFlbmidFNxXhmJjp4+3cUy76odQ=
    PORT=3000
     ```
- Creează baza de date
  ```sql
  CREATE DATABASE makeup_db;
  ```

4. **Rulează Serverul**: 
```bash
npm start
```

## API Routes

### Autentificare (Auth)
**Signup**
Endpoint: POST /auth/signup
Descriere: Creează un nou utilizator.

```javascript
{
  "email": "email@exemplu.com",
  "password": "parola"
}
```

**Signin**
Endpoint: POST /auth/signin
Descriere: Autentifică un utilizator existent și returnează un token JWT.

### Utilizatori (Users)
Get All Users
Endpoint: GET /users - returnează o listă cu toți utilizatorii.
Get User by ID
Endpoint: GET /users/{id} - returnează detalii despre un utilizator specific.
Create User
Endpoint: POST /users - creează un nou utilizator.
Update User
Endpoint: POST /users/update/{id} - actualizează detaliile unui utilizator existent.
Delete User
Endpoint: POST /users/delete/{id} - sterge un utilizator din sistem.

### Furnizori 
Get All Furnizori
Endpoint: GET /furnizori - returnează o listă cu toți furnizorii.
Get Furnizor by ID
Endpoint: GET /furnizori/{id} - returnează detalii despre un furnizor specific.
Create Furnizor
Endpoint: POST /furnizori - creează un nou furnizor
Update Furnizor
Endpoint: POST /furnizori/update/{id} - actualizează detaliile unui furnizor existent.
Delete Furnizor
Endpoint: POST /furnizori/delete/{id} - sterge un furnizor din sistem.

### Produse 
Get All Produse
Endpoint: GET /produse - returnează o listă cu toate produsele.
Get Produs by ID
Endpoint: GET /produse/{id} - returnează detalii despre un produs specific.
Create Produs
Endpoint: POST /produse - creează un nou produs.
Update Produs
Endpoint: POST /produse/update/{id} - actualizează detaliile unui produs existent.
Delete Produs
Endpoint: POST /produse/delete/{id} - sterge un produs din sistem.

### Recenzii 
Get All Recenzii
Endpoint: GET /recenzii - returnează o listă cu toate recenziile.
Get Recenzie by ID
Endpoint: GET /recenzii/{id} - returnează detalii despre o recenzie specifică.
Create Recenzie
Endpoint: POST /recenzii - creează o nouă recenzie.

Update Recenzie
Endpoint: POST /recenzii/update/{id} - actualizează detaliile unei recenzii existente.
Delete Recenzie
Endpoint: POST /recenzii/delete/{id} -  sterge o recenzie din sistem.

 ### Middleware de Validare
Middleware-ul validatePayload este utilizat pentru a valida payload-ul request-ului folosind fiecare schema definită cu Joi.
Middleware-ul este aplicat pe rutele relevante pentru a valida payload-ul request-ului și pentru a returna o eroare de 400 Bad Request în cazul în care payload-ul nu este valid.

## Diagrama Bazei de Date

![alt text](../diagrama_baza.png)










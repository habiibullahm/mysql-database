# mysql-database
sql query menggunakan orm sequelize

Primary Key merupakan kunci utama pada field tertentu dalam sebuah tabel yang biasa digunakan untuk mendefinisikan rows data tertentu.

Foreign Key adalah atribut pada tabel yang menunjukan hubungan (relasi) ke tabel induk ( yang mempunyai primary key)

One to One -> relasi 1 tabel dg 1 tabel yg lain 
ex: NIS - Siswa 
1 NIS hanya dimiliki oleh 1 siswa sebaliknya 

One to Many -> relasi 1 tabel yg di hubungkan dengan byk tabel
ex: Kelas - Siswa
1 kelas memiliki banyak siswa


Many to Many -> 
ex: Mahasiswa - Matkul 
1 Mahasiswa bisa mengambil byk matkul
1 Matkul bisa dimiliki oleh byk Mahasiswa


todolist -> model User dan model Todo 
model User -> id, email, name, password
model Todo -> id , title, description,status


rekap:
1. npm init -y -> initialize project
2. npm i express mysql2 -> untuk install express dan mysql
3. npm i -D sequelize-cli , npm i sequelize
4. npx sequelize init / sequelize init -> initiate sequelize
5. .gitignore -> node_modules
6. config.json -> bikin nama db dan setup uname sm pass
7. create db -> npx sequelize db:create
8. generate model -> npx sequelize model:generate --name NamaModel --attributes entity:data type
//npx sequelize model:generate --name todo --attributes entity:string
//untuk nama model harus PascalCase 
9. folder controllers,app.js, folder Routes
10. bikin migration u/ membuat foreignkey -> npx sequelize migration:generate --name add-UserId-into-Todo untuk -> bikin column untuk foreignkey
11. migrate ke dalam db -> npx sequelize db:migrate (semua) --name 20220104065812-create-todo (1 file)
12. constraint dan validation
13. mengolah logic di dalam controller 
14. npm i jsonwebtoken bcrypt dotenv
15. bcrypt -> enkripsi password
16. jwt -> membuat sebuat token 
17. dotenv -> agar developer lain tidak bisa liat secret key yg telah dibuat 
18. buat folder helpers -> bcrypt,jwt
19. buat folder middlewares -> authenticate dan authorize


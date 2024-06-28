# Versta-test
Папка Versta-test содержит backend логику, папка frontend - frontend.

Краткое описание действий, необходимых для запуска проекта:
### 1. Клонирование репозитория (используя cmd):

git clone https://github.com/demurelian/Versta-test.git

### 2. Запуск БД и настройка строки подключения в файле Versta-test/appsettings.json
По скольку проект был разработан на локальной БД MS Sql Server, для корректной работы потребуется поднять свою БД MS Sql Server, изменить в строке подключения сервер (в строке после "Server=...") и имя бд ("Database=...").
В конце концов строка подключения должна иметь вид "Database": "Server=YourMSSQlServer;Database=YourDatabaseName;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"

### 3. Запуск frontend части и добавление адреса, на котором она развернулась в backend.
В файле Versta-test/Program.cs в строке №13 (policy.WithOrigins("http://localhost:5173");) нужно указать ваш адрес, на котором развернулся frontend, чтобы он имел доступ к backend логике.

Для запуска frontend необходимо (при установленном node.js, используя cmd), находясь в корневой папке проекта

cd frontend

cd orders-pj

npm install

npm run dev (после данного шага в консоли отобразиться адрес)


### 4. Запуск backend части (при установленном .NET SDK 8, используя cmd)
Находясь в корневой папке проекта:

cd Versta-test

dotnet restore

dotnet run


При правильном выполнении шагов, запуск должен пройти успешно и перед вами откроется следующий вид приложения:

![GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2d6anByMHJlcTQxZHN5ZWU4bGpodXF5b29zMmpsbThwMWQyMmM4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FWjAhJwR5ffffkiCsp/giphy.gif)

{
    inux:{
        'change_directory': 'cd ',
            'create_directory': 'mkdir'
    },
    mysql:{
        'setup':'sudo apt-get install mysql-server',
            'configration': 'mysql_secure_installation',
            'use mysql': ' sudo mysql -u username -p',
            'show database': 'show databases;',
            'create user': "GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';"
        'create database': 'CREATE DATABASE tutorial_database;',
            'delete all record in a table': 'TRUNCATE TABLE  table_name;'
    },
    phpstorm:{
        sudo apt update
        sudo apt install snapd
        sudo snap install phpstorm --classic
    },
    git:{
        'set-url':'git remote add origin https://<USERNAME>:<PASSWORD>@github.com/path/to/repo.git'
    },
    phpserver:{
        'Server_setup': 'sudo apt-get install apache2',
            'php restart': 'sudo service php7.4-fpm restart',
            'apache server restart': 'sudo service apache2 restart'

    }
}

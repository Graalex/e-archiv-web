/**
 * Конфигурация сервера
 * @type  object
 * db: {}       параметры подключения к базе данных;
 *  security: {} параметры безопасности
 *  server:      настройки сервера {
 *    listenPort:  number   порт,
 *    securePort:  number   порт,
 *    clientDir:   string   расположение каталога со статическими файлами
 *
 */
module.exports = {
	db: {},
	security: {},
	server: {
		listenPort: 9000,
		securePort: 9433,
		clientDir: __dirname + '/public/'
	}
};

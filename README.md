# [Посадочная страница](http://www.creditnet.ru/pages/connections/?utm_source=github) для продукта "Связи между участниками закупок"

## Статистика

### Статистика посещений посадочной страницы

Сбор статистики посещений посадочной страницы осуществляется посредством UTM-меток в параметрах URL:
* `utm_source`
* `utm_medium`
* `utm_campaign`

#### URL посадочной страницы для размещения на внешних ресурсах

##### Фабрикант

`http://www.creditnet.ru/pages/connections/?utm_source=fabrikant&utm_medium=link&utm_campaign=fabrikant_promo`

Анализ статистики:

`fabrikant - link - fabrikant_promo`

##### Поиск НКБ

`http://www.creditnet.ru/pages/connections/?utm_source=nkb&utm_medium=link&utm_campaign=nkb_search`

Анализ статистики:

`nkb - link - nkb_search`

### Статистика переходов на страницы НКБ

Сбор статистики переходов на страницы НКБ осуществляется посредством UTM-меток в параметрах URL целевых страниц НКБ:
* `utm_source` - `nkb`
* `utm_medium` - `link`
* `utm_campaign` - `nkb_connections_landing`
* `utm_content` - значение берется из параметра `utm_campaign` URL-а посадочной страницы

#### Примеры

##### Фабрикант

Приход на посадочную страницу с Фабриканта.
Внутренняя ссылка на поиск НКБ:

`http://www.creditnet.ru/hyper/?utm_source=nkb&utm_medium=link&utm_campaign=nkb_connections_landing&utm_content=fabrikant_promo`

Анализ статистики перехода на поиск НКБ:

`nkb - link - nkb_connections_landing - fabrikant_promo`

##### Поиск НКБ

Приход на посадочную страницу с поиска НКБ.
Внутренняя ссылка на поиск НКБ:

`http://www.creditnet.ru/hyper/?utm_source=nkb&utm_medium=link&utm_campaign=nkb_connections_landing&utm_content=nkb_search`

Анализ статистики перехода на поиск НКБ:

`nkb - link - nkb_connections_landing - nkb_search`

### Достижение цели

#### Отправка заявки

Goal: `target_connections_order`

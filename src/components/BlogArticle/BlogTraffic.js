import React from "react";
import road from "../../images/article/road.png";
import traffic_lights from "../../images/article/traffic_lights.png";
import lattice from "../../images/article/lattice.png";
import traffic_jam from "../../images/article/traffic_jam.png";
import Blog from "../blog/Blog";

function BlogRecycle() {
  const [isOpenBlog, setIsOpenBlog] = React.useState(false);

  function openBlog() {
    setIsOpenBlog(true);
  }
  function componentDidMount() {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <section className="article" id="blog-traffic">
        {window.innerWidth > 600 ? (
          <>
            <div className="article__container">
              <div className={`article__image-container  ${
                  window.innerWidth > 1100 ? "article__image-container_medium-traffic" : "article__image-container_max-traffic"
                }`}>
                <img
                  className="article__image"
                  src={road}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__time">
                  4 мин &#32; &#183; &#32; &#32; 20 декабря 2021
                </p>
                <h1 className="article__title">
                  Как новейшие технологии помогают Москве решить проблему пробок
                  на дорогах?
                </h1>
                {window.innerWidth > 1100 ? (
                  <p className="article__text">
                    Компания «Видеофор» из Санкт-Петербурга выступила с
                    интересным предложением по разгрузке Московского дорожного
                    трафика. Компания занимается созданием систем компьютерного
                    зрения. Особенность их парадигмы — это работа с данными уже
                    существующих видеокамер. Цель создания интеллектуальной
                    платформы «Дорожная аналитика» заключается в том, чтобы
                    помочь транспортным службам быстрее реагировать на изменение
                    дорожной ситуации. Для этого платформа предоставляет целевые
                    метрики в режиме онлайн.
                  </p>
                ) : (
                  <p className="article__text">
                    Компания «Видеофор» из Санкт-Петербурга выступила с
                    интересным предложением по разгрузке Московского дорожного
                    трафика. Компания занимается созданием систем компьютерного
                    зрения. Особенность их парадигмы — это работа с данными уже
                    существующих видеокамер. Цель создания интеллектуальной
                    платформы «Дорожная аналитика» заключается в том, чтобы
                    помочь транспортным службам быстрее реагировать
                  </p>
                )}
                {window.innerWidth > 1100 ? (
                  <p className="article__text article__text-second">
                    Интеллектуальная платформа "Дорожная аналитика" сегодня
                    включает в себя три модуля — это распознавание аварий и ДТП,
                    распознавание дорожных заторов и государственных номеров
                    автомобилей.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="article__under-text-container">
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <>
                  <p className="article__text">
                    дорожной ситуации. Для этого платформа предоставляет целевые
                    метрики в режиме онлайн.
                  </p>
                  <p className="article__text article__text-second">
                    Интеллектуальная платформа "Дорожная аналитика" сегодня
                    включает в себя три модуля — это распознавание аварий и ДТП,
                    распознавание дорожных заторов и государственных номеров
                    автомобилей.
                  </p>
                </>
              )}
              <p
                className={`article__text ${
                  window.innerWidth > 1100 ? "" : "article__text-second"
                }`}
              >
                Москва – один из лучших городов для жизни, но его комфорт
                снижается из-за объема дорожных пробок. Московский водитель
                ежегодно тратит порядка 90 часов в транспортных заторах. Для
                Москвы дорожные пробки — это не абстрактные проблемы водителей и
                пассажиров. Это повышенный расход топлива и энергии
                общественного транспорта, препятствия для бесперебойной работы
                специального транспорта, включая снегоуборочные машины и
                эвакуторы.
              </p>
              <p className="article__text article__text-second">
                Сегодня в Москве более 40 тыс. светофоров. Из них около 2,5 тыс.
                — "умные". Информацию о транспортном потоке они получают с
                помощью индукционных петель или датчиков, вмонтированных в
                дорожное полотно на перекрестке. Эти решения уже хорошо
                зарекомендовали себя, однако, чтобы оборудовать всю транспортную
                сеть Москвы подобной техникой требуются значительные финансовые
                и временные ресурсы. Стоит отметить, что на рынке существуют и
                другие технические решения для мониторинга дорожной обстановке.
                Например, видеоаналитика и радиолокационные датчики
                интенсивности движения. Однако эти решения пока не получили
                повсеместного применения из-за ряда их недостатков.
              </p>
              <p className="article__text article__text-last">
                Что замечательно, Москва — это Безопасный город. На улицах и
                дорогах города сегодня функционирует уже порядка 200 тысяч
                видеокамер. И это число ежегодно увеличивается примерно на 20%.
                Именно этот факт открывает огромный потенциал для их
                переиспользования.
              </p>
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <h2 className="article__subtitle article__subtitle_right">
                  Что предлагает <br /> «Видеофор»?
                </h2>
              )}
            </div>

            <div className="article__container">
            <div className={`article__image-container  ${
                  window.innerWidth > 1100 ? "article__image-container_mini-traffic" : "article__image-container_medium-traffic-light"
                }`}>
                <img
                  className="article__image"
                  src={traffic_lights}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                {window.innerWidth > 1100 ? (
                  <h2 className="article__subtitle article__subtitle_left article__subtitle_text-container">
                    Что предлагает <br /> «Видеофор»?
                  </h2>
                ) : (
                  ""
                )}

                <p className="article__text">
                  Все просто: переиспользовать данные существующих камер для
                  распознавания дорожных инцидентов.
                </p>
                <p className="article__text article__text-second">
                  В своем решении компания сделала упор на возможности
                  переиспользования имеющихся видеоданных вне зависимости от
                  модели и характеристик видеокамеры. Это потребовало разработки
                  алгоритмов фильтрации фотоснимков от различных артефактов,
                  вызванных внешними факторами такими как свет, дождь или снег.
                </p>
                {window.innerWidth > 1100 ? (
                  <p className="article__text article__text-second">
                    Также, «Видеофор» акцентировали внимание на оптимизации
                    вычислительных алгоритмов, что позволило им значительно
                    снизить требования вычислительным мощностям. Это в свою
                    очередь существенно снижает общую стоимость использования
                    предлагаемой ими технологии.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="article__under-text-container">
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <p className="article__text">
                  Также, «Видеофор» акцентировали внимание на оптимизации
                  вычислительных алгоритмов, что позволило им значительно
                  снизить требования вычислительным мощностям. Это в свою
                  очередь существенно снижает общую стоимость использования
                  предлагаемой ими технологии.
                </p>
              )}

              <ul className="article__list">
                <p
                  className={`article__text ${
                    window.innerWidth > 1100 ? "" : "article__text-second"
                  }`}
                >
                  «Видеофор» попробовали изобразить карту боли дорожного
                  мониторинга Москвы, на которую выдвинули несколько положений:
                </p>
                <li className="article__list-item article__list-item_point">
                  — Любые даже незначительные дорожные инциденты создают заторы
                  и вызывают эскалацию дорожных пробок;
                </li>
                <li className="article__list-item article__list-item_point">
                  — Неправильно припаркованные автомобили снижают общую
                  пропускную способность дороги;
                </li>
                <li className="article__list-item article__list-item_point">
                  — Время обнаружения дорожных инцидентов является случайной
                  величиной, в основном зависящей от сознательности сообщающих
                  об этом очевидцев, что не позволяет обеспечить системное
                  управление дорожной сетью;
                </li>
                <li className="article__list-item article__list-item_point">
                  — Не информирование водителей электробусов о состоянии
                  дорожной сети на маршруте следования является риском сбоев в
                  работе электробусов.
                </li>
              </ul>
              <p className="article__text">
                Показательно рассмотреть мировой опыт того, как собирают данные
                и реагируют на дорожные инциденты в разных странах мира:
              </p>
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <ul className="article__list  article__list_container-disc">
                  <li
                    className={`article__list-item article__list-item_style-disc ${
                      window.innerWidth > 1100 ? "" : "article__text-second"
                    }`}
                  >
                    В Финляндии и США пробки определяется с помощью измерения
                    числа мобильных телефонов, которые находятся в автомобилях;
                  </li>
                  <li className="article__list-item article__list-item_style-disc">
                    В Сингапуре интеллектуальная транспортная система получает
                    данные от видеокамер, которыми оборудован каждый светофор,
                    автобус и каждый километр транспортной сети;
                  </li>
                </ul>
              )}
            </div>

            <div className="article__container">
              <div className={`article__image-container  ${
                  window.innerWidth > 1100 ? "article__image-container_mini-traffic" : "article__image-container_mini-traffic"
                }`}>
                <img
                  className="article__image"
                  src={lattice}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                {window.innerWidth > 1100 ? (
                  <ul className="article__list  article__list_container-disc">
                    <li className="article__list-item article__list-item_style-disc">
                      В Финляндии и США пробки определяется с помощью измерения
                      числа мобильных телефонов, которые находятся в
                      автомобилях;
                    </li>
                    <li className="article__list-item article__list-item_style-disc">
                      В Сингапуре интеллектуальная транспортная система получает
                      данные от видеокамер, которыми оборудован каждый светофор,
                      автобус и каждый километр транспортной сети;
                    </li>
                    <li className="article__list-item article__list-item_style-disc">
                      В Японии около трасс располагаются фиксированные датчики,
                      которые собирают данные о дорожной ситуации и, после
                      обработки в Центре дорожного движения, рассылаются
                      участникам дорожного движения на их навигационные
                      транспортные системы;
                    </li>
                    <li className="article__list-item article__list-item_style-disc">
                      В Израиле упор сделан на систему оповещения. Вдоль дорог
                      развешены специальные табло, которые указывают водителю
                      наиболее загруженные направления.
                    </li>
                  </ul>
                ) : (
                  <ul className="article__list  article__list_container-disc">
                    <li className="article__list-item article__list-item_style-disc">
                      В Японии около трасс располагаются фиксированные датчики,
                      которые собирают данные о дорожной ситуации и, после
                      обработки в Центре дорожного движения, рассылаются
                      участникам дорожного движения на их навигационные
                      транспортные системы;
                    </li>
                    <li className="article__list-item article__list-item_style-disc">
                      В Израиле упор сделан на систему оповещения. Вдоль дорог
                      развешены специальные табло, которые указывают водителю
                      наиболее загруженные направления.
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                Опираясь на лучший мировой опыт, «Видеофор» предложили
                рассмотреть три варианта пилотных проектов:
              </p>
              <ul className="article__list article__list_under-disc">
                <li className="article__list-item article__list-item_style-disc">
                  интеграция с открытым API приложения «Яндекс-пробки», чтобы
                  передавать данные о дорожных инцидентах и плотности заторов в
                  приложение и информировать водителей
                </li>
                <li className="article__list-item article__list-item_style-disc">
                  предоставление данных о загрузке транспортной сети водителям
                  электробусов, чтобы они могли оценивать прогнозный расчет пути
                  на маршруте с оставшимся зарядом аккумулятора
                </li>
                <li className="article__list-item article__list-item_style-disc">
                  информирование эвакуационных служб об автомобилях, нарушивших
                  правила парковки, чтобы сократить время на поиск нарушителей
                </li>
              </ul>
            </div>

            <div className="article__container">
              <div className={`article__image-container  ${
                  window.innerWidth > 1100 ? "article__image-container_mini-traffic-road" : "article__image-container_medium-traffic-road"
                }`}>
                <img
                  className="article__image"
                  src={traffic_jam}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <ul className="article__list">
                  <p className="article__text">
                    Что отрадно слышать, все эти предложения действительно могут
                    быть реализованы как по отдельности, так и вместе. Другие
                    хорошие новости:
                  </p>
                  <li className="article__list-item  article__list-item_point">
                    — Стоимость использования технологии по переиспользованию
                    существующих камер, как минимум, вдвое дешевле других
                    решений, использующихся для мониторинга дорожной сети, так
                    как необходимость устанавливать дополнительные камеры
                    отпадает сама собой. А значит, получится существенная
                    экономия на закупке, монтаже и техобслуживании оборудования.
                  </li>
                  {window.innerWidth > 1100 ? (
                    <li className="article__list-item  article__list-item_point">
                      — Данные о дорожных инцидентах и обстановке, получаемые в
                      режиме онлайн, позволяют сократить время реакции на
                      проблему и ее устранение в среднем на 5-10 минут, что в
                      свою очередь уменьшит негативное влияние инцидентов на
                      эскалацию дорожных заторов и снизит среднее время простоя
                      водителей транспортной сети города.
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>

            <div className="article__under-text-container">
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <ul className="article__list">
                  <li className="article__list-item  article__list-item_point">
                    — Данные о дорожных инцидентах и обстановке, получаемые в
                    режиме онлайн, позволяют сократить время реакции на проблему
                    и ее устранение в среднем на 5-10 минут, что в свою очередь
                    уменьшит негативное влияние инцидентов на эскалацию дорожных
                    заторов и снизит среднее время простоя водителей
                    транспортной сети города.
                  </li>
                </ul>
              )}

              <p className="article__text">
                Такое ощущение, что идею платформы «Дорожная Аналитика» компании
                «Видеофор» продиктовало время, места и несколько часов в
                Московской пробке. Надеемся, у них все получится!
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="article__container">
              <div className="article__image-container article__image-container_medium-traffic">
                <img
                  className="article__image"
                  src={road}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__time">
                  4 мин &#32; &#183; &#32; &#32; 20 декабря 2021
                </p>
                <h1 className="article__title">
                  Как новейшие технологии помогают Москве решить проблему пробок
                  на дорогах?
                </h1>
                <p className="article__text">
                  Компания «Видеофор» из Санкт-Петербурга выступила с интересным
                  предложением по разгрузке Московского дорожного трафика.
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                Компания занимается созданием систем компьютерного зрения.
                Особенность их парадигмы — это работа с данными уже существующих
                видеокамер. Цель создания интеллектуальной платформы «Дорожная
                аналитика» заключается в том, чтобы помочь транспортным службам
                быстрее реагировать на изменение дорожной ситуации. Для этого
                платформа предоставляет целевые метрики в режиме онлайн.
              </p>
              <p className="article__text article__text-second">
                Интеллектуальная платформа "Дорожная аналитика" сегодня включает
                в себя три модуля — это распознавание аварий и ДТП,
                распознавание дорожных заторов и государственных номеров
                автомобилей.
              </p>
              <p className="article__text article__text-second">
                Москва – один из лучших городов для жизни, но его комфорт
                снижается из-за объема дорожных пробок. Московский водитель
                ежегодно тратит порядка 90 часов в транспортных заторах. Для
                Москвы дорожные пробки — это не абстрактные проблемы водителей и
                пассажиров. Это повышенный расход топлива и энергии
                общественного транспорта, препятствия для бесперебойной работы
                специального транспорта, включая снегоуборочные машины и
                эвакуторы.
              </p>
              <p className="article__text article__text-second">
                Сегодня в Москве более 40 тыс. светофоров. Из них около 2,5 тыс.
                — "умные". Информацию о транспортном потоке они получают с
                помощью индукционных петель или датчиков, вмонтированных в
                дорожное полотно на перекрестке. Эти решения уже хорошо
                зарекомендовали себя, однако, чтобы оборудовать всю транспортную
                сеть Москвы подобной техникой требуются значительные финансовые
                и временные ресурсы. Стоит отметить, что на рынке существуют и
                другие технические решения для мониторинга дорожной обстановке.
                Например, видеоаналитика и радиолокационные датчики
                интенсивности движения. Однако эти решения пока не получили
                повсеместного применения из-за ряда их недостатков.
              </p>
              <p className="article__text article__text-second">
                Что замечательно, Москва — это Безопасный город. На улицах и
                дорогах города сегодня функционирует уже порядка 200 тысяч
                видеокамер. И это число ежегодно увеличивается примерно на 20%.
                Именно этот факт открывает огромный потенциал для их
                переиспользования.
              </p>
              <h2 className="article__subtitle article__subtitle_left article__subtitle_text-container">
                Что предлагает <br /> «Видеофор»?
              </h2>
            </div>

            <div className="article__container">
              <div className="article__image-container article__image-container_mini-traffic">
                <img
                  className="article__image"
                  src={traffic_lights}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  Все просто: переиспользовать данные существующих камер для
                  распознавания дорожных инцидентов.
                </p>
                <p className="article__text article__text-second">
                  В своем решении компания сделала упор на возможности
                  переиспользования имеющихся видеоданных вне зависимости от
                  модели
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                и характеристик видеокамеры. Это потребовало разработки
                алгоритмов фильтрации фотоснимков от различных артефактов,
                вызванных внешними факторами такими как свет, дождь или снег.
              </p>
              <p className="article__text article__text-second">
                Также, «Видеофор» акцентировали внимание на оптимизации
                вычислительных алгоритмов, что позволило им значительно снизить
                требования вычислительным мощностям. Это в свою очередь
                существенно снижает общую стоимость использования предлагаемой
                ими технологии.
              </p>
              <ul className="article__list">
                <p className="article__text article__text-second">
                  «Видеофор» попробовали изобразить карту боли дорожного
                  мониторинга Москвы, на которую выдвинули несколько положений:
                </p>
                <li className="article__list-item article__list-item_point article__list-item_point-traffic">
                  — Любые даже незначительные дорожные инциденты создают заторы
                  и вызывают эскалацию дорожных пробок;
                </li>
                <li className="article__list-item article__list-item_point article__list-item_point-traffic">
                  — Неправильно припаркованные автомобили снижают общую
                  пропускную способность дороги;
                </li>
                <li className="article__list-item article__list-item_point article__list-item_point-traffic">
                  — Время обнаружения дорожных инцидентов является случайной
                  величиной, в основном зависящей от сознательности сообщающих
                  об этом очевидцев, что не позволяет обеспечить системное
                  управление дорожной сетью;
                </li>
                <li className="article__list-item article__list-item_point article__list-item_point-traffic">
                  — Не информирование водителей электробусов о состоянии
                  дорожной сети на маршруте следования является риском сбоев в
                  работе электробусов.
                </li>
              </ul>
              <p className="article__text article__text-last">
                Показательно рассмотреть мировой опыт того, как собирают данные
                и реагируют на дорожные инциденты в разных странах мира:
              </p>
              <ul className="article__list  article__list_container-disc">
                <li className="article__list-item article__list-item_style-disc article__list-item_point-traffic">
                  В Финляндии и США пробки определяется с помощью измерения
                  числа мобильных телефонов, которые находятся в автомобилях;
                </li>
                <li className="article__list-item article__list-item_style-disc">
                  В Сингапуре интеллектуальная транспортная система получает
                  данные от видеокамер, которыми оборудован каждый светофор,
                  автобус и каждый километр транспортной сети;
                </li>
                <li className="article__list-item article__list-item_style-disc">
                  В Японии около трасс располагаются фиксированные датчики,
                  которые собирают данные о дорожной ситуации и, после обработки
                  в Центре дорожного движения, рассылаются участникам дорожного
                  движения на их навигационные транспортные системы;
                </li>
              </ul>
            </div>

            <div className="article__container">
              <div className="article__image-container article__image-container_mini-traffic">
                <img
                  className="article__image"
                  src={lattice}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <ul className="article__list  article__list_container-disc">
                  <li className="article__list-item article__list-item_style-disc">
                    В Израиле упор сделан на систему оповещения. Вдоль дорог
                    развешены специальные табло, которые указывают водителю
                    наиболее загруженные направления.
                  </li>
                </ul>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                Опираясь на лучший мировой опыт, «Видеофор» предложили
                рассмотреть три варианта пилотных проектов:
              </p>
              
              <ul className="article__list article__list_under-disc">
                <li className="article__list-item article__list-item_style-disc">
                  интеграция с открытым API приложения «Яндекс-пробки», чтобы
                  передавать данные о дорожных инцидентах и плотности заторов в
                  приложение и информировать водителей
                </li>
                <li className="article__list-item article__list-item_style-disc">
                  предоставление данных о загрузке транспортной сети водителям
                  электробусов, чтобы они могли оценивать прогнозный расчет пути
                  на маршруте с оставшимся зарядом аккумулятора
                </li>
                <li className="article__list-item article__list-item_style-disc">
                  информирование эвакуационных служб об автомобилях, нарушивших
                  правила парковки, чтобы сократить время на поиск нарушителей
                </li>
              </ul>
            </div>

            <div className="article__container">
              <div className="article__image-container article__image-container_mini-traffic">
                <img
                  className="article__image"
                  src={traffic_jam}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  Что отрадно слышать, все эти предложения действительно могут
                  быть реализованы как по отдельности, так и вместе. Другие
                  хорошие новости:
                </p>
                <p className="article__text article__text-second">
                  — Стоимость использования технологии по переиспользованию
                  существующих камер, как минимум, вдвое дешевле
                </p>{" "}
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text article__text-second">
                других решений, использующихся для мониторинга дорожной сети,
                так как необходимость устанавливать дополнительные камеры
                отпадает сама собой. А значит, получится существенная экономия
                на закупке, монтаже и техобслуживании оборудования.
              </p>
              <p className="article__text article__text-second">
                — Данные о дорожных инцидентах и обстановке, получаемые в режиме
                онлайн, позволяют сократить время реакции на проблему и ее
                устранение в среднем на 5-10 минут, что в свою очередь уменьшит
                негативное влияние инцидентов на эскалацию дорожных заторов и
                снизит среднее время простоя водителей транспортной сети города.
              </p>
              <p className="article__text article__text-second">
                Такое ощущение, что идею платформы «Дорожная Аналитика» компании
                «Видеофор» продиктовало время, места и несколько часов в
                Московской пробке. Надеемся, у них все получится!
              </p>
            </div>
          </>
        )}
      </section>
      {window.innerWidth > 500 ? (
        <button
        className="article__button_arroy"
        onClick={componentDidMount}
      ></button>
      ) : ''}
      <button className="blog__button" onClick={openBlog}>
        ДРУГИЕ СТАТЬИ
      </button>
      {isOpenBlog ? <Blog /> : ""}
    </>
  );
}

export default BlogRecycle;

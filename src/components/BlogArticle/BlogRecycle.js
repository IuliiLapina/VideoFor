import React from "react";
import garbage_in_the_sea from "../../images/article/garbage_in_the_sea.png";
import garbage_bottle from "../../images/article/garbage_bottle.png";
import trash_can from "../../images/article/trash_can.png";
import trash_can_mini from "../../images/article/trash_can_mini.png";
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
      <section className="article" id="blog-recycle">
        {window.innerWidth > 1100 ? (
          <>
            <div className="article__container">
              <div className={`article__image-container ${window.innerWidth > 1100 ? 'article__image-container_max-recycle' : 'article__image-container_medium-maxi-beach'}`}>
                <img
                  className="article__image"
                  src={garbage_in_the_sea}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__time">
                  5 мин &#32; &#183; &#32; &#32; 18 декабря 2021
                </p>
                <h1 className="article__title">
                  Когда начнет работать раздельный сбор мусора, и зачем нужен
                  видеомониторинг площадок для мусорных контейнеров
                </h1>
                {window.innerWidth > 1100 ? (
                  <p className="article__text">
                    Когда, наконец, человечество осознало, что создает слишком
                    много мусора, ситуация в мире уже приблизилась к
                    катастрофической. "Мусорный остров" в Тихом океане размером
                    в три Франции и огромные площади суши, отданные под
                    захоронение мусора, заставили мировое сообщество начать
                    поиск решения мусорной проблемы. Например, только в России
                    площадь полигонов для захоронения коммунальных отходов
                    сегодня сравнима с территорией Нидерландов.
                  </p>
                ) : (
                  <p className="article__text">
                    Когда, наконец, человечество осознало, что создает слишком
                    много мусора, ситуация в мире уже приблизилась к
                    катастрофической. "Мусорный остров" в Тихом океане размером
                    в три Франции и огромные площади суши, отданные под
                    захоронение мусора, заставили мировое сообщество начать
                    поиск решения мусорной проблемы.
                  </p>
                )}
              </div>
            </div>

            <div className="article__under-text-container">
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <p className="article__text">
                  Например, только в России площадь полигонов для захоронения
                  коммунальных отходов сегодня сравнима с территорией
                  Нидерландов.
                </p>
              )}

              <p
                className={`article__text ${
                  window.innerWidth > 1100 ? "" : "article__text-second"
                }`}
              >
                Решение проблемы оказалось непростым, ведь весь накопленный
                мусор невозможно просто сжечь. Во-первых, после сжигания
                остается ядовитый шлак, который необходимо захоронить на
                полигоне по всем охранным правилам. Во-вторых, чтобы это
                технология была относительно безопасной и до минимума снизила
                количество выброшенных в атмосферу вредных веществ, требуются
                значительные финансовые инвестиции. А в-третьих, мусора слишком
                много.
              </p>
              <p className="article__text article__text-second">
                Поэтому, при совокупности взаимосвязанных факторов, главным,
                экономически и экологически оправданным инструментом в борьбе с
                накоплением мусора сегодня является его вторичная переработка.
                Значительная часть генерируемых нами отходов по сути
                представляет собой вторсырье (бумага, пластик, стекло, металл) и
                может быть переработана на специальных предприятиях. Вначале
                казалось: все, что нужно — это организация раздельного сбора
                мусора. Ведь это больше организационный и даже идеологический
                процесс, нежели технический.
              </p>
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <p className="article__text article__text-second">
                  В теории люди должны отделить биоразлагаемые отходы от
                  вторсырья, складывая их в разные контейнеры. Вторсырье должны
                  отвезти на мусороперерабатывающие заводы, чтобы произвести из
                  него новый товар. Таким образом, создавая подобные процессы в
                  стиле «лента Мебиуса» можно значительно сократить объемы
                  мусора, который требует сжигания или захоронения.
                </p>
              )}
            </div>

            <div className="article__container">
              <div className="article__image-container article__image-container_mega-max-recycle">
                <img
                  className="article__image"
                  src={garbage_bottle}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                {window.innerWidth > 1100 ? (
                  <p className="article__text">
                    В теории люди должны отделить биоразлагаемые отходы от
                    вторсырья, складывая их в разные контейнеры. Вторсырье
                    должны отвезти на мусороперерабатывающие заводы, чтобы
                    произвести из него новый товар. Таким образом, создавая
                    подобные процессы в стиле «лента Мебиуса» можно значительно
                    сократить объемы мусора, который требует сжигания или
                    захоронения.
                  </p>
                ) : (
                  ""
                )}
                <p
                  className={`article__text ${
                    window.innerWidth > 1100 ? "article__text-last" : ""
                  }`}
                >
                  На практике попытки коммерческих и общественных организаций, и
                  даже целых регионов России организовать раздельный сбор мусора
                  столкнулись с рядом сложностей.
                </p>
                <p className="article__text article__text-second">
                  Во-первых, по прежнему невысокая доля участия населения в
                  процессе. Труд той части населения, которая осуществляет
                  раздельный сбор мусора, нивелируется той частью населения,
                  которая этого не делает.
                </p>
                <p className="article__text article__text-second">
                  Во-вторых, региональные операторы по обращению с бытовыми
                  отходами при транспортировке мусора могут допускать смешивание
                  контейнеров с вторсырьем и контейнеров с несортированным
                  мусором. Это полностью обесценивает попытки людей изменить
                  текущую экологическую ситуацию.
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                В-третьих, несвоевременный вывоз мусора с площадок для
                размещения мусорных контейнеров приводит к замусоренности
                окружающей территории, включая придомовую территорию жилых
                домов. Это еще один факт, который отрицательно сказывается на
                формировании у населения эко-культуры, ведь, как утверждает
                теория «разбитых окон»: попустительство общества к мелким
                правонарушениям провоцирует людей на совершение аналогичных или
                более серьёзных правонарушений.
              </p>
              <h2 className="article__subtitle article__subtitle_left">
                Мировой опыт
              </h2>
              <p className="article__text">
                В Швейцарии, площадь которой чуть меньше территории всех
                российских полигонов для захоронения мусора, у населения очень
                высокоразвитый уровень эко-культуры. Гражданин Швейцарии может
                самостоятельно осуществлять раздельный сбор мусора или оплатить
                повышенный тариф за утилизацию смешанного мусора, который
                отсортирует за эти деньги кто-то другой. А для нарушителей
                установленного порядка в стране работает «мусорная полиция»,
                которая ведет контроль за тем, кто сколько создает мусора и как
                его выносит. За нарушение правил обработки отходов предусмотрены
                высокие штрафы, а для доказательства фактов нарушений
                используются материалы видеофиксации.
              </p>
              <p className="article__text article__text-second">
                Сформированная в развитых странах культура обращения с бытовыми
                отходами показывает, что наступление положительной динамики в
                раздельном обращении с мусором наступает только после
                обеспечения площадок для мусорных контейнеров средствами
                мониторинга. Как правило, внутрь мусорного контейнера
                устанавливают ультразвуковой датчик, который контролирует
                степень его наполненности и передает в коммунальную службу
                информацию о необходимости своевременного вывоза мусора. Также
                существуют современные разработки, включающие в себя установку
                видеокамер для распознавания лиц тех, кто выбрасывает мусор
                внутрь контейнеров и весы для взвешивания массы выброшенного
                мусора.
              </p>
              <h2 className="article__subtitle article__right-column">
                Техническое решение
              </h2>
            </div>

            <div className="article__container">
              <div className="article__image-container article__image-container_mega-max-recycle">
                <img
                  className="article__image"
                  src={trash_can}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  Наиболее перспективной в сравнительном смысле выглядит
                  технология мониторинга переполнения мусорных контейнеров
                  методами видеоаналитики. Для работы технологии достаточно
                  данных с камер видеонаблюдения с различимой зоной зева
                  контейнера, которая обрабатывается с помощью технологий
                  машинного зрения и искусственного интеллекта.
                </p>
                {window.innerWidth > 1100 ? (
                  <p className="article__text article__text-second">
                    Преимущество заключается в том, что одна видеокамера может
                    осуществлять мониторинг нескольких контейнеров размещенных
                    на площадке (порядка 6-8 контейнеров), а также всей
                    прилегающей территории. Это значительно более экономично,
                    чем установка и обслуживание датчиков в каждый контейнер.
                    Кроме того, такое решение соответствует принципу
                    переиспользования инфраструктуры и данных, части концепции
                    «Умный город». В настоящее время во дворах многих жилых
                    домов уже установлены видеокамеры для обеспечения
                    безопасности, и они непрерывно генерируют видеоданные.
                  </p>
                ) : (
                  <p className="article__text article__text-second">
                    Преимущество заключается в том, что одна видеокамера может
                    осуществлять мониторинг нескольких контейнеров размещенных
                    на площадке (порядка 6-8 контейнеров),
                  </p>
                )}
              </div>
            </div>

            <div className="article__under-text-container">
              {window.innerWidth > 1100 ? (
                ""
              ) : (
                <p className="article__text">
                  а также всей прилегающей территории. Это значительно более
                  экономично, чем установка и обслуживание датчиков в каждый
                  контейнер. Кроме того, такое решение соответствует принципу
                  переиспользования инфраструктуры и данных, части концепции
                  «Умный город». В настоящее время во дворах многих жилых домов
                  уже установлены видеокамеры для обеспечения безопасности, и
                  они непрерывно генерируют видеоданные.
                </p>
              )}

              <ul className="article__list ">
                <p
                  className={`article__text ${
                    window.innerWidth > 1100 ? "" : "article__text-second"
                  }`}
                >
                  Переиспользование этих данных для мониторинга переполнения
                  мусорных контейнеров возможно и экономически оправданно. Кроме
                  того, видеоаналитика позволяет, одновременно решать и другие
                  полезные задачи для улучшения комфорта населения. Вот часть из
                  них:
                </p>
                <li className="article__list-item">
                  — мониторинг порчи или кражи контейнера;
                </li>
                <li className="article__list-item">
                  — раннее предупреждение возгораний мусора;
                </li>
                <li className="article__list-item">
                  — несанкционированный выброс мусора;
                </li>
                <li className="article__list-item">
                  — оценка площади разброса мусора;
                </li>
                <li className="article__list-item">
                  — фиксация автотранспорта, создающего помехи движению и
                  доступа к площадке;
                </li>
                <li className="article__list-item">
                  — состояние очистки площадки и прилегающей к ней территории от
                  снега;
                </li>
                <li className="article__list-item">
                  — мониторинг открытых люков и состояния дорожного полотна;
                </li>
                <li className="article__list-item">
                  — мониторинг состояния зеленых насаждений.
                </li>
              </ul>
              <p className="article__text">
                В России региональный оператор по обращению с бытовыми отходами,
                как правило, не владеет информацией̆ о текущей и прогнозируемой
                наполненности контейнеров для мусора, поэтому организовывает
                работу мусоровозов по заданному расписанию, а для подтверждения
                размещает графики вывоза мусора в открытом доступе. Однако,
                накопление бытовых отходов населением является динамической
                величиной, поэтому логистика мусоровозов по статическим
                маршрутам оказывается неоптимальной. В результате мусоровозы
                совершают либо поездки к незаполненным контейнерам (лишние
                затраты), либо к переполненным контейнерам (приводящим к
                замусориванию территории, жалобам жителей и санкциям со стороны
                муниципальных властей).
              </p>
              <p className="article__text article__text-last">
                Так как российское законодательство в настоящее время не
                предъявляет требований к обеспечению площадок для хранения
                бытовых отходов средствами мониторинга, эта деятельность
                регулируется рынком. Именно поэтому все больше российских
                региональных операторов по обращению с бытовыми отходами
                внедряют системы мониторинга наполнения мусорных контейнеров,
                ведь они позволяет организовать вывоз мусора по принципу «точно
                в срок». Для населения это означает чистоту и порядок на
                площадках, а для регионального оператора — значительную экономию
                затрат на перевозках и обеспечение высоких стандартов качества
                обслуживания.
              </p>
              <h2 className="article__subtitle article__right-column">
                Выводы
              </h2>
            </div>

            <div className="article__container">
              <div className="article__image-container ">
                <img
                  className="article__image"
                  src={trash_can_mini}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  Раздельный сбор мусора в России по-настоящему заработает
                  только одновременно с организацией экономически оправданного
                  процесса по раздельному вывозу мусора. Если по требованиям
                  СанПиН смешанный мусор необходимо вывозить зимой не реже
                  одного раза в три дня, а летом не реже одного раза в день, то
                  контейнеры с вторсырьем по новым требованиям допускается
                  опорожнять до одного раза в семь дней. Поэтому, чтобы рейсы
                  мусоровозов к площадкам для хранения бытовых отходов и
                  вторсырья были экономически оправданными, необходимо полностью
                  исключить поездки к незаполненным контейнерам, используя
                  данные о заполнении контейнеров и выстраивая оптимальные
                  логистические маршруты.
                </p>
                {window.innerWidth > 1100 ? (
                  <p className="article__text article__text-second">
                    Мировой рынок утилизации отходов прогнозирует уверенный рост
                    в горизонте 2020-2025 лет на 75%. Требования населения к
                    качеству оказываемых услуг возрастают по мере перехода
                    городов в категорию «Умный город». Это вызывает усиление
                    контрактных требований к своевременному вывозу бытовых
                    отходов с площадок и обострение конкуренции между
                    региональными операторами по обращению с бытовыми отходами.
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
                  Мировой рынок утилизации отходов прогнозирует уверенный рост в
                  горизонте 2020-2025 лет на 75%. Требования населения к
                  качеству оказываемых услуг возрастают по мере перехода городов
                  в категорию «Умный город». Это вызывает усиление контрактных
                  требований к своевременному вывозу бытовых отходов с площадок
                  и обострение конкуренции между региональными операторами по
                  обращению с бытовыми отходами.
                </p>
              )}
              <p
                className={`article__text ${
                  window.innerWidth > 1100 ? "" : "article__text-second"
                }`}
              >
                Поэтому региональным операторам необходимо начинать уже сегодня
                создавать систему мониторинга, которая будет жизненно необходима
                завтра. На какой технологии будет работать эта система и какие
                метрики мониторинга будут в ней обрабатываться, каждый
                регоператор будет решать исходя из места, времени и
                обстоятельств.
              </p>
              <p className="article__text article__text-second">
                Единственное, о чем можно говорить с уверенностью, это о том,
                что время раздельного обращения с мусором в нашей стране пришло,
                а отступать нам некуда, позади – планета, здоровье и наша жизнь.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="article__container">
              <div className={`article__image-container ${window.innerWidth < 1100 ? 'article__image-container_mini-recycle' : ''} ${window.innerWidth < 500 ? 'article__image-container_mini-plus-recycle' : ''}`}>
                <img
                  className="article__image"
                  src={garbage_in_the_sea}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__time">
                  5 мин &#32; &#183; &#32; &#32; 18 декабря 2021
                </p>
                <h1 className="article__title article__title_little">
                  Когда начнет работать раздельный сбор мусора, и зачем нужен
                  видеомониторинг площадок для мусорных контейнеров
                </h1>
                <p className="article__text">
                  Когда, наконец, человечество осознало, что создает слишком
                  много мусора, ситуация в мире уже приблизилась к
                  катастрофической.
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                "Мусорный остров" в Тихом океане размером в три Франции и
                огромные площади суши, отданные под захоронение мусора,
                заставили мировое сообщество начать поиск решения мусорной
                проблемы. Например, только в России площадь полигонов для
                захоронения коммунальных отходов сегодня сравнима с территорией
                Нидерландов. Например, только в России площадь полигонов для
                захоронения коммунальных отходов сегодня сравнима с территорией
                Нидерландов.
              </p>
              <p className="article__text article__text-second">
                Решение проблемы оказалось непростым, ведь весь накопленный
                мусор невозможно просто сжечь. Во-первых, после сжигания
                остается ядовитый шлак, который необходимо захоронить на
                полигоне по всем охранным правилам. Во-вторых, чтобы это
                технология была относительно безопасной и до минимума снизила
                количество выброшенных в атмосферу вредных веществ, требуются
                значительные финансовые инвестиции. А в-третьих, мусора слишком
                много.
              </p>
              <p className="article__text article__text-second">
                Поэтому, при совокупности взаимосвязанных факторов, главным,
                экономически и экологически оправданным инструментом в борьбе с
                накоплением мусора сегодня является его вторичная переработка.
                Значительная часть генерируемых нами отходов по сути
                представляет собой вторсырье (бумага, пластик, стекло, металл) и
                может быть переработана на специальных предприятиях. Вначале
                казалось: все, что нужно — это организация раздельного сбора
                мусора. Ведь это больше организационный и даже идеологический
                процесс, нежели технический.
              </p>
              <p className="article__text article__text-second">
                В теории люди должны отделить биоразлагаемые отходы от
                вторсырья, складывая их в разные контейнеры. Вторсырье должны
                отвезти на мусороперерабатывающие заводы, чтобы произвести из
                него новый товар. Таким образом, создавая подобные процессы в
                стиле «лента Мебиуса» можно значительно сократить объемы мусора,
                который требует сжигания или захоронения.
              </p>
            </div>

            <div className="article__container">
              <div className={`article__image-container ${window.innerWidth < 1100 ? 'article__image-container_medium-traffic' : ''} ${window.innerWidth < 500 ? 'article__image-container_medium-recycle' : ''}`}>
                <img
                  className="article__image"
                  src={garbage_bottle}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  На практике попытки коммерческих и общественных организаций, и
                  даже целых регионов России организовать раздельный сбор мусора
                  столкнулись с рядом сложностей.
                </p>
                <p className="article__text article__text-second">
                  Во-первых, по прежнему невысокая доля участия населения в
                  процессе. Труд той части населения, которая осуществляет
                  раздельный сбор мусора, нивелируется той частью населения,
                  которая этого не делает.
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text ">
                Во-вторых, региональные операторы по обращению с бытовыми
                отходами при транспортировке мусора могут допускать смешивание
                контейнеров с вторсырьем и контейнеров с несортированным
                мусором. Это полностью обесценивает попытки людей изменить
                текущую экологическую ситуацию.
              </p>
              <p className="article__text article__text-second">
                В-третьих, несвоевременный вывоз мусора с площадок для
                размещения мусорных контейнеров приводит к замусоренности
                окружающей территории, включая придомовую территорию жилых
                домов. Это еще один факт, который отрицательно сказывается на
                формировании у населения эко-культуры, ведь, как утверждает
                теория «разбитых окон»: попустительство общества к мелким
                правонарушениям провоцирует людей на совершение аналогичных или
                более серьёзных правонарушений.
              </p>
              <h2 className="article__subtitle article__subtitle_left">
                Мировой опыт
              </h2>
              <p className="article__text">
                В Швейцарии, площадь которой чуть меньше территории всех
                российских полигонов для захоронения мусора, у населения очень
                высокоразвитый уровень эко-культуры. Гражданин Швейцарии может
                самостоятельно осуществлять раздельный сбор мусора или оплатить
                повышенный тариф за утилизацию смешанного мусора, который
                отсортирует за эти деньги кто-то другой. А для нарушителей
                установленного порядка в стране работает «мусорная полиция»,
                которая ведет контроль за тем, кто сколько создает мусора и как
                его выносит. За нарушение правил обработки отходов предусмотрены
                высокие штрафы, а для доказательства фактов нарушений
                используются материалы видеофиксации.
              </p>
              <p className="article__text article__text-second">
                Сформированная в развитых странах культура обращения с бытовыми
                отходами показывает, что наступление положительной динамики в
                раздельном обращении с мусором наступает только после
                обеспечения площадок для мусорных контейнеров средствами
                мониторинга. Как правило, внутрь мусорного контейнера
                устанавливают ультразвуковой датчик, который контролирует
                степень его наполненности и передает в коммунальную службу
                информацию о необходимости своевременного вывоза мусора. Также
                существуют современные разработки, включающие в себя установку
                видеокамер для распознавания лиц тех, кто выбрасывает мусор
                внутрь контейнеров и весы для взвешивания массы выброшенного
                мусора.
              </p>
              <h2 className="article__subtitle article__right-column">
                Техническое решение
              </h2>
            </div>

            <div className="article__container">
              <div className={`article__image-container ${window.innerWidth < 1100 ? 'article__image-container_mini-recycle' : 'article__image-container_medium'} ${window.innerWidth < 500 ? 'article__image-container_mini-plus-recycle-trash-cah' : ''}`}>
                <img
                  className="article__image"
                  src={trash_can}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  Наиболее перспективной в сравнительном смысле выглядит
                  технология мониторинга переполнения мусорных контейнеров
                  методами видеоаналитики. Для работы технологии достаточно
                  данных с камер видеонаблюдения с различимой зоной зева
                  контейнера, которая обрабатывается с помощью технологий
                  машинного зрения и искусственного интеллекта.
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text article__text-second">
                Преимущество заключается в том, что одна видеокамера может
                осуществлять мониторинг нескольких контейнеров размещенных на
                площадке (порядка 6-8 контейнеров), а также всей прилегающей
                территории. Это значительно более экономично, чем установка и
                обслуживание датчиков в каждый контейнер. Кроме того, такое
                решение соответствует принципу переиспользования инфраструктуры
                и данных, части концепции «Умный город». В настоящее время во
                дворах многих жилых домов уже установлены видеокамеры для
                обеспечения безопасности, и они непрерывно генерируют
                видеоданные.
              </p>

              <ul className="article__list ">
                <p className="article__text article__text-second">
                  Переиспользование этих данных для мониторинга переполнения
                  мусорных контейнеров возможно и экономически оправданно. Кроме
                  того, видеоаналитика позволяет, одновременно решать и другие
                  полезные задачи для улучшения комфорта населения. Вот часть из
                  них:
                </p>
                <li className="article__list-item">
                  — мониторинг порчи или кражи контейнера;
                </li>
                <li className="article__list-item">
                  — раннее предупреждение возгораний мусора;
                </li>
                <li className="article__list-item">
                  — несанкционированный выброс мусора;
                </li>
                <li className="article__list-item">
                  — оценка площади разброса мусора;
                </li>
                <li className="article__list-item">
                  — фиксация автотранспорта, создающего помехи движению и
                  доступа к площадке;
                </li>
                <li className="article__list-item">
                  — состояние очистки площадки и прилегающей к ней территории от
                  снега;
                </li>
                <li className="article__list-item">
                  — мониторинг открытых люков и состояния дорожного полотна;
                </li>
                <li className="article__list-item">
                  — мониторинг состояния зеленых насаждений.
                </li>
              </ul>
              <p className="article__text">
                В России региональный оператор по обращению с бытовыми отходами,
                как правило, не владеет информацией̆ о текущей и прогнозируемой
                наполненности контейнеров для мусора, поэтому организовывает
                работу мусоровозов по заданному расписанию, а для подтверждения
                размещает графики вывоза мусора в открытом доступе. Однако,
                накопление бытовых отходов населением является динамической
                величиной, поэтому логистика мусоровозов по статическим
                маршрутам оказывается неоптимальной. В результате мусоровозы
                совершают либо поездки к незаполненным контейнерам (лишние
                затраты), либо к переполненным контейнерам (приводящим к
                замусориванию территории, жалобам жителей и санкциям со стороны
                муниципальных властей).
              </p>
              <p className="article__text article__text-last">
                Так как российское законодательство в настоящее время не
                предъявляет требований к обеспечению площадок для хранения
                бытовых отходов средствами мониторинга, эта деятельность
                регулируется рынком. Именно поэтому все больше российских
                региональных операторов по обращению с бытовыми отходами
                внедряют системы мониторинга наполнения мусорных контейнеров,
                ведь они позволяет организовать вывоз мусора по принципу «точно
                в срок». Для населения это означает чистоту и порядок на
                площадках, а для регионального оператора — значительную экономию
                затрат на перевозках и обеспечение высоких стандартов качества
                обслуживания.
              </p>
              <h2 className="article__subtitle article__right-column">
                Выводы
              </h2>
            </div>

            <div className="article__container">
              <div className={`article__image-container ${window.innerWidth < 1100 ? 'article__image-container_mini-recycle' : ''} ${window.innerWidth < 500 ? 'article__image-container_medium-beach' : ''}`}>
                <img
                  className="article__image"
                  src={trash_can_mini}
                  alt="Логотип 'VideoFor'"
                />
              </div>
              <div className="article__container-text">
                <p className="article__text">
                  Раздельный сбор мусора в России по-настоящему заработает
                  только одновременно с организацией экономически оправданного
                  процесса по раздельному вывозу мусора. Если по требованиям
                  СанПиН смешанный мусор необходимо вывозить зимой не реже
                  одного раза в три дня, а летом не реже одного раза в день, то
                  контейнеры с вторсырьем по новым требованиям допускается
                  опорожнять до одного раза в
                </p>
              </div>
            </div>

            <div className="article__under-text-container">
              <p className="article__text">
                семь дней. Поэтому, чтобы рейсы мусоровозов к площадкам для
                хранения бытовых отходов и вторсырья были экономически
                оправданными, необходимо полностью исключить поездки к
                незаполненным контейнерам, используя данные о заполнении
                контейнеров и выстраивая оптимальные логистические маршруты.
              </p>

              <p className="article__text">
                Мировой рынок утилизации отходов прогнозирует уверенный рост в
                горизонте 2020-2025 лет на 75%. Требования населения к качеству
                оказываемых услуг возрастают по мере перехода городов в
                категорию «Умный город». Это вызывает усиление контрактных
                требований к своевременному вывозу бытовых отходов с площадок и
                обострение конкуренции между региональными операторами по
                обращению с бытовыми отходами.
              </p>
              <p className="article__text article__text-second">
                Поэтому региональным операторам необходимо начинать уже сегодня
                создавать систему мониторинга, которая будет жизненно необходима
                завтра. На какой технологии будет работать эта система и какие
                метрики мониторинга будут в ней обрабатываться, каждый
                регоператор будет решать исходя из места, времени и
                обстоятельств.
              </p>
              <p className="article__text article__text-second">
                Единственное, о чем можно говорить с уверенностью, это о том,
                что время раздельного обращения с мусором в нашей стране пришло,
                а отступать нам некуда, позади – планета, здоровье и наша жизнь.
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

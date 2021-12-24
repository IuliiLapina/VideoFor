import React from "react";
import beach from "../images/article/beach.png";
import hand from "../images/article/hand.png";
import circle from "../images/article/circle.png";
import jump from "../images/article/jump.png";
import tower from "../images/article/tower.png";
import people from "../images/article/people.png";
import swimming from "../images/article/swimming.png";
import Blog from "./blog/Blog";

function BlogBeach() {
  const [isOpenBlog, setIsOpenBlog] = React.useState(false);

  function openBlog() {
    setIsOpenBlog(true);
  }

  return (
    <>
      <section className="article">
        <div className="article__container">
          <img
            className="article__image"
            src={beach}
            alt="Логотип 'VideoFor'"
          />
          <div className="article__container-text">
            <p className="article__time">
              9 мин &#32; &#183; &#32; &#32; 08 декабря 2021
            </p>
            <h1 className="article__title">
              «Умный пляж» или как обеспечить комплексную безопасность людей на
              водоеме
            </h1>
            <p className="article__text">
              Ежегодно в мире от утопления погибает около 320 тысяч человек. Это
              третья по значимости причина смерти, на долю которой приходится
              около 7% всех смертей связанных с травмами. В прибрежных городах
              по всему миру проживает около 60% населения Земли. Мужчины и дети
              этой части населения подвергаются наибольшему риску утопления
              из-за упрощенного доступа к воде. Например, в Китае и США
              утопление является первой и, соответственно, второй по значимости
              причиной смерти от травм среди детей в возрасте 1-14 лет.
            </p>
          </div>
        </div>

        <div className="article__under-text-container article__under-text-container_mini-bottom">
          <p className="article__text">
            Россия входит в число мировых лидеров по объему водных ресурсов: 2,7
            млн. озер, 2,8 млн. рек общей длиной 12,4 млн. км и 30 тысяч
            водохранилищ. Близость населенных пунктов к водоемам и расширенный
            доступ людей к воде являются существенным фактором риска смерти от
            утопления для значительной части населения нашей страны. Да,
            ежегодно количество смертей от утопления в России по данным Росстата
            снижается. Так, за период с 2011 по 2019 год количество смертей
            снизилось более, чем вдвое (с 8272 до 3935 фактов утопления
            соответственно). Для предотвращения утопления в основном
            используются такие организационные мероприятия как установление
            специальных знаков и ограждений вокруг мест для плавания, обучение
            детей плаванию, проведение тренингов по спасению жизни,
            информирование о глубине водоема и толщине льда, своевременное
            предупреждение о шторме или наводнении (голосовое, и
            смс-оповещение).
          </p>
          <h2 className="article__subtitle article__right-column">
            Достаточно ли принимаемых мер по обеспечению безопасности на
            водоемах
          </h2>
        </div>

        <div className="article__container">
          <img className="article__image" src={hand} alt="Логотип 'VideoFor'" />
          <div className="article__container-text">
            <p className="article__text">
              Проведем оценку потенциала для улучшения уровня безопасности на
              водных объектах путем сравнительного анализа действенности мер по
              обеспечению безопасности на автомобильных дорогах (10,8 тысяч
              постов фото-видеофиксации, стационарные посты, а также мобильные
              экипажи) и безопасности акваторий (12 тысяч постов и спасательных
              станций). Соотношение количества погибших в 2019 году от утопления
              (около 4 тысяч человек) к погибшим в ДТП (13,3 тысячи человек)
              составляет 1 к 3, тогда как соотношение зарегистрированных
              маломерных судов (1,5 млн.) к объектам автотранспорта (53 млн.)
              составляет 1 к 35. А соотношение количества зафиксированных
              нарушений правил пользования водными объектами (34 тыс.) к
              нарушениям ПДД (106 млн.) составляет 1 к 3000, что наглядно
              демонстрирует незначительность профилактических мер по снижение
              смертности на водных объектах. Спасательные посты и станции не
              оборудованы специальными техническими комплексами мониторинга,
              позволяющими фиксировать нарушения правил эксплуатации водных
              объектов (аналогично комплексам фото-видеофиксации). Мониторинг
              безопасности на водных объектах полностью возложен на спасателей
              (это исключительно «человеческий фактор»).
            </p>
          </div>
        </div>

        <div className="article__under-text-container article__under-text-container_mini-bottom">
          <p className="article__text">
            Следует признать, что общая тенденция по оснащению территорий общего
            пользования средствами мониторинга является оправданной. Так,
            использование систем видеонаблюдения в парках и скверах позволяет
            снизить количество совершаемых правонарушений и повысить их
            раскрываемость, а развитие систем фото-видеофиксации, направленных
            на профилактику нарушений ПДД, позволило снизить число смертей в ДТП
            в России за пять лет на 26%. Цифры статистики показывают, что
            количество погибших на водных объектах в удельном сравнении на
            порядок выше, чем на автомобильных дорогах. Этот факт дает основание
            полагать, что при повсеместном внедрении и оборудовании акваторий
            специальными техническими средствами мониторинга и развитии у
            населения культуры ответственного отношения к правилам эксплуатации
            водных объектов имеется значительный потенциал по уменьшению числа
            утоплений. Эти предложения уже поддержали Профессиональный Союз
            моряков и Совет Федерации.
          </p>

          <ul className="article__list">
            <p className="article__subtitle article__subtitle-list">
              По оценкам экспертов основными причинами происшествий на водоемах,
              приводящих к утоплению сегодня являются:
            </p>
            <li className="article__list-item">
              — купание в состоянии наркотического и алкогольного опьянения;
            </li>
            <li className="article__list-item">
              — нарушение правил эксплуатации судов;
            </li>
            <li className="article__list-item">
              — чрезмерная самонадеянность;
            </li>
            <li className="article__list-item">
              — неинформированность людей о потенциальной опасности;
            </li>
            <li className="article__list-item">
              — купание в необорудованных местах;
            </li>
            <li className="article__list-item">
              — оставление детей без присмотра.
            </li>
          </ul>
          <p className="article__text">
            По Указу президента РФ до 2030 года необходимо снизить количество
            происшествий на водных объектах по сравнению с показателем 2019 года
            не менее чем на 20 %, а число погибших на водных объектах должно
            быть снижено не менее, чем на 18%. Для достижения поставленных задач
            потребуется значительное техническое оснащение спасателей и
            специальных служб.
          </p>
          <p className="article__text article__text-second">
            Исходя из доступности и функциональности существующие решения по
            обеспечению безопасности на водных объектах, как правило, базируются
            на использовании видеоаналитики.
          </p>

          <h2 className="article__subtitle article__right-column">
            Классификация алгоритмов видеоаналитики
          </h2>
        </div>

        <div className="article__container">
          <img
            className="article__image"
            src={circle}
            alt="Логотип 'VideoFor'"
          />
          <div className="article__container-text">
            <p className="article__text">
              По сложности реализации алгоритмов видеоаналитики их можно условно
              разделить на три класса задач мониторинга:
            </p>
            <h3 className="article__list-title">
              1. Стандартные средства видеоаналитики
            </h3>
            <p className="article__text-list">
              Теоретически могут быть реализованы большинством «умных камер»
              популярных вендоров (Hikvision, Dahua, Axis и т.д.):
            </p>
            <p className="article__text-list">
              1.1 Купание в запрещенных местах и заплыв человека «за буйки»;
            </p>
            <p className="article__text-list">
              Данная видеоаналитика в теории является частным случаем от события
              «пересечение человеком запрещенной зоны», но, поскольку системы,
              основанные на общих моделях обучения детекции людей, не
              предназначены для обнаружения человека по части изображения, то
              фактическая
              <br />
              применимость общих алгоритмов остается под вопросом.
            </p>
            <p className="article__text-list">
              1.2 Опасное приближение судна к зоне купания;
            </p>
            <p className="article__text-list">
              1.3 Нахождение людей на перилах мостов, набережных, причалов.
            </p>
          </div>
        </div>

        <div className="article__under-text-container article__under-text-container_mini-bottom">
          <p className="article__text">
            Для разбора ограничений применимости возьмем наиболее актуальные, на
            момент выхода статьи, интеллектуальные системы видеонаблюдения.
            Например, Hikvision DeepinView. Для целей охраны периметра камеры
            DeepinView 7 серии используют интеллектуальные алгоритмы
            видеоанализа, которые позволяют снизить количество ложных тревог, а
            также настроить сигналы тревоги с помощью классификации целей. Можно
            настроить срабатывание тревоги только на людей или только на
            транспортные средства, которые попадают в поле зрения камеры. Другой
            вариант – настроить исключение, чтобы камера реагировала, например,
            только на автомобили.
          </p>
          <p className="article__text article__text-medium">
            Дополнительная функция Auto Tracking предназначена для сценариев с
            низкой активностью. Камера будет реагировать только на движущиеся
            объекты, фокусируясь на конкретной цели, тем самым повышая
            эффективность работы системы безопасности и позволяя экономить место
            в хранилище. Как показывает анализ функций, система здраво разделяет
            фазы детекции и следования, используя для последнего алгоритмы типа
            «отслеживание без обнаружения (DFT)», в которой обнаружение новых
            объектов происходит непостоянно, а ограничения по размеру объектов
            детекции и используемая модель делают это решение применимым, в
            основном в зонах полного запрета или для контроля, например в
            запрещенные часы.
          </p>
          <p className="article__text">
            Примерно этим же характерны все вендоры, выпустившие в 2020 году
            накамерные аналитики на нейронных сетях, но минус накамерных
            аналитик все тот же: низкая производительность процессоров камер,
            которая приводит к ограничениям по количеству одновременных
            аналитик, а также накладывает ограничения по использованию
            определенных моделей камер, стоимость которых заведомо дороже.
          </p>
        </div>

        <div className="article__container">
          <img className="article__image" src={jump} alt="Логотип 'VideoFor'" />
          <div className="article__container-text">
            <h3 className="article__list-title article__list-title_second">
              2. Видеокамеры с видеоаналитикой на основе технологий DEEPMIND
              <span className="article__title-span">(например: IVA Bosch)</span>
            </h3>
            <p className="article__text-list">
              Формально являясь накамерной аналитикой, по факту работают при
              участии ресиверов, обладающих достаточной мощностью для
              одновременного запуска нескольких вендорных аналитик на канал и
              занимаются внутренним проксированием:
            </p>
            <p className="article__text-list">
              2.1 Падение (прыжок) человека с моста, набережной или причала;
            </p>
            <p className="article__text-list">2.2 Выход человека на лёд;</p>
            <p className="article__text-list">
              2.3 Пожар (взрыв) на водном объекте;
            </p>
            <p className="article__text-list">
              2.4 Плавание на надувных и других не предназначенных для этих
              целей средствах;
            </p>

            <h3 className="article__list-title article__list-title_last">
              3. Задачи, требующие частного решения:
            </h3>
            <p className="article__text-list">
              3.1 Человек, терпящий бедствие на воде (риск утопления);
            </p>
            <p className="article__text-list">
              3.2 Проваливание человека под лёд;
            </p>
            <p className="article__text-list">
              3.3 Столкновение судов, посадка судна на мель, кораблекрушение;
            </p>
            <p className="article__text-list">
              3.4 Подозрительное поведение человека.
            </p>
          </div>
        </div>

        <div className="article__under-text-container article__under-text-container_mini-top">
          <p className="article__text">
            Решение задач третьего класса сложности базируется на обеспечении
            непрерывного трекинга объекта мониторинга в сочетании с некоторыми
            частными метриками.
          </p>
          <p className="article__text article__text-second">
            Реализация функционала непрерывного трекинга человека является
            достаточно сложной задачей даже в «лабораторных условиях», а в
            водной среде или в формате накамерной аналитики выглядит практически
            нереализуемой. И это даже если вынести «за скобки» задачу
            идентификации уникальных объектов по сочетанию их характерных
            признаков (одежда, габариты, особенности движения и т. д.)
          </p>
          <p className="article__text article__text-last">
            Средство отслеживания объектов обычно состоит из трех частей: модели
            внешнего вида, модели движения и модели обновления. Общий поток
            алгоритма отслеживания объекта описывается следующим образом: каждый
            отслеживаемый объект представлен путем моделирования и модель
            внешнего вида устанавливается на основе исходной информации. Модель
            внешнего вида используется для определения местоположения объекта в
            текущем кадре. На основе результатов отслеживания по отношению к
            текущему кадру, стратегия обновления используется для обновления
            модели внешнего вида, чтобы позволить ей адаптироваться к изменениям
            в объекте и окружающей среде. Основной проблемой непрерывности
            трекинга является обеспечение его в водной среде при нырянии или
            плавании под водой, когда человек временно пропадает в зоне
            мониторинга.
          </p>
        </div>

        <div className="article__container">
          <img
            className="article__image"
            src={tower}
            alt="Логотип 'VideoFor'"
          />
          <div className="article__container-text">
            <p className="article__text">
              Рассмотрим способы решения этой задачи на примере типового
              водоема, условно разделенного на 3 участка:
            </p>
            <ul className="article__list article__list_container">
              <li className="article__list-item article__list-item_point">
                — зона пляжа (отлогий берег, предназначенный для солнечных ванн
                и входа в воду для купания), представляющая прямоугольный
                участок порядка 30 х 200 метров;
              </li>
              <li className="article__list-item  article__list-item_point">
                — зона купания (разрешенный для плавания людей участок
                акватории, ограниченный сигнальными буями), представляющая
                прямоугольный участок порядка 50 х 200 метров;
              </li>
              <li className="article__list-item  article__list-item_point">
                — зона акватории (участок водной поверхности, находящийся за
                пределами зоны купания), представляющий открытое пространство
                водной поверхности водоема ограниченное естественными границами
                объекта.
              </li>
            </ul>
          </div>
        </div>

        <div className="article__under-text-container">
          <p className="article__text">
            Человек на берегу: объект с характерными размерами от 100 до 200 см
            по высоте и от 30 до 70 см по ширине и скоростями от 2 до 6 км/час.
            Человек на воде: пловец: объект с характерными размерами от 20 до 50
            см по высоте и ширине и характерными скоростями от 1 до 4 км/час.
          </p>
          <p className="article__text article__text-medium">
            В среднем, комфортная продолжительность пребывания под водой
            обычного человека при нырянии составляет около 10 секунд.
            Разумеется, исключением являются профессионалы и любители подводного
            плавания, количество которых относительно числа отдыхающих невелико
            и может быть отнесено к ошибкам системы измерения (на этапе обучения
            модели).
          </p>
          <p className="article__text">
            Главным принципом размещения видеокамер на пляже является
            необходимость полного обзора (охвата) зоны пляжа и зоны купания. Для
            исключения «слепых зон», избыточного размещения камер, ошибок
            трекинга при переходе между зонами мониторинга (при использовании
            нескольких камер) рекомендуется использовать камеры видеонаблюдения
            панорамного типа c несколькими сенсорами и горизонтальным углом
            обзора от 180°. Это обеспечивает предоставление единого изображения
            с контролируемого участка при помощи только одной видеокамеры.
          </p>
        </div>

        <div className="article__container">
          <img
            className="article__image"
            src={people}
            alt="Логотип 'VideoFor'"
          />
          <div className="article__container-text">
            <p className="article__text">
              Например, при размещении на рассматриваемом нами водном объекте
              камеры Hikvision DS-2CD6944G0-IHS (4МП x 6mm х 4) на опоре на
              высоте 4 метра на удалении 40 метров от линии берега: на пляже и в
              зоне купания будет обеспечен показатель точности порядка более 50
              пиксел/метр, что достаточно для трекинга человека как на суше, так
              и в воде.
            </p>
            <p className="article__text article__text-second">
              Подобные камеры мультисенсорного типа предоставляют для системы
              компьютерного зрения единое изображение с участка пляжа и зоны
              купания. При покадровом анализе изменения трекинга людей на
              изображении алгоритм обеспечивает ведение онлайн-статистики
              объектов в зоне мониторинга и позволяет выявить «аномальные
              объекты», то есть те, которые «пропали» или «появились»
              относительно предыдущих и последующих кадров. Отделение
              «аномальных объектов» от основного пула объектов в воде
              осуществляется за счет использования совокупности алгоритмов,
              характерных для поведения человека в воде, таких как: скорость,
              инерция и вектор движения пловца, а также комфортное и допустимое
              время нахождения пловца под водой.
            </p>
          </div>
        </div>

        <div className="article__under-text-container">
          <p className="article__text">
            Это позволяет с определенной долей вероятности прогнозировать
            выныривание пловца в определенном радиусе от точки ныряния и
            верифицировать его идентификацию. «Аномальные» события также могут
            происходить и в зоне пляжа. Например, кратковременное загораживание
            одного объекта другим является «нормальным» событием и просто должно
            пройти обучение алгоритма для исключения ложных сигналов, а
            оставленный без присмотра предмет уже должен вызвать подозрения у
            специальных служб.
          </p>
          <p className="article__text article__text-second">
            Для чего нужно решать столь нетривиальную задачу? Выше уже было
            рассмотрено, что для обеспечения безопасности на водных объектах не
            достаточно только существующих на рынке решений, и необходимо
            разработать специальные алгоритмы и технологии компьютерного зрения.
            Но существует и другая веская причина для выполнения таких
            разработок – это тренд цифровизации отрасли пляжного туризма.
            Развитие туристической индустрии и конкуренция постоянно повышают
            требования к комфорту и безопасности отдыхающих в России и в мире.
          </p>
        </div>

        <div className="article__container">
          <img
            className="article__image"
            src={swimming}
            alt="Логотип 'VideoFor'"
          />
          <div className="article__container-text">
            <p className="article__text">
              Все большую популярность обретает концепция «умный пляж», которая
              уже начала внедряться на Пхукете, в Дубае и Хайфе. Сюда входит
              обеспечение посетителей wi-fi, камерами хранения, автоматическая
              уборка мусора, развитая система информирования и безопасности.
              Современные мировые тренды также начали поддерживаться в некоторых
              российских городах, например в Москве, Сочи и Иркутске.
              Муниципальные власти начали устанавливать на пляжах «умные
              камеры», детекторы металла и другие средства для обеспечения
              безопасности людей на пляже.
            </p>
            <p className="article__text article__text-second">
              «Умный пляж» – это зона беспрецедентного комфорта и комплексной
              безопасности. Трекинг людей в сочетании с данными о погодных
              условиях, получаемых от метеостанции или из открытых источников,
              открывает доступ к измерению продолжительности нахождения человека
              в воде и на солнце. В дополнение к данным о температуре воды,
              воздуха, давления атмосферного воздуха и солнечной активности
              система может предоставлять как общие, так и индивидуальные
              рекомендации (например, в формате голосовых оповещений) для
              посетителей пляжа во избежание рисков переохлаждения, перегрева
              или обострения сердечных заболеваний.
            </p>
          </div>
        </div>

        <div className="article__under-text-container">
          <p className="article__text">
            Высокий уровень внимания к посетителям пляжа – это целый комплекс
            организационно-технических мероприятий, в котором нет мелочей.
            Оставленный у воды без присмотра малолетний ребенок или взрослый
            человек, походка которого выдает болезненное состояние, должны быть
            обнаружены системой компьютерного зрения, которая оповестит
            спасателя или воспроизведет голосовое оповещение по определенному
            сценарию. Забота о безопасности и комфорте людей – вот, что движет
            развитием сегодня, вне зависимости от того, где мы находимся: на
            суше, воздухе или на море.
          </p>
        </div>
      </section>

      <button className="blog__button" onClick={openBlog}>
        ДРУГИЕ СТАТЬИ
      </button>
      {isOpenBlog ? <Blog /> : ""}
    </>
  );
}

export default BlogBeach;

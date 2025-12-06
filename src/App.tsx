  import './normalize.css'
  import './App.css'
  import logo from './assets/Midis_logo.svg'
  import CircleIcon from '@mui/icons-material/Circle';

  function Export_excel() {
    alert("Чето будет я хз")
  }

  function Print_execut() {
    window.print()
  }

  function App() {
    return (
      <>
        <div className="main">
          <div className="workspace">
            <div className="logo">
              <div className="image">
                <img src={logo} alt="Логотип МИДиС" />
              </div>
              <div className="text">
                <p>Проверка учебных <br /> документов</p>
              </div>
            </div>
            <div className="errors">
              <div className="text">
                <p>Найдено 12 совпадений (3 крит, 5 выс, 4 сред)</p>
              </div>
              <div className="export-button">
                <button onClick={Export_excel}>Экспорт в Excel</button>
              </div>
            </div>
            <div className="sort-main">
              <div className="sort">
                <form action="" className='Filters'>
                  <p><select name="filters" id="" className='Type'>
                    <option value="" selected>Тип</option>
                    <option value="Часы">Часы</option>
                    <option value="Темы">Темы</option>
                    <option value="Название">Название</option>
                    </select></p>
                  <p><select name="filters" id="" className='Discipline'>
                    <option value="" selected>Дисциплина</option>
                    <option value="ЕН.03">ЕН.03</option>
                    <option value="ЕН.03">ПМ.01</option>
                    <option value="ЕН.03">УП.02</option>
                    <option value="ZZ.02">ZZ.02</option>
                    </select></p>
                  <p><select name="filters" id="" className='priority'>
                    <option value="" selected>Приоритет</option>
                    <option value="Критический">Критический</option>
                    <option value="Высокий">Высокий</option>
                    <option value="Средний">Средний</option>
                    </select></p>
                  <p className='Description'>Описание</p>
                </form>
              </div>
            </div>
            <div className="main-info">
              <div className="Type-info">
                <p>Часы</p>
                <p>Темы</p>
                <p>Название</p>
                <p>Название</p>
                <p>Часы</p>
                <p>Темы</p>
                <p>Название</p>
                <p>Название</p>
              </div>
              <div className="Discipline-info">
                <p>ЕН.03</p>
                <p>ПМ.01</p>
                <p>УП.02</p>
                <p>ZZ.02</p>
                <p>ЕН.03</p>
                <p>ПМ.01</p>
                <p>УП.02</p>
                <p>ZZ.02</p>
              </div>
              <div className="Priority-info">
                <p>Критический</p>
                <p>Высокий</p>
                <p>Средний</p>
                <p>Высокий</p>
                <p>Критический</p>
                <p>Высокий</p>
                <p>Средний</p>
                <p>Высокий</p>
              </div>
              <div className="Desciption-info">
                <p>Несоответствие в несоответствии...</p>
                <p>Отсутствует вообще все о чем гов...</p>
                <p>Расхождение в нейронах мозго...</p>
                <p>Расхождение в нейронах мозго...</p>
                <p>Несоответствие в несоответствии...</p>
                <p>Отсутствует вообще все о чем гов...</p>
                <p>Расхождение в нейронах мозго...</p>
                <p>Расхождение в нейронах мозго...</p>
              </div>
            </div>
            <div className="last-buttons">
              <button className='Print' onClick={Print_execut}>Распечатать отчет</button>
              <button className='unload'>Выгрузить отчет</button>
              <button className='Scan'>Сканировать</button>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default App

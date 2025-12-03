  import { useState } from 'react'
  import './App.css'
  import logo from '../public/Midis_logo.svg'

  function Export_excel() {
    alert("Чето будет я хз")
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
                    <option value="" disabled selected>Тип</option>
                    <option value="Часы">Часы</option>
                    <option value="Темы">Темы</option>
                    <option value="Название">Название</option>
                    </select></p>
                  <p><select name="filters" id="" className='Discipline'>
                    <option value="" disabled selected>Дисциплина</option>
                    <option value="ЕН.03">ЕН.03</option>
                    <option value="ЕН.03">ПМ.01</option>
                    <option value="ЕН.03">УП.02</option>
                    <option value="ZZ.02">ZZ.02</option>
                    </select></p>
                  <p><select name="filters" id="" className='priority'>
                    <option value="" disabled selected>Приоритет</option>
                    <option value="Критический">Критический</option>
                    <option value="Высокий">Высокий</option>
                    <option value="Средний">Средний</option>
                    </select></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default App

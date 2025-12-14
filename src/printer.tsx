import logo from './assets/Midis_logo.svg'
import "./normalize.css"
import { useLocation } from 'react-router-dom'

export default function PrintApp() {
  const location = useLocation()
  const errors = location.state?.errors?.filteredErrors ?? [];
  console.log(JSON.stringify(errors))
  return (
    <div className="main">
      <div className="printer-workspace">
        <div className="logo">
          <div className="image">
            <img src={logo} alt="Логотип МИДиС" />
          </div>
        </div>
        <div className="logo-text">
          <p>Проверка учебных документов</p>
        </div>

        <div className="printer-sections">
          <div className="type">
            <p className='Type'>Тип</p>
            <p className='Discipline'>Дисциплина</p>
            <p className='priority'>Приоритет</p>
            <p className='Description'>Описание</p>
          </div>
        </div>
      
        <div className="printer-main-info">
          {errors.length > 0 ? (
            errors.map((error: any, index: any) => (
              <div className="card" key={index}>
                <div className="card-column Card-Type"><p>{error.type}</p></div>
                <div className="card-column Discipline-card"><p>{error.discipline}</p></div>
                <div className="card-column Priority-Card">
                  <p>{error.priority}</p>
                </div>
                <div className="card-column Desc-Card"><p>{error.description}</p></div>
              </div>
            ))
          ) : (
            <p>Нет ошибок для печати Ошибок: {errors.length}</p>
          )}
          </div>
        </div>
    </div>
  )
}
